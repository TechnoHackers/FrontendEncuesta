import { Component, OnInit } from '@angular/core';

const data = [
  { year: '1991', value: 3 },
  { year: '1992', value: 4 },
  { year: '1993', value: 3.5 },
  { year: '1994', value: 5 },
  { year: '1995', value: 4.9 },
  { year: '1996', value: 6 },
  { year: '1997', value: 7 },
  { year: '1998', value: 9 },
  { year: '1999', value: 13 },
];

const scale = [{
  dataKey: 'value',
  min: 0,
}, {
  dataKey: 'year',
  min: 0,
  max: 1,
}];

@Component({
  selector: 'app-chart-test-three',
  templateUrl: './chart-test-three.component.html',
  styleUrls: ['./chart-test-three.component.scss']
})
export class ChartTestThreeComponent implements OnInit {

  forceFit: boolean= true;
  height: number = 400;
  data = data;
  scale = scale;

  constructor() { }

  ngOnInit() {
  }

}
