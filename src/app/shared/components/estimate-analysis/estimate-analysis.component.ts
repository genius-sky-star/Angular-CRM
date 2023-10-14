import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-estimate-analysis',
  templateUrl: './estimate-analysis.component.html',
  styleUrls: ['./estimate-analysis.component.scss']
})
export class EstimateAnalysisComponent implements OnInit {


  @Input() estimateTitle = 'Total due payments';
  @Input() pourcentage: number | string = 0;
  @Input() total: number |string = 0;
  @Input() vector: 'red' | 'green' | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
