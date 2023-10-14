import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-session-attended-bar-char',
  templateUrl: './session-attended-bar-char.component.html',
  styleUrls: ['./session-attended-bar-char.component.scss']
})
export class SessionAttendedBarCharComponent {
  public barChartLegend = false;
  public barChartPlugins = [];
  public chartWidth = 600;
  public chartHeight = 300;

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ 'Sun', 'Mon', 'Tues','Wed','Thur','Fri','Sat' ],
    datasets: [
      {
        data: [ 9,13,15, 14,20,25,5],
        backgroundColor: 'rgba(199, 50, 95, 1)',
        categoryPercentage: 0.8,
      },
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
    indexAxis: 'x',
    scales: {
      y: { 
        display: true,
        grid: {
          display: false,
        },
        ticks: {
          font:{
           family:'Roboto-Regular'  
          }
        }
      },
      x: {
        display: true,
        grid : {
          display:false
        }
      },
    }
  };

}
