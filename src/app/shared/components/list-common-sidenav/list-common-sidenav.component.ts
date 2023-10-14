import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { TableColumn } from 'src/app/shared/interfaces/tableColumn';

@Component({
  selector: 'app-list-common-sidenav',
  templateUrl: './list-common-sidenav.component.html',
  styleUrls: ['./list-common-sidenav.component.scss'],
})
export class ListCommonSidenavComponent implements OnInit, OnChanges {
  @Input() sidenavOpened!: boolean;
  @Input() position: 'start' | 'end' = 'end';
  @Input() sideNavTitle: string;
  @Input() data: any[] | undefined;
  @Input() tableColumns: any[];
  @Input() subtitle: string;
  @Input() action: string;
  @Output() sidenavOpenedChange = new EventEmitter<boolean>();

  purchaseHistoryTableColumns: Array<TableColumn> = [
    {
      columnDef: 'avarta',
      header: 'Profile Picture',
      isImage: true,
      image: 'streamer_avatar.svg',
    },
    {
      columnDef: 'username',
      header: 'UserName',
    },
    {
      columnDef: 'purchaseDate',
      header: 'Purchase Date',
    },
  ];
  viewListTableColumns: Array<TableColumn> = [
    {
      columnDef: 'avarta',
      header: 'Profile Picture',
      isImage: true,
      image: 'streamer_avatar.svg',
    },
    {
      columnDef: 'username',
      header: 'UserName',
    },
    {
      columnDef: 'duration',
      header: 'Duration',
    },
  ];

  username: string | undefined;
  image: string | undefined;
  streamerLevel: string | undefined;

  historyData: any[] | undefined;

  streamerLevels = ['1', '2', '3'];

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.username = 'username';
    // this.username = this.userData?.username;
    // this.image = this.userData?.Image;
    // this.streamerLevel = this.userData?.streamerLevel;

    this.historyData = this.data;
  }

  onSidebarStateChange(evt) {
    this.sidenavOpenedChange.emit(evt);
  }

  closeSideMenu() {
    this.sidenavOpenedChange.emit(false);
  }
}
