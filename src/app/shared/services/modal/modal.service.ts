import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DefaultModalComponent } from '../../components/default-modal/default-modal.component';
import { ActionDialogComponent } from '../../components/action-dialog/action-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private dialog: MatDialog) { }

  create(config: {
    type?: 'success' | 'error' | 'info',
    iconPath?: string,
    message?: string,
    title?: string,
    isDeleteConfirmationModal? : boolean,
    subMessage?: string,
    buttons?: { text: string, handler: (evt: any) => boolean | undefined }[],
    component?: ComponentType<DefaultModalComponent>
  }) {
    let component = config.component || DefaultModalComponent;
    if (!config.message && !config.component) {
      throw new Error('Either a message or Dialog component is required');
    }

    const { type, isDeleteConfirmationModal,iconPath, message, title, subMessage, buttons } = config;
    const data = {
      type,
      iconPath,
      isDeleteConfirmationModal,
      message,
      title,
      subMessage,
      buttons
    };
    return this.dialog.open(component, {
      data,
      panelClass: 'custom-modalbox'
    });
  }


  createActionDialog(config: {
    alertMessage?: string,
    image?: string,
    username?: string,
    confirmationMessage?: string,
    title?: string,
    userType?: string,
    source?: string,
    thumbnailContent?: any,
    isThumbnail?: boolean,
    viewersData?: any[],
    displayedColumns?: Array<string>,
    buttons?: { text: string,type?:string, handler: (evt: any) => boolean | undefined}[]
    component?: ComponentType<ActionDialogComponent>
  }) {
    let component = config.component || ActionDialogComponent;
    // if (!config.alertMessage && !config.component) {
    //   throw new Error('Either a message or Dialog component is required');
    // }

    const { alertMessage, image, title, userType, source,thumbnailContent,isThumbnail,viewersData,displayedColumns,username, confirmationMessage, buttons } = config;
    const data = {
      title,
      userType,
      source,
      alertMessage,
      image,
      username,
      confirmationMessage,
      buttons,
      thumbnailContent,
      isThumbnail,
      viewersData,
      displayedColumns
    };
    return this.dialog.open(component, { data });
  }
}
