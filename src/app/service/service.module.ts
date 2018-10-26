import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EncuestaService} from './encuesta/encuesta.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [

  ],
  providers: [
    EncuestaService
  ]
})
export class ServiceModule { }
