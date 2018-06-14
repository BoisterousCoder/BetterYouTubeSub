import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.pug',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  isListingActive(listing){
    let creator;
    for(creator of this.dataService.creators){
      if(listing.creator.title == creator.title) break;
    }
    return creator.isActive;
  }
}
