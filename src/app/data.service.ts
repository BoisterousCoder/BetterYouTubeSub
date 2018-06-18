/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
import { Injectable } from '@angular/core';
import { DataFetcherService } from "./data-fetcher.service"
import 'rxjs/Rx';
declare var getAllVideosBetween: any;

@Injectable({
  providedIn: 'root'
})
export class DataService {
  listings = [];
  creators = [];
  groups = {};
  isInAddMode;
  get endDate():string{
    return this.dateToString(this.fetcher.startDate)
  }
  set endDate(value){
    this.fetcher.startDate = new Date(value);
  }
  groupToAddTo;
  subs;
  get startDate():string{
    return this.dateToString(this.fetcher.startDate)
  }
  set startDate(value){
    this.fetcher.startDate = new Date(value);
  }
  channelId = 'UCRWa5qX5vw23r_R2j1yixbA';
  constructor(private fetcher: DataFetcherService) {
    let now = new Date();
    this.isInAddMode = false;
    this.endDate = now.getFullYear() + "-" + (now.getMonth()+1) + "-" +now.getDate()
    this.startDate = now.getFullYear() + "-" + (now.getMonth()+1) + "-" + (now.getDate()-3)
    this.buildListings();

    this.fetcher.channelId = this.channelId;
    this.subs = this.fetcher.getSubs();
    this.subs.subscribe(sub => {
      console.log(sub);
    });
  }
  buildListings(){
    this.listings = [];
    this.creators = [];
    let self = this;
    getAllVideosBetween(this.startDate, this.endDate, this.channelId, (video, creator) => {
      creator.isActive = true;
      self.listings.push({video, creator})
      this.listings.sort((a, b) => {
        return -1 * this.dateCompare(a.video.publishedAt, b.video.publishedAt);
      })

      let isDuplicateCreator = false;
      for(let possibleDuplicate of self.creators){
        if(possibleDuplicate.title == creator.title) isDuplicateCreator = true
      }
      if(!isDuplicateCreator) self.creators.push(creator);
      self.sortCreators();
    });
  }
  sortCreators(){
    this.creators.sort((a, b) => {
      var x = a.title.toLowerCase();
      var y = b.title.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    })
  }
  setListings(listings){
    for (const date in listings) {
      this.listings.push({
        date, "listings":listings[date]
      })
    }
    
  }
  dateCompare(date, otherdate){
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
  dateToString(date:Date):string{
    return date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();
  }
}
