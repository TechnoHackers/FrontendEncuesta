import { Component, OnInit } from '@angular/core';
import { DataSet } from '@antv/data-set';

const sourceData = [
  { country: '中国', population: 131744 },
  { country: '印度', population: 104970 },
  { country: '美国', population: 29034 },
  { country: '印尼', population: 23489 },
  { country: '巴西', population: 18203 },
];

const dv = new DataSet.View().source(sourceData);
dv.transform({
  type: 'sort',
  callback(a, b) {
    return a.population - b.population > 0;
  },
});

const data = dv.rows;

const label = { offset: 12 };

@Component({
  selector: 'app-chart-test-five',
  templateUrl: './chart-test-five.component.html',
  styleUrls: ['./chart-test-five.component.scss']
})
export class ChartTestFiveComponent implements OnInit {

  forceFit: boolean = true;
  height: number = 400;
  data = data;
  label = label;

  constructor() { }

  ngOnInit() {
  }

}
