import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent {

  public barChartLegend = false;
  public barChartPlugins = [];
  public chartWidth = 600;
  public chartHeight = 300;

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ 'Maddie982', 'Gwen123', 'Floxy Nina', 'Jasmine234', 'Belinda rosa', 'Maddie982', 'Gwen123', 'Floxy Nina', 'Jasmine234', 'Belinda rosa' ],
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40, 35, 25, 60 ],
        label: 'Series A',
        backgroundColor: [
          "#B5FF6B",
          "#FFD66B",
          "#D06BFF",
          "#454341",
          "#FF5B8C",
          "#FFF27B",
          "#5BF5FF",
          "#FF7245",
          "#5B93FF",
          "#FF7070",
        ],
        borderRadius: {
          topRight: 30,
          bottomRight: 30
        },
        categoryPercentage: 0.5,
      },
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
    indexAxis: 'y',
    scales: {
      y: { 
        display: true,
        grid: {
          display: false,
        },
        ticks: {
          font:{
           family:'Hemi Head,Bold Italic'  
          }
        }
      },
      x: {
        display: false,
      },
    },
    layout: {
      padding: {
        // left: 30,
      },
    },
  };



}
