import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-count-earning-summary',
  templateUrl: './count-earning-summary.component.html',
  styleUrls: ['./count-earning-summary.component.scss'],
})
export class CountEarningSummaryComponent {
  @Input() title = 'Not available';
  @Input() count: number | string = 0;
  @Input() direction: 'up' | 'down' | undefined;
  @Input() titleStyle: string;
  @Input() route: string;
  @Input() spercent: string;

  constructor(private router: Router) {}

  emitClickEvent() {
    this.router.navigate([this.route]);
  }
}
