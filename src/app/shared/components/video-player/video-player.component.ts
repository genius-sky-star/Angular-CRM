import { Component, Inject } from '@angular/core';
import {
  MatDialogRef,
  MatDialog,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { FullscreenService } from 'src/app/shared/services/fullscreen/full-screen-service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
})
export class VideoPlayerComponent {
  videoUrl: string = '';
  videoTitle: string = '';
  isVideo: boolean = true;

  rotateValue: number = 0;
  zoomValue: number = 1;
  constructor(
    private dialog: MatDialog,
    private fullscreenService: FullscreenService,
    private dialogRef: MatDialogRef<VideoPlayerComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any
  ) {
    this.videoUrl = this.data['videoUrl'];
    this.videoTitle = this.data['title'];
    this.isVideo = this.data['isVideo'];
    console.log(this.videoUrl);
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

  openImageFullscreen(imageElement: any) {
    if (!this.fullscreenService.isFullscreen) {
      this.fullscreenService.enter(imageElement);
    }
  }

  getTransform(): string {
    return `rotate(${this.rotateValue}deg) scale(${this.zoomValue})`;
  }
}
