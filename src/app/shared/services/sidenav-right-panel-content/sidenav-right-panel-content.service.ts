import { ComponentPortal, ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidenavRightPanelContentService {
  private _componentPortal$ = new BehaviorSubject<ComponentPortal<any> | null>(
    null
  );

  private isOpenSubject = new BehaviorSubject<boolean>(false);

  isOpen$: Observable<boolean> = this.isOpenSubject.asObservable();

  getComponentPortal$(): Observable<ComponentPortal<any> | null> {
    return this._componentPortal$.asObservable();
  }
  setComponentPortal(component: ComponentType<any>) {
    this._componentPortal$.next(new ComponentPortal<any>(component));
  }
  constructor() {}

  toggleSidenav() {
    this.isOpenSubject.next(!this.isOpenSubject.value);
  }

  closeSidenav() {
    this.isOpenSubject.next(false);
  }
}
