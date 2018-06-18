import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PersistenceModule } from 'angular-persistence';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SideBarComponent } from './side-bar/side-bar.component';
import { VideoListComponent } from './video-list/video-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { GroupsComponent } from './groups/groups.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    VideoListComponent,
    TopBarComponent,
    GroupsComponent
  ],
  imports: [
    BrowserModule,
    PersistenceModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
