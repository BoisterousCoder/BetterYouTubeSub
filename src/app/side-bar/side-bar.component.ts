import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.pug',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  @Input() creators;
  @Input() groups;
  @Input() isInAddMode;
  @Input() groupToAddTo;
  constructor() { }

  ngOnInit() {
  }
  toggleActive(i){
    if(!this.isInAddMode){
      this.creators[i].isActive = !this.creators[i].isActive;
    }else{
      let groupI = 0;
      for(let creatorTitle of this.groups[this.groupToAddTo]){
        if(creatorTitle == this.creators[i].title){
          this.groups[this.groupToAddTo].splice(groupI, 1);
          return;
        }
        groupI++;
      }
      this.groups[this.groupToAddTo].push(this.creators[i].title);
    }
  }
  getBackgroundColor(creator){
    if(this.isInAddMode && this.getIsInGroup(creator, this.groupToAddTo)){
      return "red"
    }else if(!this.isInAddMode && creator.isActive){
      return "yellow"
    }else{
      return "";
    }
  }
  getIsInGroup(creator, group){
    for(let creatorTitle of this.groups[group]){
      if(creatorTitle == creator.title) return true;
    }
    return false;
  }
  allOn(){
    for(let i in this.creators){
      this.creators[i].isActive = true;
    }
  }
  allOff(){
    for(let i in this.creators){
      this.creators[i].isActive = false;
    }
  }
}
