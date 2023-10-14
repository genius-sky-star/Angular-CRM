import { Component, OnInit } from '@angular/core';
import { TableColumn } from 'src/app/shared/interfaces/tableColumn';
import { ApiService } from 'src/app/shared/services/api/api.service';

import { LineChartComponent } from 'src/app/shared/components/line-chart/line-chart.component';

export interface ScheduledStreamers {
  avatar: string;
  username: string;
  StreamTitle: string;
  StartTime: string;
  StartDate: string;
  WalletBalance: number;
}

const SCHEDULED_STREAMER_DATA: ScheduledStreamers[] = [
  {
    avatar: 'streamer_avatar.svg',
    username: 'Floxy Nina',
    StreamTitle: 'Vox Machina Pre-load',
    StartTime: '12:04AM',
    StartDate: '12 Dec',
    WalletBalance: 900,
  },
  {
    avatar: 'streamer_avatar.svg',
    username: 'Floxy Nina',
    StreamTitle: 'Vox Machina Pre-load',
    StartTime: '12:04AM',
    StartDate: '12 Dec',
    WalletBalance: 900,
  },
  {
    avatar: 'streamer_avatar.svg',
    username: 'Floxy Nina',
    StreamTitle: 'Vox Machina Pre-load',
    StartTime: '12:04AM',
    StartDate: '12 Dec',
    WalletBalance: 900,
  },
  {
    avatar: 'streamer_avatar.svg',
    username: 'Floxy Nina',
    StreamTitle: 'Vox Machina Pre-load',
    StartTime: '12:04AM',
    StartDate: '12 Dec',
    WalletBalance: 900,
  },
];

@Component({
  selector: 'app-streamers',
  templateUrl: './streamers.component.html',
  styleUrls: ['./streamers.component.scss'],
})
export class StreamersComponent implements OnInit {
  readonly selected: string = 'month';

  readonly streamerAnalyticData = [
    {
      title: 'Total Streamers',
      count: '43.5',
      direction: 'up' as any,
    },
    {
      title: 'Current Online Streamers',
      count: '43.5',
      direction: 'down',
    },
    {
      title: 'New Streamers',
      count: '43.5',
      direction: 'down',
    },
  ];

  SchduledStreamersData = SCHEDULED_STREAMER_DATA;

  tableColumn: Array<TableColumn> = [
    {
      columnDef: 'username',
      header: 'Streamer Tag',
      image: 'streamer_avatar.svg',
      isImage: true,
    },
    {
      columnDef: 'StreamTitle',
      header: 'Stream Title',
    },
    {
      columnDef: 'StartTime',
      header: 'Start Time',
    },
    {
      columnDef: 'StartDate',
      header: 'Start Date',
    },
    {
      columnDef: 'WalletBalance',
      header: 'Wallet Balance',
      image: 'streamer_avatar.svg',
      isNumberAndImage: true,
    },
  ];

  readonly topStreamers: LineChartComponent['lineChartConfig'][] = [
    {
      title: 'Highest Wallet Balance',
      count: '900',
      // leadingImagePath: '/assets/images/active-streams.png',
      avatarPath: '/assets/images/streamer_avatar.svg',
      avatarText: 'Alicia Stevens',
      fillStartColor: 'rgba(80, 251, 0, 0.2)',
      borderColor: '#EFF88A',
      fill: true,
      fillEndColor: 'rgba(239, 248, 138, 0.3)',
      data: [65, 59, 80, 81, 56, 55, 40],
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    },
    {
      title: 'Most Online',
      count: '130 hrs',
      // leadingImagePath: '/assets/images/favicon.png',
      avatarPath: '/assets/images/streamer_avatar.svg',
      avatarText: 'Alicia Stevens',
      fillStartColor: 'rgba(91, 147, 255, 0.3)',
      borderColor: '#5B93FF',
      fill: true,
      fillEndColor: 'rgba(91, 147, 255, 0.2)',
      data: [65, 59, 80, 81, 56, 55, 40],
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    },
    {
      title: 'Most Tipped',
      count: '300',
      // leadingImagePath: '/assets/images/active-streams.png',
      avatarPath: '/assets/images/streamer_avatar.svg',
      avatarText: 'Alicia Stevens',
      fillStartColor: 'rgba(255, 91, 91, 0.3)',
      borderColor: '#FF5B5B',
      fill: true,
      fillEndColor: 'rgba(255, 91, 91, 0.2)',
      data: [65, 59, 80, 81, 56, 55, 40],
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    },
  ];

  readonly earningsConfig: LineChartComponent['lineChartConfig'] = {
    fill: false,
    data: [45, 29, 40, 31, 46, 25, 30],
    gradientBorder: true,
    showXScale: false,
    showYScale: true,
    showElevatedPoints: true,
    chartHeight: 300,
    gradientBorderColors: ['rgba(199, 50, 95, 1)', 'rgba(19, 15, 18, 1)'],
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  };

  constructor(private apiService: ApiService) {}
  ngOnInit() {
    this.apiService.get('/admin/user').subscribe((res) => console.log(res));
  }
}
