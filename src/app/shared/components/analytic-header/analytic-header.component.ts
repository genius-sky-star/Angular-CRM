import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-analytic-header',
  templateUrl: './analytic-header.component.html',
  styleUrls: ['./analytic-header.component.scss']
})
export class AnalyticHeaderComponent {

  
  @Input() title = 'Not available';
  @Input() description!: string;
  @Input() route : string;

  constructor(private router:Router){

  }

  emitClickEvent() {
    this.router.navigate([this.route]);
  }
}
