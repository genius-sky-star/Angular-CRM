import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SelectedStreamerService } from 'src/app/shared/services/user-data/selected-streamer.service';
import { Router } from '@angular/router';
import { TableButtonAction } from 'src/app/shared/interfaces/tableButtonAction';

import { VideoPlayerComponent } from 'src/app/shared/components/video-player/video-player.component';

export interface StreamerData {
  avarta: string;
  userName: string;
  name: string;
  gender: string;
  email: string;
  mobileNumber: string;
  instagram: string;
  twitter: string;
  youtubu: string;
  discord: string;
  ipAddress: string;
  createdData: string;
  country: string;
  zodiacSign: string;
  occupation: string;
  snapchat: string;
  wallet: number;
  fans: number;
  isOnline: boolean;
}

export interface HistoryData {
  avarta: string;
  username: string;
  purchaseDate: string;
}
export interface DurationData {
  avarta: string | undefined;
  username: string | undefined;
  duration: string | undefined;
}

const STREMER_DATA = {
  avarta: 'streamer_avatar.svg',
  userName: 'Floxy Nina',
  name: 'Florence Ninachuwa',
  gender: 'Female',
  email: 'floxynina@example.com',
  mobileNumber: '12-876-09876',
  instagram: 'FloxyNina',
  twitter: 'FloxyNina',
  youtubu: 'FloxyNina',
  discord: 'FloxyNina-1245',
  ipAddress: '192.168.1.123',
  createdData: '12 - 03- 2023',
  country: 'United States Of America',
  zodiacSign: 'Gemini',
  occupation: 'Content Creator',
  snapchat: 'FloxyNina',
  wallet: 10986,
  fans: 21101,
  isOnline: true,
};

const HISTORY_DATA: HistoryData[] = [
  {
    avarta: 'streamer_avatar.svg',
    username: 'Ashley Kent',
    purchaseDate: '12-AUG-2022',
  },
  {
    avarta: 'streamer_avatar.svg',
    username: 'Ashley Kent',
    purchaseDate: '12-AUG-2022',
  },
  {
    avarta: 'streamer_avatar.svg',
    username: 'Ashley Kent',
    purchaseDate: '12-AUG-2022',
  },
  {
    avarta: 'streamer_avatar.svg',
    username: 'Ashley Kent',
    purchaseDate: '12-AUG-2022',
  },
  {
    avarta: 'streamer_avatar.svg',
    username: 'Ashley Kent',
    purchaseDate: '12-AUG-2022',
  },
  {
    avarta: 'streamer_avatar.svg',
    username: 'Ashley Kent',
    purchaseDate: '12-AUG-2022',
  },
  {
    avarta: 'streamer_avatar.svg',
    username: 'Ashley Kent',
    purchaseDate: '12-AUG-2022',
  },
];
const VIEWERS_DATA: DurationData[] = [
  {
    avarta: 'streamer_avatar.svg',
    username: 'Ashley Kent',
    duration: '22:34:32',
  },
  {
    avarta: 'streamer_avatar.svg',
    username: 'Ashley Kent',
    duration: '22:34:32',
  },
  {
    avarta: 'streamer_avatar.svg',
    username: 'Ashley Kent',
    duration: '22:34:32',
  },
  {
    avarta: 'streamer_avatar.svg',
    username: 'Ashley Kent',
    duration: '22:34:32',
  },
  {
    avarta: 'streamer_avatar.svg',
    username: 'Ashley Kent',
    duration: '22:34:32',
  },
  {
    avarta: 'streamer_avatar.svg',
    username: 'Ashley Kent',
    duration: '22:34:32',
  },
  {
    avarta: 'streamer_avatar.svg',
    username: 'Ashley Kent',
    duration: '22:34:32',
  },
];

@Component({
  selector: 'app-streamer-detail',
  templateUrl: './streamer-detail.component.html',
  styleUrls: ['./streamer-detail.component.scss'],
})
export class StreamerDetailComponent implements OnInit {
  sidenavOpened: boolean = false;
  constructor(
    private selectedStreamerService: SelectedStreamerService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  userData: any;

  historyData: any;

  sideNavTitle: string;
  subtitle: string;
  // tableColumns: Array<TableColumn>;
  action: string;

  // purchaseHistoryTableColumns: Array<TableColumn> = [
  //   {
  //     columnDef: 'avarta',
  //     header: 'Profile Picture',
  //     isImage: true,
  //     image: 'streamer_avatar.svg',
  //   },
  //   {
  //     columnDef: 'username',
  //     header: 'UserName',
  //   },
  //   {
  //     columnDef: 'purchaseDate',
  //     header: 'Purchase Date',
  //   },
  // ];
  // viewListTableColumns: Array<TableColumn> = [
  //   {
  //     columnDef: 'avarta',
  //     header: 'Profile Picture',
  //     isImage: true,
  //     image: 'streamer_avatar.svg',
  //   },
  //   {
  //     columnDef: 'username',
  //     header: 'UserName',
  //   },
  //   {
  //     columnDef: 'duration',
  //     header: 'Duration',
  //   },
  // ];

  ngOnInit(): void {
    this.userData = STREMER_DATA;
    // this.userData = this.selectedStreamerService.getData();
    if (this.userData === undefined) {
      this.router.navigateByUrl('/dashboard/user/streamers/total-streamers');
    }
    console.log(this.sidenavOpened);
  }

  sidenavOpenedChange(val) {
    this.sidenavOpened = val;
  }

  onTableAction(event: TableButtonAction) {
    if (event.name === 'ViewHistory') {
      this.sideNavTitle = 'Purchase History';

      this.subtitle = 'Showing purchase history for Time out with Becky';
      // this.tableColumns = this.purchaseHistoryTableColumns;
      // this.data = event.value;
      this.historyData = HISTORY_DATA;
      this.action = 'ViewHistory';
      this.sidenavOpened = true;
    }
    if (event.name === 'View') {
      console.log('view clicked');
      console.log(event.value.isVideo);
      const dialogRef = this.dialog.open(VideoPlayerComponent, {
        data: {
          videoUrl: event.value.url,
          title: 'Video Player',
          isVideo: event.value.isVideo,
        },
      });

      dialogRef.afterClosed().subscribe((result) => {
        console.log('The dialog was closed');
      });
    }
    if (event.name === 'Viewers') {
      console.log('Viewers');
      this.sideNavTitle = 'Viewers List';
      this.action = 'Viewers';
      this.subtitle =
        'Showing a list of user who viewed this stream and duration';
      // this.tableColumns = this.viewListTableColumns;
      // this.data = event.value;
      this.historyData = VIEWERS_DATA;

      this.sidenavOpened = true;
    }
  }
}
