import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-add-token-sidenav-bar',
  templateUrl: './add-token-sidenav-bar.component.html',
  styleUrls: ['./add-token-sidenav-bar.component.scss'],
})
export class AddTokenSidenavBarComponent implements OnInit, OnChanges {
  @Input() sidenavOpened!: boolean;
  @Input() position: 'start' | 'end' = 'end';
  @Input() sideNavTitle: string;
  @Input() tokendata: any | undefined;
  @Output() sidenavOpenedChange = new EventEmitter<boolean>();
  username: string | undefined;
  image: string | undefined;

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.username = this.tokendata?.Username;
    this.image = this.tokendata?.Image;
  }

  onSidebarStateChange(evt) {
    console.log(evt);
    this.sidenavOpenedChange.emit(evt);
  }

  closeSideMenu() {
    this.sidenavOpenedChange.emit(false);
  }
}
