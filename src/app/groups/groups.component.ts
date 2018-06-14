import { Component, OnInit, Input } from '@angular/core';
import { PersistenceService } from 'angular-persistence';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.pug',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  @Input() groups;
  @Input() isInAddMode;
  @Input() creators;
  @Input() groupToAddTo;
  isManageMode = false;
  constructor(private persistenceService: PersistenceService) { }

  ngOnInit() {
    let groups = this.persistenceService.get('groups');
    if(groups) this.groups = JSON.parse(groups);
    else this.groups = {};
  }

  createGroup(event){
    let groupName = event.target.elements.groupName.value;
    this.groups[groupName] = []
    this.persistenceService.set("groups", JSON.stringify(this.groups))
    return false;
  }
  removeGroup(groupName){
    delete this.groups[groupName]
  }
  setGroupTo(groupName, isOn){
    this.groups[groupName].map(creatorTitle =>{
      this.creators.map(creator => {
        if(creator.title == creatorTitle) creator.isActive = isOn;
      });
    });
  }
  switchToAddMode(groupName){
    this.isInAddMode = true;
    this.groupToAddTo = groupName;
  }
  get groupNames(){
    let groupNames = [];
    for(let groupName in this.groups){
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
