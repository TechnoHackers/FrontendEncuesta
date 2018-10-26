import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Pregunta} from '../../../models/Pregunta.model';
import {EncuestaService} from '../../../service/service.index';
import {Cuestionario} from '../../../models/Cuestionario.model';
import {UploadFile} from 'ng-zorro-antd';
import {ActivatedRoute, Router} from '@angular/router';
import {FormTextoComponent} from './form-texto/form-texto.component';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.scss']
})
export class PreguntasComponent implements OnInit {


  @ViewChild(FormTextoComponent) formtexto;

  pregunta: Pregunta = new Pregunta();
  cuestionario: Cuestionario[] = [];

  pregTextImagen: boolean = true;

  constructor(
    private encuestaService: EncuestaService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activateRoute.params.subscribe( param => {
      let id = param['id'];
      let tipo = param['tipo'];
      /*if ( tipo !== 'texto' || tipo !== 'imagenes' ) {
        this.router.navigateByUrl('');
        return;
      }*/
      if ( id !== 'new') {
        this.encuestaService.getPreguntaById( id )
          .subscribe( ( pregunta: Pregunta ) => {
            console.log( pregunta );
            this.encuestaService.preguntaTexto.emit( pregunta );
          });
      }
    });
  }

  ngOnInit(): void {

  }
}
