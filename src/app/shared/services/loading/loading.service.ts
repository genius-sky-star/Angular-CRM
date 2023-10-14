import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor() { }

  show(config?: { message?: string; spinner?: string; }) {
    // throw new Error('Method not implemented.');
  }

  hide() {
    // throw new Error('Method not implemented.');
  }

}
