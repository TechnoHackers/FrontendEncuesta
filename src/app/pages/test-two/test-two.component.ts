import { Component, OnInit } from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd';
import {HttpClient} from '@angular/common/http';

const count = 5;
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';


@Component({
  selector: 'app-test-two',
  templateUrl: './test-two.component.html',
  styleUrls: ['./test-two.component.scss']
})
export class TestTwoComponent implements OnInit {
  radioValue: any[] = [];
  listadoPreguntas: any[] = [{
    preguntas: 1,
    imagen: false
  }];

  initLoading = true; // bug
  loadingMore = false;
  data = [
    { id: 1, pregunta: 'Estoy orgulloso(a) de tener un amplio vocabulario'},
    { id: 2, pregunta: 'Me resulta fácil manejar diversos símbolos númericos'},
    { id: 3, pregunta: 'La música es un componente altamente significativo de mi existencia'},
    { id: 4, pregunta: 'Siempre sé exactamente donde estoy ubicado en relación a mí casa'},
    { id: 5, pregunta: 'Me considero un atleta'},
    { id: 6, pregunta: 'Siento que le agrado y caigo bien a las personas de todas las edades'},
    { id: 7, pregunta: 'A menudo busco en mis debilidades que yo observo en los demás'},
  ];
  list = [];

  constructor( private http: HttpClient, private msg: NzMessageService ) { }



  ngOnInit() {
    //this.llenarListado();
    /*this.getData((res: any) => {
      this.data = res.results;
      this.list = res.results;
      this.initLoading = false;
    });*/
    this.initLoading = false;
    this.list = this.data;
  }

/*  getData(callback: (res: any) => void): void {
    this.http.get(fakeDataUrl).subscribe((res: any) => callback(res));
  }*/

  onLoadMore(): void {
    /*this.loadingMore = true;
    this.list = this.data.concat([...Array(count)].fill({}).map(() => ({ loading: true, name: {} })));
    this.http.get(fakeDataUrl).subscribe((res: any) => {
      this.data = this.data.concat(res.results);
      this.list = [...this.data];
      this.loadingMore = false;
    });*/
  }

  edit(item: any): void {
    this.msg.success(item.email);
  }

  llenarListado() {
    for ( let i = 1; i < 11; i++ ) {
      this.listadoPreguntas.push({ preguntas: i + 1, imagen: i !== 4  ? false : true });
    }
  }

}
