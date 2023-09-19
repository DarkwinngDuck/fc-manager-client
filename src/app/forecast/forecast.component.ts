import { Component } from '@angular/core';

export interface ReportRecord {
  mainIndicators: string;
  position: number;
  monthlyTotal: number;
  yearTotal: number;
}

const REPORT_DATA: ReportRecord[] = [
  {position: 1, mainIndicators: 'generated energy', monthlyTotal: 1.0079, yearTotal: 10 },
  {position: 2, mainIndicators: 'sold energy', monthlyTotal: 4.0026, yearTotal: 20},
  {position: 3, mainIndicators: 'incoming energy', monthlyTotal: 6.941, yearTotal: 30},
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent {
  displayedColumns: string[] = ['position', 'mainIndicators', 'monthlyTotal', 'yearTotal'];
  dataSource = REPORT_DATA;
}
