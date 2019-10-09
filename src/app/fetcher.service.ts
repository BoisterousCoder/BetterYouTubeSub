/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_KEY = 'AIzaSyCBs5okQYwYL8XghpWFaf3YYKrBJUjnJi0'
const PAGE_SIZE = 10;

@Injectable({
	providedIn: 'root',
})
export class FetcherService {
	public subs = [];
	constructor(private http: HttpClient) {
	}
	private getRequest(folder:string, extraParams:any, isIncludingDetails:boolean){
		const url = "https://www.googleapis.com/youtube/v3/"+folder;
		let params = {'key': API_KEY}
		if(isIncludingDetails) params['part'] = 'snippet, contentDetails, statistics';
		else params['part'] = 'snippet';
		for(let paramName in extraParams) params[paramName] = extraParams[paramName];
		let request = url + '?' + paramsToGetRequest(params);;
		return this.http.get(request).toPromise();
	}
	getChannelIDByUsername(username:string){
		return new Promise<string>((resolve, reject) => {
			this.getRequest("channels", {'forUsername': username}, false).then((data:any) =>{
				if(data.items.length < 1) {
					alert("invalid username");
					reject(new Error('invalid username'));
				}else resolve(data.items[0].id);
			}).catch((err) => {
				reject(new Error('Error Collecting Data \r' + err + '\r cant collect data for "getChannelIDByUsername"'));
			});
		});
	}
	getUploadsPlaylistID(channelId){
		function getIndexToSet(channelData, subs){
			let i = 0;
			for(let sub of subs){
				if(sub.title == channelData.snippet.title) return i;
				else i++;
			}
			return subs.length;
		}
		return new Promise((resolve, reject) => {
			this.getRequest("channels", {'id': channelId}, true).then((data:any) =>{
				data.items.map((channelData, i) => {
					if(i ==0){
						let sub = channelData.snippet;
						sub.stats = channelData.statistics;
						this.subs[getIndexToSet(channelData, this.subs)] = sub;
						resolve(channelData.contentDetails.relatedPlaylists.uploads)
					} else {
						reject("HOW IS THIS POSSIBLE?!?!");
					}
				});
			}).catch((err) => {
				reject(new Error('Error Collecting Data \r' + err + '\r cant collect data for "getUploadsPlaylistID"'));
			});
		});
	}
	getSubs(channelId, page?){
		return new Observable((observer) => {
			let params = {'channelId': channelId, 'maxResults':PAGE_SIZE}
			if(page){
				params['pageToken'] = page;
			}
			this.getRequest("subscriptions", params, false).then((data:any) =>{
				data.items.map(subData => {
					observer.next(subData.snippet.resourceId)
				});
				if(data.nextPageToken){
					this.getSubs(channelId, data.nextPageToken).subscribe(value => {
						observer.next(value);
					});
				}
			}).catch((err) => {
				alert(new Error('Error Collecting Data \r' + err + '\r cant collect data for "getSubs"'));
				observer.complete();
			});
		});
	}
	getVideo(videoId){
		return new Promise((resolve, reject) => {
			this.getRequest("videos", {'id': videoId}, false).then((data:any) =>{
				data.items.map((channelData, i) => {
					if(i ==0){
						resolve(channelData.snippet)
					} else {
						reject("HOW IS THIS POSSIBLE?!?!");
					}
				});
			}).catch((err) => {
				reject(new Error('Error Collecting Data \r' + err + '\r cant collect data for "getVideo"'));
			});
		});
	}
	getVideosInPlaylist(playlistId, startDate, page?){
		return new Observable((observer) => {
			let params = { 'playlistId': playlistId, 'maxResults':PAGE_SIZE}
			if(page){
				params['pageToken'] = page;
			}
			this.getRequest("playlistItems", params, false).then((data:any) =>{
				let oldestVideoInListDate;
				data.items.map((videoData, i) => {
					this.getVideo(videoData.snippet.resourceId.videoId).then((video:any) => {
						if(oldestVideoInListDate == undefined){
							oldestVideoInListDate = video.publishedAt;
						}else if(dateCompare(video.publishedAt, oldestVideoInListDate) < 0){
							oldestVideoInListDate = video.publishedAt;
						}
						video.id = videoData.snippet.resourceId.videoId
						observer.next(video);
						if(i == PAGE_SIZE - 1){
							if(dateCompare(startDate, oldestVideoInListDate) < 0 && data.nextPageToken){
								this.getVideosInPlaylist(playlistId, startDate, data.nextPageToken).subscribe((data) => observer.next(data));
							}
						}
					});
				});
			}).catch((err) => {
				alert(new Error('Error Collecting Data \r' + err + '\r cant collect data for "getVideosInPlaylist"'));
			});
		});
	}
	getAllVideosBetween(startDate, endDate, channelId){
		return new Observable((observer) => {
			this.getSubs(channelId).subscribe((sub:any) => {
				this.getUploadsPlaylistID(sub.channelId).then((uploadsId) => {
					this.getVideosInPlaylist(uploadsId, startDate).subscribe( (video:any) =>{
						let isAfterStartDate = dateCompare(video.publishedAt, startDate) > 0;
						let isBeforeEndDate = dateCompare(video.publishedAt, endDate) <= 0
						if(isAfterStartDate && isBeforeEndDate){
							let channel;
							for(let sub of this.subs){
								if(sub.title == video.channelTitle){
									channel = sub;
									break;
								}
							}
							observer.next([video, channel]);
						}
					});
				});
			});
		});
	}
}

function paramsToGetRequest(params:any) {
	var str = "";
	for (var key in params) {
		if (str != "") {
			str += "&";
		}
		str += key + "=" + encodeURIComponent(params[key]);
	}
	return str;
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