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
export class SideBarComponent {
  constructor(private dataService: DataService) {
  }

  // setActive(i, isActive){
  //   if(!this.dataService.isInAddMode){
      
  //   }else{
  //     if(!isActive){
  //       let groupI = 0;
  //       for(let creatorTitle of this.dataService.groups[this.dataService.groupToAddTo]){
  //         if(creatorTitle == this.dataService.creators[i].title){
  //           this.dataService.groups[this.dataService.groupToAddTo].splice(groupI, 1);
  //           return;
  //         }
  //         groupI++;
  //       }
  //       throw("something didn't work right");
  //     }else this.dataService.groups[this.dataService.groupToAddTo].push(this.dataService.creators[i].title);
  //   }
  // }
  getIsActive(creator){
    if(this.dataService.isInAddMode && this.getIsInGroup(creator, this.dataService.groupToAddTo)){
      return true
    }else if(!this.dataService.isInAddMode && creator.isActive){
      return true
    }else{
      return false;
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
  setActive(e){
    let optionToChange:string = e.option.getLabel();
    let isSetTo:boolean = e.option.selected;
    let i = 0;
    for(let creator of this.dataService.creators){
      if(creator.title == optionToChange) break;
      else i++;
    }
    this.dataService.creators[i].isActive = isSetTo;
  }
  log(o1, o2){
    console.log(o1);
    console.log(o2);
    return true;
  }
}
