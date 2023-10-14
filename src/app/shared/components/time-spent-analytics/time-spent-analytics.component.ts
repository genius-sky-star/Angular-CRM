import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-spent-analytics',
  templateUrl: './time-spent-analytics.component.html',
  styleUrls: ['./time-spent-analytics.component.scss'],
})
export class TimeSpentAnalyticsComponent implements OnInit {
  @Input() title = 'Total Token bought';
  @Input() pourcentage: number | string = 0;
  @Input() timespent: any | undefined;
  @Input() vector: 'red' | 'green' | undefined;
  @Input() mpercent: number | undefined;

  constructor() {}

  spercent: string;
  ngOnInit(): void {
    console.log(this.mpercent);
    if (this.mpercent > 0) {
      this.spercent = '+' + this.mpercent.toString() + '%';
    } else {
      this.spercent = this.mpercent.toString() + '%';
    }
  }
}
