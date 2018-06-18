import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SendData, YouTubeData, YouTubeItem, YouTubeSnippet } from './interfaces/YouTubeData';
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

  getSubs(page?:string):Observable<string>{
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
  getUploadsPlaylistIDAndSetCreators():Observable<string>{
    let dataToSend:SendData  = {
		  'part': 'snippet, contentDetails',
		  'maxResults':PAGE_SIZE,
		  'key': API_KEY
    }
    let subs = this.getSubs();
    return subs.flatMap<string, string>(sub => {
      dataToSend['id'] = sub;
      let url = this.uriEncode(this.playlistItemsURL, dataToSend);
      return this.http
        .get<YouTubeData>(url)
        .map<YouTubeData, string>(data => {
          let item = data.items[0];
          this.creators.push(item.snippet);
          return item.contentDetails.relatedPlaylists.uploads
        });
    });
  }
  getVideosInPlaylist(page?:string){
    let playlistIds = this.getUploadsPlaylistIDAndSetCreators();
    let dataToSend = {
      'part': 'snippet',
      'maxResults':PAGE_SIZE,
      'key': API_KEY
    }
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
