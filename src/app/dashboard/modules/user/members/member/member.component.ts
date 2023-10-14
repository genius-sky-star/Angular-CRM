import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { LineChartComponent } from 'src/app/shared/components/line-chart/line-chart.component';
import { ReportFilterType } from 'src/app/shared/enums/report-filter-type.enum';
import { Filter } from 'src/app/shared/interfaces/Filter';
import { TableColumn } from 'src/app/shared/interfaces/tableColumn';
import { DataService } from 'src/app/shared/services/data/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})

export class MemberComponent implements OnInit, OnDestroy {

  username: string;
  tabName: string = "Overview";
  secondTabName: string = 'Transaction History';
  thirdTabName: string = 'User Reports';
  readonly selected: string = 'month';
  panelOpenState: boolean = false;
  reportsFilters: Filter[] = [];
  selectedReportType: string = ReportFilterType.ALL_REPORTS;
  subscription: Subscription;
  member: any;

  reportsFilterOptions: any[] = [
    {
      name: 'members reports ',
      value: ReportFilterType.MEMBERS_REPORTS
    },
    {
      name: 'streamers reports',
      value: ReportFilterType.STREAMERS_REPORTS
    },
    {
      name: 'all reports',
      value: ReportFilterType.ALL_REPORTS
    }

  ];

  productPurchasesColumns: Array<TableColumn> = [
    {
      columnDef: 'Date',
      header: 'Date',
    },
    {
      columnDef: 'Product',
      header: 'Product',
    },
    {
      columnDef: 'Token',
      header: 'Token',
      image: 'active-streams.svg',
      isNumberAndImageWithoutBorder: true,
    },
  ];

  DIGITAL_PRODUCT_PURCHASES_DATA: any[] = [
    {
      Date: '12-AUG-2022',
      Product: 'Video- Floxy Nina (Get Ready with me.mp4)',
      Token: '10,986',
    },
    {
      Date: '12-AUG-2022',
      Product: 'Picture- Floxy Nina (sample.jpeg)',
      Token: '109',
    },
    {
      Date: '12-AUG-2022',
      Product: 'Video- Floxy Nina (Get Ready with me.mp4)',
      Token: '1876',
    },
    {
      Date: '12-AUG-2022',
      Product: 'Video- Floxy Nina (Get Ready with me.mp4)',
      Token: '10,986',
    },
    {
      Date: '12-AUG-2022',
      Product: 'Picture- Floxy Nina (sample.jpeg)',
      Token: '10,986',
    },
    {
      Date: '12-AUG-2022',
      Product: 'Video- Floxy Nina (Get Ready with me.mp4)',
      Token: '10,986',
    },
  ];

  tokenUsageColumns: Array<TableColumn> = [
    {
      columnDef: 'Date',
      header: 'Date',
    },
    {
      columnDef: 'Usage',
      header: 'Usage',
    },
    {
      columnDef: 'Token',
      header: 'Token',
      image: 'active-streams.svg',
      isNumberAndImageWithoutBorder: true,
    },
  ];

  TOKEN_USAGE_DATA: any[] = [
    {
      Date: '12-AUG-2022',
      Usage: 'Gift - Gwen Steeze',
      Token: '10,986',
    },
    {
      Date: '12-AUG-2022',
      Usage: 'Donations - Floxy Nina',
      Token: '109',
    },
    {
      Date: '12-AUG-2022',
      Usage: 'Gift - Floxy Nina',
      Token: '1876',
    },
    {
      Date: '12-AUG-2022',
      Usage: 'Live Session Interaction - Gwen Steeze',
      Token: '10,986',
    },
    {
      Date: '12-AUG-2022',
      Usage: 'Gift - Floxy Nina',
      Token: '10,986',
    },
    {
      Date: '12-AUG-2022',
      Usage: 'Gift - Floxy Nina',
      Token: '10,986',
    },
  ];

  privateChatColumns: Array<TableColumn> = [
    {
      columnDef: 'Date',
      header: 'Date',
    },
    {
      columnDef: 'ChatPartner',
      header: 'Chat Partner',
    },
    {
      columnDef: 'Content',
      header: 'Content',
      isButton: true,
      buttonTitle: 'View Chat',
    },
  ];

