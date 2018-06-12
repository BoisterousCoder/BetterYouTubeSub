import { Component } from '@angular/core';
declare var gapi: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  apiKey:string = "AIzaSyCBs5okQYwYL8XghpWFaf3YYKrBJUjnJi0";
  constructor(){
    gapi.load('client', this.onAPILoad);
  }
  onAPILoad(){
    gapi.client.init({
      'apiKey': 'YOUR_API_KEY',
      // Your API key will be automatically added to the Discovery Document URLs.
      'discoveryDocs': ['https://people.googleapis.com/$discovery/rest'],
      'scope': 'youtube.readonly',
    }).then(function() {
      // 3. Initialize and make the API request.
      return gapi.client.people.people.get({
        'resourceName': 'people/me',
        'requestMask.includeField': 'person.names'
      });
    }).then(function(response) {
      console.log(response.result);
    }, function(reason) {
      console.log('Error: ' + reason.result.error.message);
    });
  }
}
