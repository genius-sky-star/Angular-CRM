import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SelectedStreamerService {
  private data: any;

  setData(value: any) {
    this.data = value;
  }

  getData(): any {
    return this.data;
  }
}
