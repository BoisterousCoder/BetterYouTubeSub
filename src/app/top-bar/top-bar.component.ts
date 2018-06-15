/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
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
