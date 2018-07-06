/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
import { Component } from '@angular/core';
import { PersistenceService , StorageType} from 'angular-persistence';
import { DataService } from '../data.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.pug',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent {
  isManageMode = false;
  constructor(private dataService: DataService, private persistenceService: PersistenceService) { }

  createGroup(event){
    let groupName = event.target.elements.groupName.value;
    this.dataService.groups[groupName] = []

    return false;
  }

  addCreatorToGroup(e){
    let creatorTitle:string = e.option.getLabel();
    let isAlreadyInGroup:boolean = !e.option.selected;
    if(isAlreadyInGroup){
      let i = this.dataService.groups[this.dataService.groupToAddTo].indexOf(creatorTitle);
      this.dataService.groups[this.dataService.groupToAddTo].splice(i, 1);
    }else{
      this.dataService.groups[this.dataService.groupToAddTo].push(creatorTitle);
    }
    console.log(this.dataService.groups[this.dataService.groupToAddTo])
  }
  isCreatorInGroup(creatorTitle){
    for(let creator of this.dataService.groups[this.dataService.groupToAddTo]){
      if(creator.title == creatorTitle) return true;
    }
    return false;
  }

  sortByTitle(array){
    return array.sort((a, b) => {
      var x = a.title.toLowerCase();
      var y = b.title.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    })
  }

  saveGroups(){
    this.persistenceService.set("groups", this.dataService.groups, {type: StorageType.LOCAL});
  }

  loadGroups(){
    this.dataService.groups = this.persistenceService.get('groups', StorageType.LOCAL);
    this.removeEmptyGroup();
  }
  
  exportGroups(){
    var downloadLink = document.createElement('a');
    downloadLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.dataService.groups)));
    downloadLink.setAttribute('download', "exportedGroups.txt");

    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);

    downloadLink.click();

    document.body.removeChild(downloadLink);
  }

  importGroups(file){
    var loader = new FileReader();
    let self = this;
    loader.onload = (event:Event) => {
      self.dataService.groups = JSON.parse(loader.result);
    }
    loader.readAsText(file);
    this.removeEmptyGroup();
  }

  removeEmptyGroup(){
    delete this.dataService.groups[""];
    delete this.dataService.groups[" "];
  }

  removeGroup(groupName){
    delete this.dataService.groups[groupName]
  }
  setGroupTo(groupName, isOn){
    this.dataService.groups[groupName].map(creatorTitle =>{
      this.dataService.creators.map(creator => {
        if(creator.title == creatorTitle) creator.isActive = isOn;
      });
    });
  }
  switchToAddMode(groupName){
    this.dataService.isInAddMode = true;
    this.dataService.groupToAddTo = groupName;
  }
  get groupNames(){
    let groupNames = [];
    for(let groupName in this.dataService.groups){
      groupNames.push(groupName);
    }
    return groupNames;
  }
  b1Click(groupName) {
    if(this.isManageMode) this.switchToAddMode(groupName)
    else this.setGroupTo(groupName, true)
  }
  b2Click(groupName){
    if(this.isManageMode)this.removeGroup(groupName)
    else this.setGroupTo(groupName, false)
  }
}
