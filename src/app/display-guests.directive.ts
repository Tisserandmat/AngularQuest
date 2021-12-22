import {Directive, HostBinding, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appDisplayGuests]'
})
export class DisplayGuestsDirective {

  @HostBinding('style.color') myBackgroundColor: string | undefined ;

  constructor(private tplRef:TemplateRef<any>, private vwRef:ViewContainerRef) { }

  @Input() set appDisplayGuests(condition: Boolean) {
    if(condition){
      this.vwRef.createEmbeddedView(this.tplRef)
    } else {
      this.vwRef.clear();
    }
  }

}
