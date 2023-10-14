import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FullscreenService {
  constructor() {}

  // Check if the document is in fullscreen mode
  get isFullscreen(): boolean {
    return !!document.fullscreenElement;
  }

  // Enter fullscreen mode
  enter(element: Element): void {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    }
  }

  // Exit fullscreen mode
  exit(): void {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}
