import { Directive, Renderer,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class YelloHightLightDirective {

  constructor(renderer: Renderer, e1: ElementRef) {
renderer.setElementStyle(e1.nativeElement, 'backgroundColor', 'yellow');


  }

}
