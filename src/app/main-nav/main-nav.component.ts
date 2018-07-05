import { Component, Inject,  AfterViewInit} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface DialogData {
  channelId: string;
}

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.pug',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements AfterViewInit{

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver, private dataService: DataService, public dialog: MatDialog) {}

  ngAfterViewInit(){
    this.requestChannelID();
  }
  isListingActive(listing){
    let creator;
    for(creator of this.dataService.creators){
      if(listing.creator.title == creator.title) break;
    }
    return creator.isActive;
  }

  ngOnInit(){
    
  }

  requestChannelID(){
    const dialogRef = this.dialog.open(ChannelIdDialog, {
      width: '250px',
      data: {channelId: this.dataService.channelId}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.dataService.channelId = result;
      this.dataService.buildListings();
    });
  }
}

@Component({
  selector: 'channel-id-dialog',
  templateUrl: 'channel-id-dialog.pug',
})
export class ChannelIdDialog {

  constructor(
    public dialogRef: MatDialogRef<ChannelIdDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}