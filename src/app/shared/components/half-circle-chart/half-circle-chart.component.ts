import { Component, Input, ViewChild } from '@angular/core';

import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexFill,
  ChartComponent,
  ApexStroke,
  ApexLegend,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  stroke: ApexStroke;
  legend: ApexLegend;
};

@Component({
  selector: 'app-half-circle-chart',
  templateUrl: './half-circle-chart.component.html',
  styleUrls: ['./half-circle-chart.component.scss'],
})
export class HalfCircleChartComponent {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  @Input() series: number[];

  constructor() {
    this.chartOptions = {
      series: [76],
      chart: {
        height: 250,
        type: 'radialBar',
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          hollow: {
            margin: 0,
            size: '70%',
            background: '#fff',
            image: undefined,
            position: 'front',
          },
          track: {
            background: '#5B93FF',
            margin: 0, // margin is in pixels
          },

          dataLabels: {
            show: true,
            name: {
              offsetY: -10,
              show: false,
              color: '#888',
              fontSize: '17px',
            },
            value: {
              formatter: function (val) {
                return parseInt(val.toString(), 10).toString() + '%';
              },
              color: '#111',
              fontSize: '26px',
              show: true,
              offsetY: -15,
            },
          },
        },
      },
      fill: {
        colors: ['#ED6C02'],
      },
      stroke: {
        lineCap: 'round',
      },
    };
  }
}
