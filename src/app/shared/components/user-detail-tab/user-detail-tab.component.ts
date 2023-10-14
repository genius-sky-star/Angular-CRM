import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StreamerTableColumn } from 'src/app/shared/interfaces/streamerTableColumn';
import { TableButtonAction } from 'src/app/shared/interfaces/tableButtonAction';
import { ModalService } from '../../services/modal/modal.service';

export interface AnalyticData {
  title: string;
  pourcentage: number;
  timespent: any;
  vector: 'red' | 'green';
  mpercent: number;
}

export interface StreamerRecords {
  videoUrl: string;
  title: string;
  date: string;
  duration: string;
  viewers: number;
  avatar: string;
}

export interface EarningAnalytics {
  title: string | undefined;
  count: number | undefined;
  direction: 'up' | 'down' | undefined;
  mpercent: number;
}

export interface TotalTime {
  h: number;
  m: number;
  s: number;
}

export interface FansProfile {
  avarta: string | undefined;
  username: string | undefined;
  email: string | undefined;
  walletBalance: number | undefined;
  location: string | undefined;
  lastLoggedIn: string | undefined;
}

export interface Pictures {
  avarta: string | undefined;
  url: string | undefined;
  title: string | undefined;
  price: number | undefined;
  isVideo: boolean | undefined;
}

export interface Videos {
  avarta: string | undefined;
  url: string | undefined;
  title: string | undefined;
  price: number | undefined;
  duration: string | undefined;
  isVideo: boolean | undefined;
}

const CURRENT_EARNING: EarningAnalytics = {
  title: 'Current Earnings Due',
  count: 129976.76,
  direction: 'up',
  mpercent: 1.5,
};

const TOTAL_EARNED: EarningAnalytics = {
  title: 'Total Earned',
  count: 529976.0,
  direction: 'down',
  mpercent: 1.5,
};

const TOTAL_CASHED_OUT: EarningAnalytics = {
  title: 'Total Cashed out',
  count: 229976.76,
  direction: 'up',
  mpercent: 1.5,
};

const STREAMER_RECORDS: StreamerRecords[] = [
  {
    videoUrl: 'https://models.girlsgonegame.com/gabtester_1690840022.mp4',
    title: 'Call of duty Live stream',
    date: '11 Aug, 2023',
    duration: '20h:37m:54s',
    viewers: 100,
    avatar: 'streamer_avatar.svg',
  },
  {
    videoUrl: 'https://models.girlsgonegame.com/gabtester_1690840022.mp4',
    title: 'Call of duty Live stream',
    date: '11 Aug, 2023',
    duration: '20h:37m:54s',
    viewers: 100,
    avatar: 'streamer_avatar.svg',
  },
  {
    videoUrl: 'https://models.girlsgonegame.com/gabtester_1690840022.mp4',
    title: 'Call of duty Live stream',
    date: '11 Aug, 2023',
    duration: '20h:37m:54s',
    viewers: 100,
    avatar: 'streamer_avatar.svg',
  },
  {
    videoUrl: 'https://models.girlsgonegame.com/gabtester_1690840022.mp4',
    title: 'Call of duty Live stream',
    date: '11 Aug, 2023',
    duration: '20h:37m:54s',
    viewers: 100,
    avatar: 'streamer_avatar.svg',
  },
];

const ANAYTIC_DATA: AnalyticData[] = [
  {
    title: 'Current Streaming Session',
    pourcentage: 0.8,
    timespent: {
      h: 24,
      m: 65,
      s: 23,
    },
    vector: 'green',
    mpercent: 1.5,
  },
  {
    title: 'Total Time spent Online',
    pourcentage: 0.8,
    timespent: {
      h: 124,
      m: 65,
      s: 23,
    },
    vector: 'red',
    mpercent: 1.5,
  },
];

const TOTAL_TIME: TotalTime = {
  h: 22,
  m: 43,
  s: 20,
};

const FANS: FansProfile[] = [
  {
    avarta: 'fans_avarta.svg',
    username: 'Ashley Kent',
    email: 'floxynian@exam.com',
    walletBalance: 10986,
    location: 'Springfield,  Illinois, United States',
    lastLoggedIn: '12 days ago',
  },
  {
    avarta: 'fans_avarta.svg',
    username: 'Ashley Kent',
    email: 'floxynian@exam.com',
    walletBalance: 10986,
    location: 'Springfield,  Illinois, United States',
    lastLoggedIn: '12 days ago',
  },
  {
    avarta: 'fans_avarta.svg',
    username: 'Ashley Kent',
    email: 'floxynian@exam.com',
    walletBalance: 10986,
    location: 'Springfield,  Illinois, United States',
    lastLoggedIn: '12 days ago',
  },
  {
    avarta: 'fans_avarta.svg',
    username: 'Ashley Kent',
    email: 'floxynian@exam.com',
    walletBalance: 10986,
    location: 'Springfield,  Illinois, United States',
    lastLoggedIn: '12 days ago',
  },
];

const PICTURES: Pictures[] = [
  {
    avarta: 'fans_avarta.svg',
    url: '../../../../assets/images/streamer_avatar.svg',
    title: 'Image.Jpg',
    price: 10000,
    isVideo: false,
  },
  {
    avarta: 'fans_avarta.svg',
    url: '../../../../assets/images/streamer_avatar.svg',
    title: 'Image.Jpg',
    price: 10000,
    isVideo: false,
  },
  {
    avarta: 'fans_avarta.svg',
    url: '../../../../assets/images/streamer_avatar.svg',
    title: 'Image.Jpg',
    price: 10000,
    isVideo: false,
  },
  {
    avarta: 'fans_avarta.svg',
    url: '../../../../assets/images/streamer_avatar.svg',
    title: 'Image.Jpg',
    price: 10000,
    isVideo: false,
  },
];

