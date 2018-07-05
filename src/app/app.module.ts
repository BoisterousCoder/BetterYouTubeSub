import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PersistenceModule } from 'angular-persistence';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MainNavComponent, ChannelIdDialog } from './main-nav/main-nav.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { GroupsComponent } from './groups/groups.component';
import { MatCardModule,MatDialogModule, MatNativeDateModule, MatDatepickerModule, MatGridListModule, MatInputModule, MatFormFieldModule, MatExpansionModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [
    MainNavComponent,
    SideBarComponent,
    GroupsComponent,
    TopBarComponent,
    ChannelIdDialog
  ],
  imports: [
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatExpansionModule,
    MatDialogModule,
    MatNativeDateModule,
    BrowserModule,
    PersistenceModule,
    LayoutModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [MainNavComponent,
    ChannelIdDialog]
})
export class AppModule { }
