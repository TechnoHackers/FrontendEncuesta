import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {Subject} from 'rxjs';

const data = [
  { year: 'FACTOR V', value: 0 },
  { year: 'FACTOR E', value: 0 },
  { year: 'FACTOR R', value: 0 },
  { year: 'FACTOR N', value: 5 },
  { year: 'FACTOR F', value: 80 },
];

const scale = [{
  dataKey: 'value',
  tickInterval: 10,
  min: 0,
  max: 100,
  style: {
    stroke: '#f8f'
  }
}, {
  dataKey: 'year',
  min: 0,
  max: 100,
}];

@Component({
  selector: 'app-chart-test-one',
  templateUrl: './chart-test-one.component.html',
  styleUrls: ['./chart-test-one.component.scss']
})
export class ChartTestOneComponent implements OnInit {

  forceFit: boolean= true;
  height: number = 400;
  data = data;
  scale = scale;

  single = [
    {
      "name": "Germany",
      "value": 8940000
    },
  ];

  multi: any[] = [
    {
      "name": "PMA",
      "series": [
        {
          "name": "Factor V",
          "value": 0
        },
        {
          "name": "Factor E",
          "value": 1
        },
        {
          "name": "Factor R",
          "value": 0
        },
        {
          "name": "Factor N",
          "value": 10
        },
        {
          "name": "Factor F",
          "value": 95
        }
      ]
    }
  ];

  view: any[] = [1224, 500];

  range: any = 10;

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = false;
  xAxisLabel = 'Country';
  showYAxisLabel = false;
  yAxisLabel = 'Population';
  schemeType: any = 'ordinal';

  xscaleMin: any = 0;
  xscaleMax: any = 100;

  yScaleMin: any = 0;
  yScaleMax: any = 100;

  colorScheme = {
    domain: ['#5AA454']
  };

  // line, area
  autoScale = false;
  constructor() {
  }

  ngOnInit() {

  }

  onSelect(event) {
    console.log(event);
  }

}
