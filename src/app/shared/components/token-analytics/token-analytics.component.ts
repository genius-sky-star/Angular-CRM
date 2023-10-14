import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-token-analytics',
  templateUrl: './token-analytics.component.html',
  styleUrls: ['./token-analytics.component.scss']
})
export class TokenAnalyticsComponent implements OnInit {


  @Input() tokenTitle = 'Total Token bought';
  @Input() pourcentage: number | string = 0;
  @Input() total: number |string = 0;
  @Input() vector: 'red' | 'green' | undefined;



  constructor() { }

  ngOnInit(): void {
  }

}
