import { Component, Inject, EventEmitter, Output } from '@angular/core';
import {
  MatDialogRef,
  MatDialog,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { TableButtonAction } from 'src/app/shared/interfaces/tableButtonAction';
import { FullscreenService } from 'src/app/shared/services/fullscreen/full-screen-service';

@Component({
  selector: 'app-avatar-editor',
  templateUrl: './avatar-editor.component.html',
  styleUrls: ['./avatar-editor.component.scss'],
})
export class AvatarEditorComponent {
  imageUrl: string = '';
  imageTitle: string = '';
  value = 0;

  rotateValue: number = 0;
  zoomValue: number = 1;

  @Output() buttonAction: EventEmitter<TableButtonAction> =
    new EventEmitter<TableButtonAction>();

  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<AvatarEditorComponent>,
    private fullscreenService: FullscreenService,
    @Inject(MAT_DIALOG_DATA)
    public data: any
  ) {
    this.imageUrl = '/assets/images/' + this.data['row'].avatar;
    this.imageTitle = 'Avatar';
  }

  closeDialog() {
    this.dialogRef.close();
  }

  onRotate() {
    console.log('rotate');
    this.rotateValue -= 90;
  }

  onZoomIn() {
    console.log('Zoom In');
    if (this.zoomValue < 2) {
      this.zoomValue += 0.1;
    }
  }

  onZoomOut() {
    console.log('Zoom Out');
    if (this.zoomValue > 1) {
      this.zoomValue -= 0.1;
    }
  }

  getTransform(): string {
    return `rotate(${this.rotateValue}deg) scale(${this.zoomValue})`;
  }

  onApprove() {
    console.log(this.data);
    this.closeDialog();
  }

  onReject() {
    console.log(this.data);
    this.closeDialog();
  }

  openImageFullscreen(imageElement: any) {
    if (!this.fullscreenService.isFullscreen) {
      this.fullscreenService.enter(imageElement);
    }
  }
}
