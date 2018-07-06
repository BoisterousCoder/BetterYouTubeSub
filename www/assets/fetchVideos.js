/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
const API_KEY = 'AIzaSyCBs5okQYwYL8XghpWFaf3YYKrBJUjnJi0';
const PAGE_SIZE = 5;
let subs = [];

function getChannelIDByUsername(username, callback){
	$.ajax({
		url:"https://www.googleapis.com/youtube/v3/channels",
		dataType: 'jsonp',
		crossDomain: true,
		data:{
			'forUsername': username,
			'part': 'snippet',
			'key': API_KEY
		},
		success: function(data){
			if(data.items.length < 1) alert("invalid username");
			else callback(data.items[0].id);
		},
		error:function(){
			alert("Error");
		}      
	})
}
function getUploadsPlaylistID(channelId, callback){
	function getIndexToSet(channelData){
		let i = 0;
		for(let sub of subs){
			if(sub.title == channelData.snippet.title) return i;
			else i++;
		}
		return subs.length;
	}
	$.ajax({
		url:"https://www.googleapis.com/youtube/v3/channels",
		dataType: 'jsonp',
		crossDomain: true,
		data:{
			'id': channelId,
			'part': 'snippet, contentDetails, statistics',
			'key': API_KEY
		},
		success: function(data){
			data.items.map((channelData, i) => {
				if(i ==0){
					let sub = channelData.snippet;
					sub.stats = channelData.statistics;
					subs[getIndexToSet(channelData)] = sub;
					callback(channelData.contentDetails.relatedPlaylists.uploads)
				} else {
					console.error("HOW IS THIS POSSIBLE?!?!");
				}
			});
		},
		error:function(){
			alert("Error");
		}      
	})
}
function getSubs(channelId, callback, page){
	dataToSend = {
		'channelId': channelId,
		'part': 'snippet',
		'maxResults':PAGE_SIZE,
		'key': API_KEY
	}
	if(page){
		dataToSend['pageToken'] = page;
	}
	$.ajax({
		 url:"https://www.googleapis.com/youtube/v3/subscriptions",
		 dataType: 'jsonp',
		 crossDomain: true,
		 data: dataToSend,
		 success:function(data){
			data.items.map((subData, i) => {
				callback(subData.snippet.resourceId, i)
			});
			if(data.nextPageToken){
				getSubs(channelId, callback, data.nextPageToken);
			}
		 },
		 error:function(){
			 alert("Error");
		 }      
	})
}
function getVideosInPlaylist(playlistId, startDate, callback, page){
	dataToSend = {
		'playlistId': playlistId,
		'part': 'snippet',
		'maxResults':PAGE_SIZE,
		'key': API_KEY
	}
	if(page){
		dataToSend['pageToken'] = page;
	}
	$.ajax({
		 url:"https://www.googleapis.com/youtube/v3/playlistItems",
		 dataType: 'jsonp',
		 crossDomain: true,
		 data: dataToSend,
		 success:function(data){
			let oldestVideoInListDate;
			data.items.map((videoData, i) => {
				getVideo(videoData.snippet.resourceId.videoId, video => {
					if(oldestVideoInListDate == undefined){
						oldestVideoInListDate = video.publishedAt;
					}else if(dateCompare(video.publishedAt, oldestVideoInListDate) < 0){
						oldestVideoInListDate = video.publishedAt;
					}
					video.id = videoData.snippet.resourceId.videoId
					callback(video, i);
					if(i == PAGE_SIZE - 1){
						if(dateCompare(startDate, oldestVideoInListDate) < 0 && data.nextPageToken){
							getVideosInPlaylist(playlistId, startDate, callback, data.nextPageToken)
						}
					}
				});
				
					
			});
		 },
		 error:function(){
			 alert("Error");
		 }      
	})
}
function getVideo(videoId, callback){
	$.ajax({
		 url:"https://www.googleapis.com/youtube/v3/videos",
		 dataType: 'jsonp',
		 crossDomain: true,
		 data:{
			'id': videoId,
			'part': 'snippet',
			'key': API_KEY
		 },
		 success:function(data){
			data.items.map((videoData, i) => {
				if(i ==0){
					callback(videoData.snippet);
				}else{
					console.error("HOW IS THIS POSSIBLE?!?!");
				}
			});
		 },
		 error:function(){
			 alert("Error");
		 }      
	})
}
function getAllVideosBetween(startDate, endDate, channelId, callback){
	getSubs(channelId, (sub, subNum) => {
		getUploadsPlaylistID(sub.channelId, (uploadsId) => {
			getVideosInPlaylist(uploadsId, startDate, (video, videoNum) =>{
				let isAfterStartDate = dateCompare(video.publishedAt, startDate) > 0;
				let isBeforeEndDate = dateCompare(video.publishedAt, endDate) <= 0
				if(isAfterStartDate && isBeforeEndDate){
					let channel;
					for(let sub of subs){
						if(sub.title == video.channelTitle){
							channel = sub;
							break;
						}
					}
					callback(video, channel);
				}
			});
		});
	});
}

function dateCompare(date, otherdate){
	date = date.split("T")[0].split("-");
	otherdate = otherdate.split("T")[0].split("-");
	function compareSection(i){
		return Number(date[i]) - Number(otherdate[i]);
	}
	let result = compareSection(0);
	if(result == 0){
		result = compareSection(1);
		if(result == 0){
			result = compareSection(2);
		}
	}
	return result;
}
