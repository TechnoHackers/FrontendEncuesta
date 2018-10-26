import {Component, OnInit, ViewChild} from '@angular/core';
import {CountdownComponent} from 'ngx-countdown';
import * as moment from 'moment';
import {EncuestaService} from '../../service/service.index';

@Component({
  selector: 'app-test-one',
  templateUrl: './test-one.component.html',
  styleUrls: ['./test-one.component.scss']
})
export class TestOneComponent implements OnInit {

  cadena: string;
  data: any[] = [];
  percent: number = 100;
  status: string = 'active';
  contador: number = 0;
  bandera: boolean = true;

  tabs = [];
  nzTabPosition = 'left';
  selectedIndex = 0;

  radioValue: any[] = [];

  /* tslint:disable-next-line:no-any */
  log(args: any[]): void {
    console.log(args);
  }


  constructor(
    public encuestaService: EncuestaService
  ) {}

  ngOnInit() {
    this.getEncuestas();

    for (let i = 0; i < 5; i++) {
      this.tabs.push({
        name   : `Factor V`,
        content: `Content of tab ${i + 1}`
      });
    }

  }

  guardarRadios( radioValue ) {
    console.log( radioValue );
  }

  getEncuestas() {
    this.encuestaService.getEncuestas()
      .subscribe( ( res: any ) => this.data = res );
  }

}