  PRIVATE_CHAT_DATA: any[] = [
    {
      Date: '12-AUG-2022',
      ChatPartner: 'Floxy NIna - Streamer',
      Content: '10,986',
    },
    {
      Date: '12-AUG-2022',
      ChatPartner: 'Alicia Stevens - Member',
      Content: '10,986',
    },
    {
      Date: '12-AUG-2022',
      ChatPartner: 'Zhign Wei chan - Streamer',
      Content: '10,986',
    },
    {
      Date: '12-AUG-2022',
      ChatPartner: 'Alicia Stevens - Member',
      Content: '10,986',
    },
    {
      Date: '12-AUG-2022',
      ChatPartner: 'Alicia Stevens - Member',
      Content: '10,986',
    },
    {
      Date: '12-AUG-2022',
      ChatPartner: 'Alicia Stevens - Member',
      Content: '10,986',
    },
  ];

  liveSessionAttendanceColumns: Array<TableColumn> = [
    {
      columnDef: 'Date',
      header: 'Date',
    },
    {
      columnDef: 'SessionName',
      header: 'Session Name',
    },
    {
      columnDef: 'Duration',
      header: 'Duration',
    },
  ];

  LIVE_SESSION_ATTENDANCE_DATA: any[] = [
    {
      Date: '12-AUG-2022',
      SessionName: 'Zhign Wei chan - (Get Ready with me)',
      Duration: '22:43:23',
    },
    {
      Date: '12-AUG-2022',
      SessionName: 'Zhign Wei chan - (Get Ready with me)',
      Duration: '22:43:23',
    },
    {
      Date: '12-AUG-2022',
      SessionName: 'Zhign Wei chan - (Get Ready with me)',
      Duration: '18:34:34',
    },
    {
      Date: '12-AUG-2022',
      SessionName: 'Zhign Wei chan - (Get Ready with me)',
      Duration: '22:43:23',
    },
    {
      Date: '12-AUG-2022',
      SessionName: 'Zhign Wei chan - (Get Ready with me)',
      Duration: '02:43:23',
    },
    {
      Date: '12-AUG-2022',
      SessionName: 'Zhign Wei chan - (Get Ready with me)',
      Duration: '18:43:23',
    },
  ];

  physicalGoodsSentColumns: Array<TableColumn> = [
    {
      columnDef: 'Date',
      header: 'Date',
    },
    {
      columnDef: 'Item',
      header: 'Item',
    },
    {
      columnDef: 'status',
      header: 'Status',
      isStatus: true,
    },
  ];

  PHYSICAL_GOODS_DATA: any[] = [
    {
      Date: '12-AUG-2022',
      Item: 'Zhign Wei chan - (Get Ready with me)',
      status: 'Successful',
    },
    {
      Date: '12-AUG-2022',
      Item: 'Zhign Wei chan - (Get Ready with me)',
      status: 'Cancelled',
    },
    {
      Date: '12-AUG-2022',
      Item: 'Zhign Wei chan - (Get Ready with me)',
      status: 'Pending',
    },
    {
      Date: '12-AUG-2022',
      Item: 'Zhign Wei chan - (Get Ready with me)',
      status: 'Pending',
    },
    {
      Date: '12-AUG-2022',
      Item: 'Zhign Wei chan - (Get Ready with me)',
      status: 'Pending',
    },
    {
      Date: '12-AUG-2022',
      Item: 'Zhign Wei chan - (Get Ready with me)',
      status: 'Pending',
    },
    {
      Date: '12-AUG-2022',
      Item: 'Zhign Wei chan - (Get Ready with me)',
      status: 'Successful',
    },
  ];

  reportsListColumns: Array<TableColumn> = [
    {
      columnDef: 'reporterName',
      header: 'Reporter’s Name',
    },
    {
      columnDef: 'dateReport',
      header: 'Date of Report',
    },
    {
      columnDef: 'issueDescription',
      header: 'Issue Description',
    },
  ];

