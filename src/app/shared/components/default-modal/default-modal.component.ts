import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-default-modal',
  templateUrl: './default-modal.component.html',
  styleUrls: ['./default-modal.component.scss']
})
export class DefaultModalComponent {
  readonly icons = {
    success: '/assets/images/success_modal_icon.png',
    error: '/assets/images/error_modal_icon.png',
    info: '/assets/images/success_modal_icon.png',

  }
  constructor(private dialogRef: MatDialogRef<DefaultModalComponent>, @Inject(MAT_DIALOG_DATA) public data: {
    type?: 'success' | 'error' | 'info',
    iconPath?: string,
    message?: string,
    title?: string,
    subMessage?: string,
    isDeleteConfirmationModal?:boolean,
    buttons?: { text: string, handler: (evt: any) => boolean | undefined}[]
  }) {}

  runHandler(event: any, buttonConfig: any) {
    if(buttonConfig && typeof buttonConfig.handler === 'function') {
      const canClose = buttonConfig.handler(event);
      if(canClose) {
        this.dialogRef.close();
      }
    } else {
      this.dialogRef.close();
    }
  }

  // initializeDialogButtons() {}
}
