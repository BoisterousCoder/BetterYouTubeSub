/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.pug',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }
  toggleActive(i){
    if(!this.dataService.isInAddMode){
      this.dataService.creators[i].isActive = !this.dataService.creators[i].isActive;
    }else{
      let groupI = 0;
      for(let creatorTitle of this.dataService.groups[this.dataService.groupToAddTo]){
        if(creatorTitle == this.dataService.creators[i].title){
          this.dataService.groups[this.dataService.groupToAddTo].splice(groupI, 1);
          return;
        }
        groupI++;
      }
      this.dataService.groups[this.dataService.groupToAddTo].push(this.dataService.creators[i].title);
    }
  }
  getBackgroundColor(creator){
    if(this.dataService.isInAddMode && this.getIsInGroup(creator, this.dataService.groupToAddTo)){
      return "red"
    }else if(!this.dataService.isInAddMode && creator.isActive){
      return "yellow"
    }else{
      return "";
    }
  }
  getIsInGroup(creator, group){
    for(let creatorTitle of this.dataService.groups[group]){
      if(creatorTitle == creator.title) return true;
    }
    return false;
  }
  allOn(){
    for(let i in this.dataService.creators){
      this.dataService.creators[i].isActive = true;
    }
  }
  allOff(){
    for(let i in this.dataService.creators){
      this.dataService.creators[i].isActive = false;
    }
  }
}
