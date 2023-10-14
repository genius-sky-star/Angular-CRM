import { Component, ElementRef, Input, OnInit } from '@angular/core';
// import { data } from '`data.ts';
import { Chart, ChartConfiguration, ChartDataset, ChartOptions, ChartType, ChartTypeRegistry, Plugin } from "chart.js";

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  // @Input() containerEl!: HTMLElement;
  public title!: string;
  public count!: string;
  public avatarPath!: string;
  public avatarText!: string;
  public leadingImagePath!: string;
  private fillStartColor = 'rgba(80, 251, 0, 0.5)';
  private fillEndColor = 'rgba(239, 248, 138, 0.5)';
  private borderColor = '#EFF88A';
  private data: number[] = [0, 0];
  private labels: string[] = ['No data', 'No data'];
  private fill = false;
  private gradientBorderColors = ['#80b6f4', '#f49080'];
  private showElevatedPoints = false;

  @Input() lineChartConfig!: {
    title?: string,
    count?: string,
    avatarPath?: string,
    avatarText?: string;
    leadingImagePath?: string,
    fillStartColor?: string,
    fillEndColor?: string,
    fill?: boolean,
    gradientBorder?: boolean,
    gradientBorderColors?: string[],
    borderColor?: string,
    chartHeight?: number,
    chartWidth?: number,
    data: number[],
    labels: string[],
    showXScale?: boolean,
    showYScale?: boolean,
    showElevatedPoints?: boolean;
  };


  public lineChartData!: ChartConfiguration<'line'>['data'];
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    scales: {
      y: {
        display: false
      },
      x: {
        display: false
      }
    },
  };
  public chartWidth!: number;
  public chartHeight!: number;
  public lineChartLegend = false;

  public lineOffsetPlugin: Plugin<'line', ChartTypeRegistry['line']> = {
    id: 'offsetPoint',
    afterDraw: (chart) => {
      const datasets = chart.data.datasets;

      // Apply custom offset to each point on the chart
      datasets.forEach((dataset: ChartDataset, datasetIndex: number) => {
        if (!chart.getDatasetMeta(datasetIndex).hidden) {
          const meta = chart.getDatasetMeta(datasetIndex);
          meta.data.forEach((point) => {
            chart.ctx.save();
            chart.ctx.translate(point.x, point.y - 30);
            chart.ctx.fillStyle = '#C7325F'; // dataset?.backgroundColor || 'circle';
            chart.ctx.strokeStyle = '#C7325F'; // dataset.borderColor;
            chart.ctx.lineWidth = 2;
            chart.ctx.beginPath();
            chart.ctx.arc(0, 0, 4, 0, Math.PI * 2);
            // chart.ctx.fill();
            chart.ctx.stroke();
            chart.ctx.restore();
          });
        }
      });
      chart.ctx.save();
    }
  };

  public plugins: Plugin<'line', ChartTypeRegistry['line']>[] = [];

  constructor(private ref: ElementRef) { }

  ngOnInit(): void {
    const {
      title,
      count,
      avatarPath,
      avatarText,
      leadingImagePath,
      fillStartColor,
      fillEndColor,
      borderColor,
      data,
      labels,
      fill,
      gradientBorder,
      gradientBorderColors,
      showXScale,
      showYScale,
      chartHeight,
      chartWidth,
      showElevatedPoints
    } = this.lineChartConfig || {};

    if (title) {
      this.title = title;
    }
    this.count = count || this.count;
    this.avatarPath = avatarPath || this.avatarPath;
    this.avatarText = avatarText || this.avatarText;
    if (chartHeight) {
      this.chartHeight = chartHeight;
    }
    if (chartWidth) {
      this.chartWidth = chartWidth;
    }
    this.leadingImagePath = leadingImagePath || this.leadingImagePath;
    if (gradientBorderColors?.length) {
      this.gradientBorderColors = gradientBorderColors;
    }
    if (typeof showElevatedPoints === 'boolean') {
      this.showElevatedPoints = showElevatedPoints;
    }
    if (typeof showXScale === 'boolean') {
      this.lineChartOptions['scales'] = { ...this.lineChartOptions.scales, ...{ x: { display: showXScale } } };
    }
    if (typeof showYScale === 'boolean') {
      this.lineChartOptions['scales'] = { ...this.lineChartOptions.scales, ...{ y: { display: showYScale } } };
    }
    this.lineChartData = {
      labels: labels || this.labels,
      datasets: [
        {
          data: data || this.data,
          pointRadius: 0,
          label: title || this.title,
          fill: fill || this.fill,
          tension: 0.5,
          // pointBackgroundColor: "rgba(255, 99, 132, 1)",
          // pointHoverRadius: 8,
          // pointHoverBorderWidth: 2,
          // pointStyle: (context, options) => {
          //   const datasets = context.chart.data.datasets;

          //   datasets.forEach((dataset: ChartDataset, datasetIndex: number) => {
          //     if (!context.chart.getDatasetMeta(datasetIndex).hidden) {
          //       const meta = context.chart.getDatasetMeta(datasetIndex);
          //       meta.data.forEach((point) => {
          //         context.chart.ctx.save();
          //         context.chart.ctx.translate(point.x, point.y - 30);
          //         context.chart.ctx.fillStyle = '#C7325F'; // dataset?.backgroundColor || 'circle';
          //         context.chart.ctx.strokeStyle = '#C7325F'; // dataset.borderColor;
          //         context.chart.ctx.lineWidth = 2;
          //         context.chart.ctx.beginPath();
          //         context.chart.ctx.arc(0, 0, 4, 0, Math.PI * 2);
          //         context.chart.ctx.fill();
          //         context.chart.ctx.stroke();
          //         context.chart.ctx.restore();
          //       });
          //     }
          //   });
          //   return undefined;
          // },
          // }],
          borderColor: !gradientBorder ? borderColor || this.borderColor : (context) => {
            const gradientStroke = context.chart.ctx.createLinearGradient(500, 0, 100, 0);
            for (let i = 0; i < this.gradientBorderColors.length; i++) {
              gradientStroke.addColorStop(i, this.gradientBorderColors[i]);
            }
            return gradientStroke;
          },
          backgroundColor: (context) => {
            const chart = context.chart;
            const ctx = chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, chart.height);
            gradient.addColorStop(0, fillStartColor || this.fillStartColor);
            gradient.addColorStop(0.3, fillEndColor || this.fillEndColor);
            return gradient;
          },
        }
      ]
    };
    const parentElement = this.ref.nativeElement.parentElement as HTMLElement;
    this.chartWidth = this.chartWidth || parentElement.clientWidth;
    this.chartHeight = this.chartHeight || parentElement.clientHeight;
    if(this.showElevatedPoints) {
      this.plugins.push(this.lineOffsetPlugin);
    }
  }
}
