/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
import { Component, OnInit, Input } from '@angular/core';
import { PersistenceService , StorageType} from 'angular-persistence';
import { DataService } from '../data.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.pug',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  isManageMode = false;
  constructor(private dataService: DataService, private persistenceService: PersistenceService) { }

  ngOnInit() {
  }

  createGroup(event){
    let groupName = event.target.elements.groupName.value;
    this.dataService.groups[groupName] = []
    
    return false;
  }

  saveGroups(){
    this.persistenceService.set("groups", JSON.stringify(this.dataService.groups), {type: StorageType.LOCAL});
  }

  loadGroups(){
    this.dataService.groups = JSON.parse(this.persistenceService.get('groups', StorageType.LOCAL));
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
      self.dataService.groups = JSON.parse(loader.result.length);
    }
    loader.readAsText(file);
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
