import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-count-summary',
  templateUrl: './count-summary.component.html',
  styleUrls: ['./count-summary.component.scss'],
})
export class CountSummaryComponent {
  @Input() title = 'Not available';
  @Input() count: number | string = 0;
  @Input() direction: 'up' | 'down' | undefined;
  @Input() titleStyle: string;
  @Input() route: string;

  constructor(private router: Router) {}

  emitClickEvent() {
    this.router.navigate([this.route]);
  }
}
