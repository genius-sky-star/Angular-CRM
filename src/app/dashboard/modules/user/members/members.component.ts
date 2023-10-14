import { Component, OnInit } from '@angular/core';
import { LineChartComponent } from 'src/app/shared/components/line-chart/line-chart.component';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit{

  readonly selected : string ='month';


  readonly topMembers: LineChartComponent['lineChartConfig'][] = [
    {
      title: 'Highest Wallet Balance',
      count: '900',
      leadingImagePath: '/assets/images/active-streams.png',
      avatarPath: '/assets/images/member_avatar.svg',
      avatarText: 'Alicia Stevens',
      fillStartColor: 'rgba(80, 251, 0, 0.2)',
      fill: true,
      fillEndColor: 'rgba(239, 248, 138, 0.3)',
      data: [ 65, 59, 80, 81, 56, 55, 40 ],
      labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July'
        ],
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
      data: [ 65, 59, 80, 81, 56, 55, 40 ],
      labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July'
        ],
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
      data: [ 65, 59, 80, 81, 56, 55, 40 ],
      labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July'
        ],
    }
  ];


  readonly memberAnalyticData = [
    {
      title: 'Total Members',
      count: '43.5',
      direction: 'up' as any
    },{
      title: 'Current Online Members',
      count: '43.5',
      direction: 'down'
    },{
      title: 'New Members',
      count: '43.5',
      direction: 'down'
    },
  ];

  constructor()
  {

  }
  ngOnInit(): void {
   
  }

}
