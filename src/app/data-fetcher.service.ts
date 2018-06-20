import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SendData, YouTubeData, YouTubeItem, YouTubeSnippet, Video } from './interfaces/YouTubeData';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

const API_KEY = 'AIzaSyCBs5okQYwYL8XghpWFaf3YYKrBJUjnJi0';
const PAGE_SIZE = 5;

@Injectable({
  providedIn: 'root'
})
export class DataFetcherService {
  private channelsURL = "https://www.googleapis.com/youtube/v3/channels";
  private subsURL = "https://www.googleapis.com/youtube/v3/subscriptions";
  private playlistItemsURL = "https://www.googleapis.com/youtube/v3/playlistItems";
  private videoDataURL = "https://www.googleapis.com/youtube/v3/videos";
  channelId:string = "";
  creators:YouTubeSnippet[] = [];
  startDate:Date;
  endDate:Date;
  constructor(private http: HttpClient) { }

  private getSubs(page?:string):Observable<string>{
    let dataToSend:SendData  = {
      'channelId': this.channelId,
		  'part': 'snippet',
		  'maxResults':PAGE_SIZE,
		  'key': API_KEY
    }
    if(page){
      dataToSend['pageToken'] = page;
    }
    let url = this.uriEncode(this.subsURL, dataToSend)
    return this.http
      .get<YouTubeData>(url)
      .flatMap<YouTubeData, string>((data:YouTubeData) =>{
        let obs = Observable
          .from<YouTubeItem>(data.items)
          .map<YouTubeItem, string>(item => item.snippet.resourceId.channelId);
        if(data.nextPageToken){
          let futurePages = this.getSubs(data.nextPageToken);
          return obs.concat(futurePages);
        }else{
          return obs;
        }
      });
  }
  private getUploadsPlaylistIDAndSetCreators():Observable<string>{
    let dataToSend:SendData  = {
		  'part': 'snippet, contentDetails',
		  'maxResults':PAGE_SIZE,
		  'key': API_KEY
    }
    let subs = this.getSubs();
    return subs.flatMap<string, string>(sub => {
      dataToSend['id'] = sub;
      let url = this.uriEncode(this.channelsURL, dataToSend);
      return this.http
        .get<YouTubeData>(url)
        .map<YouTubeData, string>(data => {
          let item = data.items[0];
          this.creators.push(item.snippet);
          return item.contentDetails.relatedPlaylists.uploads
        });
    });
  }
  getVideosInRange(){
    return this.getUploadsPlaylistIDAndSetCreators()
      .flatMap<string, Video>(playlistId => this.getVideosInPlaylist(playlistId))
      .filter((video) => {
        let isAfterStartDate = video.publishedAt.valueOf() - this.startDate.valueOf() < 0;
        let isBeforeEndDate = video.publishedAt.valueOf() - this.endDate.valueOf() >= 0
        return isAfterStartDate && isBeforeEndDate
      }).map(video => {
        for(let creator of this.creators){
          if(creator.title == video.channelTitle){
            video.creator = creator;
            break;
          }
        }
      })
  }
  private getVideosInPlaylist(playlistId:string, page?:string):Observable<Video>{
    let dataToSend = {
      'part': 'snippet',
      'maxResults':PAGE_SIZE,
      'key': API_KEY
    }
    if(page) dataToSend['pageToken'] = page;
    dataToSend['playlistId'] = playlistId;
    let url = this.uriEncode(this.playlistItemsURL, dataToSend);
    return this.http
    .get<YouTubeData>(url)
    .flatMap<YouTubeData, Video>(data => {
      let oldestVideo:Date;
      let videos:Video[] = [];
      for(let item of data.items){
        let video:Video = this.getVideo(item.snippet.resourceId.videoId);
        let publishDate = new Date(item.snippet.publishedAt);
        if(oldestVideo == undefined) 
          oldestVideo = publishDate;
        else if(oldestVideo.valueOf() - publishDate.valueOf() < 0)
          oldestVideo = publishDate;
        videos.push(video);
      }
      let obs = Observable.from(videos);
      if(oldestVideo.valueOf() - this.startDate.valueOf() < 0){
        let obs2 = this.getVideosInPlaylist(playlistId, data.nextPageToken)
        obs = obs.concat(obs2);
      }
      return obs;
    });
  }

  private getVideo(videoId):Video{
    let dataToSend = {
      'part': 'snippet',
			'id': videoId,
      'key': API_KEY
    }
    let url = this.uriEncode(this.videoDataURL, dataToSend);
    return this.http
        .get<YouTubeData>(url)
        .map<YouTubeData, Video>(data => {
          let snippet = data.items[0].snippet;
          return new Video(videoId, snippet)
        }).take(1);
  }
  private uriEncode(url:string, data:SendData):string{
    var str=JSON.stringify(data);
    str=str.replace(/{/g, "");
    str=str.replace(/}/g, "");
    str=str.replace(/:/g, "=")
    str=str.replace(/,/g, "&");
    str=str.replace(/"/g, "");
    return url + "?" + str;
  }
}
