import { Component, OnInit } from '@angular/core';
import { Column } from '../../../shared/interfaces/column';
import { ApiService } from '../../../shared/services/api/api.service';
import { LineChartComponent } from 'src/app/shared/components/line-chart/line-chart.component';

export interface Streamer {
  Image: string;
  StreamerTag: string;
  StreamTitle: string;
  startTime: string;
  startDate: string;
  walletBalance: number;
}

const STREAMERS_DATA: Streamer[] = [
  {
    Image: 'active-streams.png',
    StreamerTag: 'Floxy Nina',
    StreamTitle: 'Vox Machina Pre-load',
    startTime: '12:04AM',
    startDate: '12 Dec',
    walletBalance: 900,
  },
  {
    Image: 'active-streams.png',
    StreamerTag: 'Gwen 12',
    StreamTitle: 'Fifa Live 2024',
    startTime: '12:04AM',
    startDate: '12 Dec',
    walletBalance: 900,
  },
  {
    Image: 'active-streams.png',
    StreamerTag: 'Floxy Nina',
    StreamTitle: 'Vox Machina Pre-load',
    startTime: '12:04AM',
    startDate: '12 Dec',
    walletBalance: 900,
  },
  {
    Image: 'active-streams.png',
    StreamerTag: 'Gwen 12',
    StreamTitle: 'Fifa Live 2024',
    startTime: '12:04AM',
    startDate: '12 Dec',
    walletBalance: 900,
  },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  readonly selected: string = 'month';

  readonly memberAnalyticData = [
    {
      title: 'Total Members',
      count: '43.5k',
      direction: 'up' as any,
    },
    {
      title: 'Current Online Members',
      count: '43.5k',
      direction: 'down',
    },
    {
      title: 'New Members',
      count: '43.5k',
      direction: 'down',
    },
  ];

  readonly tokenAnalyticsData = [
    {
      title: 'Total Token bought',
      pourcentage: '0.8',
      total: '9,800,876',
      vector: 'green' as any,
    },
    {
      title: 'Total Token Spent',
      pourcentage: '10',
      total: '9,900,876',
      vector: 'red' as any,
    },
  ];

  readonly overviewAnalysisData = [
    {
      title: 'Active streams ',
      total: '20k',
      name: 'active-streams' as any,
    },
    {
      title: 'Abuse Report',
      total: '20k',
      name: 'ApartmentFilled' as any,
    },
    {
      title: 'Total Affiliate',
      total: '20k',
      name: 'WorkFilled' as any,
    },
  ];

  readonly estimateAnalysisData = [
    {
      title: 'Total due payments',
      pourcentage: '0.8',
      total: '$ 3,689,076',
      vector: 'green' as any,
    },
    {
      title: 'Total Website purchases',
      pourcentage: '0.8',
      total: '$ 3,689,076',
      vector: 'red' as any,
    },
  ];

  readonly streamerAnalyticData = [
    {
      title: 'Total Streamers',
      count: '43.5k',
      direction: 'up' as any,
    },
    {
      title: 'Current Online Streamers',
      count: '43.5k',
      direction: 'down',
    },
    {
      title: 'New Streamers',
      count: '43.5k',
      direction: 'down',
    },
  ];

  tableColumns: Array<Column> = [
    {
      columnDef: 'StreamerTag',
      header: 'Streamer Tag',
      cell: (element: Record<string, any>) => `${element['StreamerTag']}`,
      image: 'active-streams.png',
      isImage: true,
    },
    {
      columnDef: 'StreamTitle',
      header: 'Stream Title',
      cell: (element: Record<string, any>) => `${element['StreamTitle']}`,
    },
    {
      columnDef: 'startTime',
      header: 'Start Time',
      cell: (element: Record<string, any>) => `${element['startTime']}`,
    },
    {
      columnDef: 'startDate',
      header: 'Start Date',
      cell: (element: Record<string, any>) => `${element['startDate']}`,
    },
    {
      columnDef: 'walletBalance',
      header: 'Wallet Balance',
      cell: (element: Record<string, any>) => `${element['walletBalance']}`,
      image: 'active-streams.png',
      isNumberAndImage: true,
    },
  ];
  streamsDataSource = STREAMERS_DATA;

  readonly topStreamersData: LineChartComponent['lineChartConfig'][] = [
    {
      title: 'Highest Wallet Balance',
      count: '900',
      leadingImagePath: '/assets/images/active-streams.png',
      avatarPath: '/assets/images/member_avatar.svg',
      avatarText: 'Alicia Stevens',
      fillStartColor: 'rgba(80, 251, 0, 0.2)',
      fill: true,
      fillEndColor: 'rgba(239, 248, 138, 0.3)',
      data: [65, 59, 80, 81, 56, 55, 40],
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    },
    {
      title: 'Most Online',
      count: '130 hrs',
      // leadingImagePath: '/assets/images/favicon.png',
      avatarPath: '/assets/images/member_avatar.svg',
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
      leadingImagePath: '/assets/images/active-streams.png',
      avatarPath: '/assets/images/member_avatar.svg',
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
    data: [65, 59, 80, 81, 56, 55, 40],
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
    this.apiService
      .get('/roles/permissions')
      .subscribe((res) => console.log(res));
  }
}
