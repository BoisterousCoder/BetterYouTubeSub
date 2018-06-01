import { Component } from '@angular/core';
declare var process: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  apiKey:string;
  constructor(){
    this.apiKey = "api Key goes here"
  }
}
