import { Component } from '@angular/core';

@Component({
  selector: 'app-trend-analytics',
  templateUrl: './trend-analytics.component.html',
  styleUrls: ['./trend-analytics.component.scss']
})
export class TrendAnalyticsComponent {

  title = 'Title';
  direction = 'up'
  count = 10;
}
