import { Component, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexFill,
  ApexStates,
  ApexStroke,
  ApexTooltip,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
  states: ApexStates;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
};

@Component({
  selector: 'app-streamer-column-chart',
  templateUrl: './streamer-column-chart.component.html',
  styleUrls: ['./streamer-column-chart.component.scss'],
})
export class StreamerColumnChartComponent {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Inflation',
          data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
        },
      ],
      chart: {
        height: 200,
        type: 'bar',
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: '25%',
          borderRadius: 4,
          borderRadiusApplication: 'end',
          borderRadiusWhenStacked: 'all',
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: false,
      },

      xaxis: {
        type: 'category',
        categories: [
          'Fri',
          'Sat',
          'Sun',
          'Mon',
          'Tues',
          'Wed',
          'Thur',
          'Fri',
          'Sat',
          'Sun',
          'Mon',
          'Tue',
        ],
        position: 'bottom',
        labels: {
          offsetY: 0,
        },
        axisTicks: {
          show: false,
        },
      },
      fill: {
        colors: ['#C7325F'],
      },
      states: {
        normal: {
          filter: {
            type: 'lighten',
            value: 0.1,
          },
        },
        hover: {
          filter: {
            type: 'none',
            value: 0.15,
          },
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'darken',
            value: 0.75,
          },
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      stroke: {
        lineCap: 'round',
      },
      tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          return (
            '<div class="arrow_box">' +
            '<span>' +
            series[seriesIndex][dataPointIndex] +
            '</span>' +
            '</div>'
          );
        },
      },
    };
  }
}
