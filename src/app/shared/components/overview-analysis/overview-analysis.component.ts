import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview-analysis',
  templateUrl: './overview-analysis.component.html',
  styleUrls: ['./overview-analysis.component.scss']
})
export class OverviewAnalysisComponent implements OnInit {

@Input() overviewTitle : string = 'Active streams';
@Input() total : string | number = 0;

@Input() name: 'active-streams' | 'apartment-filled' | 'WorkFilled' | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
