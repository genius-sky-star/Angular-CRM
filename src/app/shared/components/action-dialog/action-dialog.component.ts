import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-action-dialog',
  templateUrl: './action-dialog.component.html',
  styleUrls: ['./action-dialog.component.scss']
})
export class ActionDialogComponent {

  dataSource = new MatTableDataSource<any>([]);
  @ViewChild('paginator') paginator: MatPaginator;


  constructor(private dialogRef: MatDialogRef<ActionDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: {
    alertMessage?:string,
    image? : string,
    username?:string,
    title?:string,
    userType:string,
    source?:string,
    confirmationMessage?:string,
    thumbnailContent?:any,
    isThumbnail?:boolean,
    viewersData : any[],
    displayedColumns: Array<string>,
    buttons?: { text: string,type?:string, handler: (evt: any) => boolean | undefined}[]
  }){}


  runHandler(event: any, buttonConfig: any) {
    console.log("event in run handler",event);
    console.log("buttonConfig",buttonConfig);
    if(buttonConfig && typeof buttonConfig.handler === 'function') {
      const canClose = buttonConfig.handler(event);
      if(canClose) {
        this.dialogRef.close();
      }
    } else {
      this.dialogRef.close();
    }
  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<any>(this.data.viewersData);
    this.dataSource.paginator = this.paginator;
  }
}
