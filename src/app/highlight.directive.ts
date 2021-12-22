import {Directive, HostBinding, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @HostBinding('style.color') myColor: string | undefined ;
  @HostBinding('style.fontSize') mySize: string | undefined ;

  constructor() {}

  ngOnInit() {
  }

  @HostListener('mouseenter') mouseEnterEvent(eventData: Event){
    this.myColor = 'red';
    this.mySize = '70px';

  }
  @HostListener('mouseleave') mouseLeaveEvent(eventData: Event){
    this.myColor = 'black';
    this.mySize = '';

  }

}
