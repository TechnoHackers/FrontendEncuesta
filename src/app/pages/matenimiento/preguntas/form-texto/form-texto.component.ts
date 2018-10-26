import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Cuestionario} from '../../../../models/Cuestionario.model';
import {EncuestaService} from '../../../../service/service.index';
import {Pregunta} from '../../../../models/Pregunta.model';
import {pipe} from 'rxjs';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-form-texto',
  templateUrl: './form-texto.component.html',
  styleUrls: ['./form-texto.component.scss']
})
export class FormTextoComponent implements OnInit {

  public pregunta: Pregunta;

  cuestionario: Cuestionario[] = [];
  alternativas: any[] = [
    { id: 1, nombre: 'Alternativas 1', texto: '', a: '' },
    { id: 2, nombre: 'Alternativas 2', texto: '', a: '' },
    { id: 3, nombre: 'Alternativas 3', texto: '', a: '' },
    { id: 4, nombre: 'Alternativas 4', texto: '', a: '' },
    { id: 5, nombre: 'Alternativas 5', texto: '', a: '' },
    { id: 6, nombre: 'Alternativas 6', texto: '', a: '' },
  ];
  Pregunta: Pregunta = new Pregunta();

  constructor(
    private encuestaService: EncuestaService,
  ) { }

  ngOnInit() {
    this.getCuestionarios();
    this.encuestaService.preguntaTexto.subscribe( preg => {
      this.Pregunta = { ...preg };
      let poner = [
        { a: this.Pregunta.a1 },
        { a: this.Pregunta.a2 },
        { a: this.Pregunta.a3 },
        { a: this.Pregunta.a4 },
        { a: this.Pregunta.a5 },
        { a: this.Pregunta.a6 },
      ];
      for (let i = 0; i <= this.alternativas.length - 1; i++ ) {
        this.alternativas[i].a = poner[i].a;
      }
      console.log( this.Pregunta );
    });
  }

  getCuestionarios() {
    this.encuestaService.getCuestionarios()
      .subscribe( ( cuestionario: Cuestionario[] ) => this.cuestionario = cuestionario );
  }

  guardarTexto( formaTexto: NgForm ) {
    if ( formaTexto.invalid ) return;

    const pregunta: Pregunta = formaTexto.value;

    if ( this.Pregunta.idPreg != null || this.Pregunta.idPreg > 0 ) {
      pregunta.idPreg = this.Pregunta.idPreg;
    }
    this.encuestaService.guardarPregunta( pregunta )
      .subscribe(
        pipe(
          ( preguntaGuardada ) => {
            console.log( preguntaGuardada );
          },
          () => {}
        ),
        ( err ) => console.log( err ),
        () => {
          formaTexto.reset();
        }
      );
  }

}
