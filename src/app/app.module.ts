import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PersistenceModule } from 'angular-persistence';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MainNavComponent } from './main-nav/main-nav.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { GroupsComponent } from './groups/groups.component';
import { MatCardModule, MatExpansionModule, MatTableModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    SideBarComponent,
    GroupsComponent
  ],
  imports: [
    MatCardModule,
    MatExpansionModule,
    BrowserModule,
    PersistenceModule,
    LayoutModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
