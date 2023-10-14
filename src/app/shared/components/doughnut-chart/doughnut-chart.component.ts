import { Component } from '@angular/core';
import { ChartConfiguration, ChartTypeRegistry, Plugin } from 'chart.js';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent {
  public doughnutChartLabels: string[] = ['Non-Active', 'Active Employees', 'Total G3 Employees'];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
    {
      data: [100, 350, 450],
      backgroundColor: ['#FFD772', '#407CF0', '#C7325F'],
      borderWidth: 0,
      label: 'Series A',
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
    responsive: true,
    cutout: '70%',
    plugins: {
      colors: {
        forceOverride: true,
      },

      legend: {
        display: true,
        align:'center',
        position: 'bottom',
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

  // type: 'doughnut',
  // data: data,
  // options: {
  //   responsive: true,
  //   plugins: {
  //     legend: {
  //       position: 'top',
  //     },
  //     title: {
  //       display: true,
  //       text: 'Chart.js Doughnut Chart'
  //     }
  //   }
  // },

  public myDoughnutPlugin: Plugin<'doughnut', ChartTypeRegistry['doughnut']> = {
    id: 'roundedDoughnut',
    afterDraw: (chart) => {
      const ctx = chart.ctx;
      ctx.save();
      const image = new Image();
      image.src = '/assets/images/doughnut_chart_up.svg';
      const imageSize = 40;
      image.onload = () => {
        ctx.drawImage(image, (chart.width / 2) - (imageSize / 2), ((chart.height - 50) / 2) - (imageSize / 2), imageSize, imageSize);
        ctx.restore();
      };
    }
  };

  public plugins: Plugin<'doughnut', ChartTypeRegistry['doughnut']>[] = [
    this.myDoughnutPlugin,
  ];
}
