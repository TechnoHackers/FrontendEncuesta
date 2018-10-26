import {Component, Input, OnInit} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-circle-progress',
  templateUrl: './circle-progress.component.html',
  styleUrls: ['./circle-progress.component.scss']
})
export class CircleProgressComponent implements OnInit {

  @Input('nombre') factor: string = '';
  @Input('duracion') duracion: number;
  @Input('restar') restar: number;

  cadena: string = '';
  /*
    CIRCLE PROGRESS
   */
  percent1: number = 100;
  outerStroke: string;
  innerStroke: string;
  formatoProgress = ( ) => {
    return this.cadena ? this.cadena : '';
  }
  minutes: number;

  constructor() { }

  ngOnInit() {
    //this.countdown( moment( new Date().getTime() + ( this.duracion * 60 * 60 * 1000 ) ).toString() ); //5 minutos
    this.countdown( moment( new Date().getTime() + ( this.duracion * 60000 ) ).toString() ); //4 minutos
    //this.minutes = Number(('0' + Math.floor(  ( new Date( new Date().getTime() + ( this.duracion * 60 * 60 * 1000 ) ).getTime() - new Date().getTime() + 1000 ) / 1000 / 60 % 60 )).slice(-2));
  }

  getTimes = deadline => {

    let now = new Date().getTime(),
      remainTime = ( new Date( deadline ).getTime() - now + 1000 ) / 1000,
      remainSeconds = ('0' + Math.floor( remainTime % 60 )).slice(-2),
      remainMinutes = ('0' + Math.floor(  remainTime / 60 % 60 )).slice(-2);

    return {
      remainTime,
      remainSeconds,
      remainMinutes
    };
  }

  countdown = ( deadline ) => {

    const timerUpdate = setInterval(() => {
      let t = this.getTimes( deadline );
      this.cadena = t.remainMinutes + ':' + t.remainSeconds;
      this.percent1 = this.percent1 - this.restar;
      if ( this.percent1 < 20 ) {
        this.outerStroke = '#CF3712';
        this.innerStroke = '#CF3712';
      }
      if ( t.remainTime <= 1 ) {
        this.cadena = 'Se acabo Amigo CHAOO!';
        clearInterval( timerUpdate );
      }
    },  1000);
  }

}
