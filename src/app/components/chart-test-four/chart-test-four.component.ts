import { Component, OnInit } from '@angular/core';
import { DataSet } from '@antv/data-set';


const sourceData = [
  { item: 'Aprendizaje Activo', a: 70 },
  { item: 'Aprendizaje Reflexivo', a: 60 },
  { item: 'Aprendizaje Teórico', a: 50 },
  { item: 'Aprendizaje Pragmatico', a: 40 },
  /*{ item: 'Test', a: 60, b: 70 },
  { item: 'Language', a: 70, b: 50 },
  { item: 'Technology', a: 50, b: 40 },
  { item: 'Support', a: 30, b: 40 },
  { item: 'Sales', a: 60, b: 40 },
  { item: 'UX', a: 50, b: 60 },*/
];

const dv = new DataSet.View().source(sourceData);
dv.transform({
  type: 'fold',
  fields: ['a'],
  key: 'user',
  value: 'score',
});
const data = dv.rows;

const scale = [{
  dataKey: 'score',
  min: 0,
  max: 80,
}];

const axis1GridOpts = {
  lineStyle: {
    lineDash: null
  },
  hideFirstLine: false
};

const axis2GridOpts = {
  type: 'polygon',
  lineStyle: {
    lineDash: null,
  },
};

@Component({
  selector: 'app-chart-test-four',
  templateUrl: './chart-test-four.component.html',
  styleUrls: ['./chart-test-four.component.scss']
})
export class ChartTestFourComponent implements OnInit {

  forceFit: boolean = true;
  height: number = 500;
  data = data;
  padding = [20, 20, 95, 20];
  scale = scale;
  axis1GridOpts = axis1GridOpts;
  //axis2GridOpts = axis2GridOpts;

  constructor() { }

  ngOnInit() {
  }

}
