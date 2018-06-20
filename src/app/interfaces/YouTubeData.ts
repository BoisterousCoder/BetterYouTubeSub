export class Video{
    publishedAt:Date;
    creator:YouTubeSnippet;
    channelTitle:string;
    constructor(public id:string, data:YouTubeSnippet){
        this.publishedAt = new Date(data.publishedAt);
        this.channelTitle = data.channelTitle;
    }
}
export interface SendData{
    id?:string;
    playlistId?:string;
    channelId?: string;
    maxResults?: number;
    forUsername?:string;
    pageToken?:string;
    part:string;
    key:string;
}
export interface YouTubeData{
    kind:string;
    eTag:string;
    nextPageToken?:string;
    prevPageToken?:string;
    pageInfo:{
        totalResults:number;
        resultsPerPage:number;
    }
    items:YouTubeItem[]
}
export interface YouTubeItem{
    kind:string;
    eTag:string;
    id:string;
    snippet:YouTubeSnippet;
    contentDetails?:YouTubeContentDetails
}
export interface YouTubeContentDetails{
    relatedPlaylists:{
        uploads: string;
        watchHistory: string;
        watchLater: string;
    }
}
export interface YouTubeSnippet{
    publishedAt?: string;
    channelId?: string;
    title?: string;
    customUrl?: string;
    description?: string;
    thumbnails?: Thumbnails;
    channelTitle?: string;
    playlistId?:string;
    position?:number;
    tags?: string[];
    categoryId?: number;
    liveBroadcastContent?: string;
    defaultLanguage?: string;
    resourceId?:YouTubeResource
    localized?: {
        title: string;
        description: string;
    },
    defaultAudioLanguage?:string;
}
export interface YouTubeResource{
    kind: string;
    channelId?: string;
    videoId?:string;
}
export interface Thumbnails{
    default?: Thumbnail,
    medium?: Thumbnail,
    high?: Thumbnail,
    standard?: Thumbnail,
    maxres?: Thumbnail
}
export interface Thumbnail{
    url:string;
    width:number;
    height:number;
}