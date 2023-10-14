import { Component, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-archive-actions',
  templateUrl: './archive-actions.component.html',
  styleUrls: ['./archive-actions.component.scss']
})
export class ArchiveActionsComponent {
  action: any;

  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<ArchiveActionsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      action: string
      viewerData: any
    }) {
    console.log('data: ', this.data);
  }

  closeDialog() {
    this.dialogRef.close();
  }

  takeAction(action) {
    if (action == 'recording-delete') {
      this.dialogRef.close();
    } else {
      console.log('action: ', action);
      this.action = action;
    }
  }
}
