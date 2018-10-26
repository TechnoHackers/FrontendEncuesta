import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from './pages.component';
import {TestOneComponent} from './test-one/test-one.component';
import {TestTwoComponent} from './test-two/test-two.component';
import {ChartTestTwoComponent} from '../components/chart-test-two/chart-test-two.component';
import {ChartTestOneComponent} from '../components/chart-test-one/chart-test-one.component';
import {ChartTestThreeComponent} from '../components/chart-test-three/chart-test-three.component';
import {ChartTestFiveComponent} from '../components/chart-test-five/chart-test-five.component';
import {ChartTestFourComponent} from '../components/chart-test-four/chart-test-four.component';
import {MainTestOneComponent} from './main-test-one/main-test-one.component';
import {FactorVComponent} from './test-one/factores/factor-v/factor-v.component';
import {PageNotFoundComponent} from '../shared/page-not-found/page-not-found.component';
import {FactorEComponent} from './test-one/factores/factor-e/factor-e.component';
import {FactorRComponent} from './test-one/factores/factor-r/factor-r.component';
import {FactorNComponent} from './test-one/factores/factor-n/factor-n.component';
import {FactorFComponent} from './test-one/factores/factor-f/factor-f.component';
import {PreguntasComponent} from './matenimiento/preguntas/preguntas.component';
import {ListadoComponent} from './matenimiento/listado/listado.component';

export const pagesRoutes: Routes = [

  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'principalT1',
        //component: MainTestOneComponent,
        children: [
          //{ path: '', redirectTo: 'main', pathMatch: 'full' },
          { path: 'main', component: MainTestOneComponent },
          { path: 'factorV', component: FactorVComponent },
          { path: 'factorE', component: FactorEComponent },
          { path: 'factorR', component: FactorRComponent },
          { path: 'factorN', component: FactorNComponent },
          { path: 'factorF', component: FactorFComponent },
          //Funciona{ path: 'factorV/:id/report', component: ChartTestOneComponent },
        ]
      },
      {
        path: 'mantenimiento',
        children: [
          {
            path: 'preguntas/:tipo/:id',
            component: PreguntasComponent
          },
          {
            path: 'listado',
            component: ListadoComponent
          }
        ],
      },
      { path: 'test2', component: TestTwoComponent },
      { path: 'grafico-test1', component: ChartTestOneComponent },
      { path: 'grafico-test2', component: ChartTestTwoComponent },
      { path: 'grafico-test3', component: ChartTestThreeComponent },
      { path: 'grafico-test4', component: ChartTestFourComponent },
      { path: 'grafico-test5', component: ChartTestFiveComponent },
      { path: '', redirectTo: 'principalT1', pathMatch: 'full' }
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
