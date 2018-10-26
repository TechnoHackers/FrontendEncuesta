import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { TestOneComponent } from './test-one/test-one.component';
import {SharedModule} from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import {PAGES_ROUTES} from './pages.routes';

import { NgZorroAntdModule, NZ_I18N, es_ES } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import espe from '@angular/common/locales/es-PE';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TestTwoComponent } from './test-two/test-two.component';
import {ChartTestTwoComponent} from '../components/chart-test-two/chart-test-two.component';
import {ViserModule} from 'viser-ng';
import {ChartTestOneComponent} from '../components/chart-test-one/chart-test-one.component';
import {ChartTestThreeComponent} from '../components/chart-test-three/chart-test-three.component';
import {ChartTestFourComponent} from '../components/chart-test-four/chart-test-four.component';
import {ChartTestFiveComponent} from '../components/chart-test-five/chart-test-five.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {CountdownModule} from 'ngx-countdown';
import {RouterModule} from '@angular/router';
import {NgCircleProgressModule} from 'ng-circle-progress';
import {CircleProgressComponent} from '../components/circle-progress/circle-progress.component';
import { MainTestOneComponent } from './main-test-one/main-test-one.component';
import { FactorVComponent } from './test-one/factores/factor-v/factor-v.component';
import { FactorEComponent } from './test-one/factores/factor-e/factor-e.component';
import { FactorRComponent } from './test-one/factores/factor-r/factor-r.component';
import { FactorNComponent } from './test-one/factores/factor-n/factor-n.component';
import { FactorFComponent } from './test-one/factores/factor-f/factor-f.component';
import { PreguntasComponent } from './matenimiento/preguntas/preguntas.component';
import { ListadoComponent } from './matenimiento/listado/listado.component';
import { FormTextoComponent } from './matenimiento/preguntas/form-texto/form-texto.component';
import { FormImagenesComponent } from './matenimiento/preguntas/form-imagenes/form-imagenes.component';

registerLocaleData(espe);

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    PAGES_ROUTES,
    NgZorroAntdModule,
    ViserModule,
    NgxChartsModule,
    CountdownModule,
    RouterModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#1890ff",
      innerStrokeColor: "#1890ff",
      animationDuration: 300,
    })
  ],
  declarations: [
    PagesComponent,
    TestOneComponent,
    TestTwoComponent,
    ChartTestOneComponent,
    ChartTestTwoComponent,
    ChartTestThreeComponent,
    ChartTestFourComponent,
    ChartTestFiveComponent,
    CircleProgressComponent,
    MainTestOneComponent,
    FactorVComponent,
    FactorEComponent,
    FactorRComponent,
    FactorNComponent,
    FactorFComponent,
    PreguntasComponent,
    ListadoComponent,
    FormTextoComponent,
    FormImagenesComponent,
  ],
  exports: [
    PagesComponent,
    TestOneComponent,
    ChartTestOneComponent,
    ChartTestTwoComponent,
    ChartTestThreeComponent,
    ChartTestFourComponent,
    ChartTestFiveComponent,
    CircleProgressComponent,
    FactorVComponent,
    FactorEComponent,
    FactorRComponent,
    FactorNComponent,
    FactorFComponent,
  ],
  providers: [ { provide: NZ_I18N, useValue: es_ES } ]
})
export class PagesModule { }
