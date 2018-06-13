import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.pug',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  @Input() creators;
  constructor() { }

  ngOnInit() {
  }
  toggleActive(i){
    this.creators[i].isActive = !this.creators[i].isActive;
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
