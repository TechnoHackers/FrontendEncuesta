import {AfterViewInit, Component, OnInit} from '@angular/core';
import {EncuestaService} from '../../../service/service.index';
import {pipe} from 'rxjs';
import {Pregunta} from '../../../models/Pregunta.model';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit, AfterViewInit {

  listPreguntas: Pregunta[] = [];

  searchValue = '';
  filterAddressArray = [
    { text: 'PMA Factor V', value: 'PMA factor V' },
    { text: 'PMA Factor E', value: 'PMA factor E' },
    { text: 'PMA Factor R', value: 'PMA factor R' },
    { text: 'PMA Factor N', value: 'PMA factor N' },
    { text: 'PMA Factor F', value: 'PMA factor F' },
    { text: 'PMB', value: 'PMB' }
  ];
  searchAddress = [];
  sortMap = {
    name   : null,
    age    : null,
    address: null
  };
  sortName = null;
  sortValue = null;
  data = [];
  displayData = [];

  sort(sortName: string, value: boolean): void {
    this.sortName = sortName;
    this.sortValue = value;
    for (const key in this.sortMap) {
      this.sortMap[ key ] = (key === sortName ? value : null);
    }
    this.search();
  }

  filterAddressChange(value: string[]): void {
    this.searchAddress = value;
    this.search();
  }

  search(): void {
    const filterFunc = (item) => {
      item.nombreCuestionario = item.cuestionario.test.nomTest + ' ' + item.cuestionario.esFactor;
      return (this.searchAddress.length ? this.searchAddress.some(address => item.nombreCuestionario.indexOf(address) !== -1) : true);
    };
    const data = this.data.filter(item => filterFunc(item));
    this.displayData = data.sort((a, b) => (this.sortValue === 'ascend') ? (a[ this.sortName ] > b[ this.sortName ] ? 1 : -1) : (b[ this.sortName ] > a[ this.sortName ] ? 1 : -1));
  }

  constructor(
    private encuestaService: EncuestaService,
    private message: NzMessageService
  ) { }

  ngOnInit() {
    this.getPregunta();
  }

  getPregunta() {
    this.encuestaService.getPreguntas()
      .subscribe(
        pipe(
          ( pregunta: Pregunta[] ) => {
            this.data = pregunta;
            this.displayData = [ ...this.data ];
          },
          () => {},
        ),
        () => {},
        () => {}
      );
  }

  deletePregunta( idPreg: number ) {
    this.encuestaService.deletePreguntaById( idPreg )
      .subscribe(
        ( success ) => {
          this.message.create('success', `Pregunta eliminada Correctamente`);
        },
        ( err ) => {
          this.message.create('error', `Error al eliminar la pregunta`);
        },
        () => {
          this.getPregunta();
        }
      );
  }

  ngAfterViewInit() {

  }

}
