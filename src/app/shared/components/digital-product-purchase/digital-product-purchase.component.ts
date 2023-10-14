import { Component } from '@angular/core';
import { ChartConfiguration, ChartTypeRegistry, Plugin } from 'chart.js';

@Component({
  selector: 'app-digital-product-purchase',
  templateUrl: './digital-product-purchase.component.html',
  styleUrls: ['./digital-product-purchase.component.scss']
})
export class DigitalProductPurchaseComponent {

  public doughnutChartLabels: string[] = ['Pictures', 'Videos'];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
    {
      data: [30, 70],
      backgroundColor: ['#5B93FF','#FFD66B'],
      borderWidth: 0,
      label: 'Purchases',
      borderRadius: {
        innerStart: 30,
        outerStart: 30,
        innerEnd: 30,
        outerEnd: 30,
      },
      spacing: -30,

    },
  ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false,
    cutout: '80%',
    plugins: {


      legend: {
        display: true,
        align:'center',
        position: 'right',
        labels: {
          textAlign : 'center',
          boxWidth: 10,
          usePointStyle: true,
   
          font:{
            size:14,
            family :"'Hemi Head,Bold Italic'"
          }
        }
      },tooltip:{
        bodyAlign:'center'
      }
    }
  };
}
