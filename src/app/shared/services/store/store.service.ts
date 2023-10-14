import { Injectable } from '@angular/core';
import { StoreKey } from '../../enums/store.enum';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() {}

  getData<T = any>(key: StoreKey) {
    try {
      return JSON.parse(localStorage.getItem(key) || '') as T;
    } catch {
      return null;
    }
  }

  saveData<T = any> (key: StoreKey, data: T) {
    try {
      if(typeof data === 'string') {
        localStorage.setItem(key, data);
      } else {
        localStorage.setItem(key, JSON.stringify(data));
      }
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  deleteData(key: StoreKey) {
    localStorage.removeItem(key);
  }

  clearStore() {
    localStorage.clear();
  }
}
