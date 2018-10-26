import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {APP_ROUTES} from './app.routes';
import {PagesModule} from './pages/pages.module';
import { ChartTestTwoComponent } from './components/chart-test-two/chart-test-two.component';
import { ChartTestOneComponent } from './components/chart-test-one/chart-test-one.component';
import { ChartTestThreeComponent } from './components/chart-test-three/chart-test-three.component';
import { ChartTestFourComponent } from './components/chart-test-four/chart-test-four.component';
import { ChartTestFiveComponent } from './components/chart-test-five/chart-test-five.component';
import {ServiceModule} from './service/service.module';
import { CircleProgressComponent } from './components/circle-progress/circle-progress.component';
import { TablePreguntasDirective } from './shared/directives/table-preguntas.directive';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTES,
    PagesModule,
    ServiceModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
