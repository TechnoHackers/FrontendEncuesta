import { Component, OnInit } from '@angular/core';
import {EncuestaService} from '../../../../service/service.index';
import {Pregunta} from '../../../../models/Pregunta.model';

@Component({
  selector: 'app-factor-v',
  templateUrl: './factor-v.component.html',
  styleUrls: ['./factor-v.component.scss']
})
export class FactorVComponent implements OnInit {

  dataPreguntas: Pregunta[] = [];

  constructor(
    private encuestaService: EncuestaService
  ) { }

  ngOnInit() {
    this.getPreguntas();
  }

  getPreguntas() {
    this.encuestaService.getPreguntas()
      .subscribe(
        ( ( preguntas: Pregunta[] ) => this.dataPreguntas = preguntas )
      );
  }

}
