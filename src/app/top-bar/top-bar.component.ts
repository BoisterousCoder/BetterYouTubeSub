/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.pug',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  constructor(private dataService: DataService) { }
  
  onSubmit(event){
    this.dataService.startDate = this.convertDateFormat(event.target.elements.startDate.value);
    this.dataService.today = this.convertDateFormat(event.target.elements.today.value);
    this.dataService.channelId = event.target.elements.channelId.value;
    this.dataService.buildListings();
    return false;
  }
  convertDateFormat(old:string){
    let split = old.split('/');
    return split[2]+"-"+split[0]+'-'+split[1];
  }
}
