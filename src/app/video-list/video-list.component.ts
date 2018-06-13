import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.pug',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  @Input() listings;
  @Input() creators;
  constructor() { }

  ngOnInit() {
  }

  isListingActive(listing){
    let creator;
    for(creator of this.creators){
      if(listing.creator.title == creator.title) break;
    }
    return creator.isActive;
  }
}
