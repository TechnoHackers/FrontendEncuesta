import { Component, OnInit } from '@angular/core';

const data = [
  { year: 'VL 年', sales: 50 },
  { year: 'LM 年', sales: 45 },
  { year: 'M 年', sales: 55 },
  { year: 'E 年', sales: 100 },
  { year: 'CK 年', sales: 30 },
  { year: 'INTER 年', sales: 30 },
  { year: 'INTRA 年', sales: 10 },
  { year: 'N 年', sales: 30 },
];

const scale = [{
  dataKey: 'sales',
  tickInterval: 5,
}];

@Component({
  selector: 'app-chart-test-two',
  templateUrl: './chart-test-two.component.html',
  styleUrls: ['./chart-test-two.component.scss']
})
export class ChartTestTwoComponent implements OnInit {

  forceFit: boolean = true;
  height: number = 450;
  data = data;
  scale = scale;

  constructor() { }

  ngOnInit() {
  }

}
