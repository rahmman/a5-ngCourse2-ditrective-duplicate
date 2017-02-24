import { Directive, Renderer,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class BlueHighLightDirective {

  constructor(render: Renderer, e1:ElementRef) {
render.setElementStyle(e1.nativeElement, 'backgroundColor', 'blue');
render.setElementStyle(e1.nativeElement,'color','grey')
   }

}
