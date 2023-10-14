import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-edit-sidenav-bar',
  templateUrl: './edit-sidenav-bar.component.html',
  styleUrls: ['./edit-sidenav-bar.component.scss'],
})
export class EditSidenavBarComponent implements OnInit, OnChanges {
  @Input() sidenavOpened!: boolean;
  @Input() position: 'start' | 'end' = 'end';
  @Input() sideNavTitle: string;
  @Input() userData: any | undefined;
  @Output() sidenavOpenedChange = new EventEmitter<boolean>();
  username: string | undefined;
  image: string | undefined;
  streamerLevel: string | undefined;

  streamerLevels = ['1', '2', '3'];

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.username = this.userData?.username;
    this.image = this.userData?.Image;
    this.streamerLevel = this.userData?.streamerLevel;
  }

  onSidebarStateChange(evt) {
    console.log(evt);
    this.sidenavOpenedChange.emit(evt);
  }

  closeSideMenu() {
    this.sidenavOpenedChange.emit(false);
  }
}
