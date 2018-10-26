import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appTablePreguntas]'
})
export class TablePreguntasDirective implements OnInit{

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit() {
    console.log( 'en direcitva' )
    this.el.nativeElement.style.backgroundColor = '#28b485';
    this.el.nativeElement.style.color = '#fff';
  }

}
