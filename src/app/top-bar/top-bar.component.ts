import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.pug',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  @Input() startDate;
  @Input() today;
  @Input() channelId;
  @Input() buildListings;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(event){
    let startDate = event.target.elements.startDate.value;
    let today = event.target.elements.today.value;
    let channelId = event.target.elements.channelId.value;
    this.buildListings(startDate, today, channelId);
    return false;
  }

}
