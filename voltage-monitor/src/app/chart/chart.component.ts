import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as echarts from 'echarts';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, NgFor],
  template: `
    <mat-form-field>
      <mat-label>Select Sensor</mat-label>
      <mat-select
        [(ngModel)]="selectedSensor"
        (selectionChange)="loadChartData()"
      >
        <mat-option *ngFor="let sensor of sensors" [value]="sensor">
          {{ sensor }}
        </mat-option>
      </mat-select>
    </mat-form-field>
    <div #chart style="width:100%; height:400px;"></div>
  `,
})
export class ChartComponent implements OnInit {
  @ViewChild('chart', { static: true }) chartElement!: ElementRef;

  sensors: string[] = [];
  selectedSensor: string = '';
  chartInstance!: echarts.ECharts;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadSensors();
    this.initChart();
  }

  loadSensors() {
    this.http.get<string[]>('http://localhost:8000/sensors').subscribe(
      (data) => {
        console.log("Sensors data received:", data);
        this.sensors = data;
        if (this.sensors.length > 0) {
          this.selectedSensor = this.sensors[0];
          this.loadChartData();
        } else {
          console.log("No sensors data received");
        }
      },
      (error) => {
        console.error("Error fetching sensors:", error);
      }
    );
  }
  
  loadChartData() {
    if (!this.selectedSensor) {
      console.log("No sensor selected");
      return;
    }
    this.http.get(`http://localhost:8000/voltage/${this.selectedSensor}`).subscribe(
      (data: any) => {
        console.log("Voltage data received:", data);
        const option: echarts.EChartsOption = {
          xAxis: {
            type: 'category',
            data: data.map((item: any) => item.timestamp)
          },
          yAxis: {
            type: 'value',
            name: 'Voltage'
          },
          series: [
            {
              data: data.map((item: any) => item.voltage),
              type: 'line'
            }
          ]
        };
        //@ts-ignore
        this.chartInstance.setOption(option);
      },
      (error) => {
        console.error("Error fetching voltage data:", error);
      }
    );
  }

  initChart() {
    this.chartInstance = echarts.init(this.chartElement.nativeElement);
  }

  
}
