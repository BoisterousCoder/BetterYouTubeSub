import { Component } from '@angular/core';
import { buildDriverProvider } from 'protractor/built/driverProviders';
declare var getAllVideosBetween: any;
declare var Date: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  listings = [];
  creators = [];
  today:string;
  startDate:string;
  channelId:string;
  constructor(){
    let now = new Date();
    this.today = now.getFullYear() + "-" + (now.getMonth()+1) + "-" +now.getDate()
    this.startDate = now.getFullYear() + "-" + (now.getMonth()+1) + "-" + (now.getDate()-3)
    this.channelId = 'UCRWa5qX5vw23r_R2j1yixbA';
    this.buildListings();
  }
  buildListings(){
    this.listings = [];
    this.creators = [];
    let self = this;
    getAllVideosBetween(this.startDate, this.today, this.channelId, (video, creator) => {
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
}
