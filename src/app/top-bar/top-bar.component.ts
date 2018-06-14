import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.pug',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onSubmit(event){
    this.dataService.startDate = event.target.elements.startDate.value;
    this.dataService.today = event.target.elements.today.value;
    this.dataService.channelId = event.target.elements.channelId.value;
    this.dataService.buildListings();
    return false;
  }

}
