import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-view-with-sidebar',
  templateUrl: './view-with-sidebar.component.html',
  styleUrls: ['./view-with-sidebar.component.scss']
})
export class ViewWithSidebarComponent {

  @Input()  sidenavOpened!: boolean;
  @Input() position: 'start' | 'end' = 'end';
  @Input() sideNavTitle: string;

  @Output() sidenavOpenedChange = new EventEmitter<boolean>();


  onSidebarStateChange(evt) {
    console.log(evt);
    this.sidenavOpenedChange.emit(evt);
  }

  closeSideMenu() {
    this.sidenavOpenedChange.emit(false);
  }

}
