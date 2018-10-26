import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Pregunta} from '../../models/Pregunta.model';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  preguntaTexto: EventEmitter<any> = new EventEmitter<any>() ;

  constructor(
    public httpClient: HttpClient
  ) { }

  getEncuestas() {
    const url = '/api/encuesta';
    return this.httpClient.get( url );
  }

  getCuestionarios() {
    const url = '/api/cuestionario';
    return this.httpClient.get( url );
  }

  getPreguntas() {
    const url = '/api/pregunta';
    return this.httpClient.get( url );
  }

  getPreguntaById( id: number ) {
    const url = '/api/pregunta/' + id;
    return this.httpClient.get( url );
  }

  guardarPregunta( pregunta: Pregunta ) {
    const url = '/api/pregunta';
    return this.httpClient.post( url, pregunta );
  }

  deletePreguntaById( idpreg: number ) {
    const url = '/api/pregunta/' + idpreg;
    return this.httpClient.delete( url  );
  }
}