  REPORT_LIST_DATA_FILTERED: any[] = [];

  REPORT_LIST_DATA: any[] = [
    {
      reporterName: 'FLoxy Nina \n floxynian@exam.com - Streamer',
      dateReport: '03 Aug, 2023',
      issueDescription:
        'Harassment \n I have been receiving offensive messages from this user',
    },
    {
      reporterName: 'Alicia Stevens \n Aliciastev@exam.com - Member',
      dateReport: '03 Aug, 2023',
      issueDescription: 'Inappropriate Content I found explicit content posted by this member in a public discussion.'
    },
    {
      reporterName: 'FLoxy Nina \n floxynian@exam.com - Streamer',
      dateReport: '03 Aug, 2023',
      issueDescription:
        'Harassment \n I have been receiving offensive messages from this user',
    },
    {
      reporterName: 'Alicia Stevens \n Aliciastev@exam.com - Member',
      dateReport: '03 Aug, 2023',
      issueDescription:
        'Harassment \n I have been receiving offensive messages from this user',
    },
    {
      reporterName: 'FLoxy Nina \n floxynian@exam.com - Streamer',
      dateReport: '03 Aug, 2023',
      issueDescription:
        'Harassment \n I have been receiving offensive messages from this user',
    },
    {
      reporterName: 'FLoxy Nina \n floxynian@exam.com - Streamer',
      dateReport: '03 Aug, 2023',
      issueDescription:
        'Harassment \n I have been receiving offensive messages from this user',
    },
    {
      reporterName: 'FLoxy Nina \n floxynian@exam.com - Streamer',
      dateReport: '03 Aug, 2023',
      issueDescription:
        'Harassment \n I have been receiving offensive messages from this user',
    },
  ];


  readonly interactionRateConfig: LineChartComponent['lineChartConfig'] = {
    fill: true,
    fillStartColor: 'rgba(199,50,95,0.1)',
    fillEndColor: 'rgba(199,50,95,0.1)',
    data: [25, 49, 100, 28, 47, 77, 75],
    gradientBorder: true,
    showXScale: true,
    showYScale: true,
    showElevatedPoints: true,
    chartHeight: 300,
    gradientBorderColors: ['#C7325F', '#C7325F'],
    labels: [
      'Sun',
      'Mon',
      'Tue',
      'Wed',
      'Thur',
      'Fri',
      'Sat',
    ],
  }
  readonly charFrequencyConfig: LineChartComponent['lineChartConfig'] = {
    fill: true,
    fillStartColor: '#FAFAFB',
    fillEndColor: '#FAFAFB',
    data: [55, 30, 59, 35, 25, 53, 18, 38, 65, 100],
    gradientBorder: true,
    showXScale: true,
    showYScale: true,
    showElevatedPoints: true,
    chartHeight: 300,
    gradientBorderColors: ['#FF5BAA', '#FFA05B'],
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct'
    ],
  };

  constructor(private activateRoute: ActivatedRoute, private dataservice: DataService) {

  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {

    this.subscription = this.dataservice.currentMessage$.subscribe({
      next: (message: any) =>
      {
        this.member = message;
        console.log("member ", message);

      }
    }
    );

    this.reportsFilters.push(
      { name: 'role', options: this.reportsFilterOptions, defaultValue: this.selectedReportType });

    this.activateRoute.paramMap.subscribe({
      next: (params: ParamMap) => {
        this.username = params.get('username');
      },
    });
  }

  viewChat(event) {
  }

  reviewReport(event) {
  }



  applyReportFilter(ob: any) {
    this.selectedReportType = ob.value;
    this.filterReportDataSource();
  }

  filterReportDataSource() {
    this.REPORT_LIST_DATA_FILTERED = this.REPORT_LIST_DATA.filter((ele: any) => {
      if (this.selectedReportType.toLowerCase() == 'show all reports') {
        return ele;
      }
      else if (this.selectedReportType.toLowerCase() == 'show members reports') {
        return ele.reporterName.toLowerCase().includes('member');
      }
      else {
        return ele.reporterName.toLowerCase().includes('streamer');
      }
    });
  }
}



