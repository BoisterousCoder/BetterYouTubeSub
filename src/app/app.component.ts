import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dataService: DataService){}

  isListingActive(listing){
    let creator;
    for(creator of this.dataService.creators){
      if(listing.creator.title == creator.title) break;
    }
    return creator.isActive;
  }
}
