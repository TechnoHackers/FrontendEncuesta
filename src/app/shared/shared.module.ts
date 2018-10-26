import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {TablePreguntasDirective} from './directives/table-preguntas.directive';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  declarations: [
    NavBarComponent,
    PageNotFoundComponent,
    TablePreguntasDirective,
  ],
  exports: [
    NavBarComponent,
    PageNotFoundComponent,
    TablePreguntasDirective,
  ]
})
export class SharedModule { }