const VIDEOS: Videos[] = [
  {
    avarta: 'fans_avarta.svg',
    url: 'https://models.girlsgonegame.com/gabtester_1690840022.mp4',
    title: 'Time out with Becky',
    price: 10000,
    duration: '20h:37m:54s',
    isVideo: true,
  },
  {
    avarta: 'fans_avarta.svg',
    url: 'https://models.girlsgonegame.com/gabtester_1690840022.mp4',
    title: 'Time out with Becky',
    price: 10000,
    duration: '20h:37m:54s',
    isVideo: true,
  },
  {
    avarta: 'fans_avarta.svg',
    url: 'https://models.girlsgonegame.com/gabtester_1690840022.mp4',
    title: 'Time out with Becky',
    price: 10000,
    duration: '20h:37m:54s',
    isVideo: true,
  },
  {
    avarta: 'fans_avarta.svg',
    url: 'https://models.girlsgonegame.com/gabtester_1690840022.mp4',
    title: 'Time out with Becky',
    price: 10000,
    duration: '20h:37m:54s',
    isVideo: true,
  },
];

@Component({
  selector: 'app-user-detail-tab',
  templateUrl: './user-detail-tab.component.html',
  styleUrls: ['./user-detail-tab.component.scss'],
})
export class UserDetailTabComponent implements OnInit {
  @Output() buttonAction: EventEmitter<TableButtonAction> =
    new EventEmitter<TableButtonAction>();

  tableColumns: Array<StreamerTableColumn> = [
    {
      columnDef: 'record',
      header: 'Thumbnail',
      isVideo: true,
    },
    {
      columnDef: 'title',
      header: 'Title',
    },
    {
      columnDef: 'date',
      header: 'Date',
    },
    {
      columnDef: 'duration',
      header: 'Duration',
    },
    {
      columnDef: 'viewers',
      header: 'Viewers',
      isImageR: true,
      image: 'viewers-eye.svg',
    },
  ];

  fansTableColumns: Array<StreamerTableColumn> = [
    {
      columnDef: 'avarta',
      header: 'Profile Picture',
      isImage: true,
      image: 'streamer_avatar.svg',
    },
    {
      columnDef: 'username',
      header: 'User Name',
    },
    {
      columnDef: 'walletBalance',
      header: 'Wallet Balance',
      isNumberAndImage: true,
      image: 'streamer_avatar.svg',
    },
    {
      columnDef: 'location',
      header: 'Location',
    },
    {
      columnDef: 'lastLoggedIn',
      header: 'Last Logged in',
    },
  ];

  picturesTableColumns: Array<StreamerTableColumn> = [
    {
      columnDef: 'picture',
      header: 'Thumbnail',
      isImage: true,
      image: 'streamer_avatar.svg',
    },
    {
      columnDef: 'title',
      header: 'Title',
    },
    {
      columnDef: 'price',
      header: 'Price',
      isNumberAndImage: true,
      image: 'streamer_avatar.svg',
    },
  ];

  videosTableColumns: Array<StreamerTableColumn> = [
    {
      columnDef: 'video',
      header: 'Thumbnail',
      isImage: true,
      image: 'streamer_avatar.svg',
    },
    {
      columnDef: 'title',
      header: 'Title',
    },
    {
      columnDef: 'price',
      header: 'Price',
      isNumberAndImage: true,
      image: 'streamer_avatar.svg',
    },
    {
      columnDef: 'duration',
      header: 'Duration',
    },
  ];

  data: StreamerRecords[];
  analyticsData: AnalyticData[];
  fansData: FansProfile[];
  pictureData: Pictures[];
  videoData: Videos[];

  readonly selected: string = 'month';
  readonly selected_t: string = 'day';
  currentEarning: EarningAnalytics;
  totalEarned: EarningAnalytics;
  totalCashedOut: EarningAnalytics;
  totalTime: TotalTime;
  direction: 'up' | 'down' | undefined;
  setDirection(value: string): void {
    if (value === 'up' || value === 'down' || value === undefined) {
      this.direction = value as 'up' | 'down' | undefined;
    } else {
      console.warn(`Invalid value for direction: ${value}`);
    }
  }

  constructor(public dialog: MatDialog, private modalService: ModalService) {}

  ngOnInit(): void {
    this.currentEarning = CURRENT_EARNING;
    this.totalEarned = TOTAL_EARNED;
    this.totalCashedOut = TOTAL_CASHED_OUT;

    this.data = STREAMER_RECORDS;
    this.analyticsData = ANAYTIC_DATA;
    this.totalTime = TOTAL_TIME;

    this.fansData = FANS;
    this.pictureData = PICTURES;
    this.videoData = VIDEOS;
  }

  onTableAction(event) {
    if (event.name === 'Viewers') {
      this.buttonAction.emit({
        name: 'Viewers',
        value: event.value,
      });
    }
    if (event.name === 'delete') {
      this.modalService.createActionDialog({
        alertMessage: 'By clicking on Delete, user stream will be terminated',
        image: event.value.avatar,
        username: event.value.title,
        confirmationMessage: 'Are you sure you want to delete this recording?',
        buttons: [
          {
            type: 'stroked',
            text: 'Cancel',
            handler: () => {
              return true;
            },
          },
          {
            type: 'primary',
            text: 'Delete',
            handler: () => {
              return true;
            },
          },
        ],
      });
    }

    if (event.name === 'Gotoprofile') {
      console.log('event.value', event.value);
    }

    if (event.name === 'View') {
      this.buttonAction.emit({
        name: 'View',
        value: event.value,
      });
    }

    if (event.name === 'ViewHistory') {
      this.buttonAction.emit({
        name: 'ViewHistory',
        value: event.value,
      });
    }
  }
}
