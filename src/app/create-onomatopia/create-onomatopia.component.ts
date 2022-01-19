import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.css']
})
export class CreateOnomatopiaComponent implements OnInit {

  newOnomatopia: string = "";
  submit: boolean = false;

  @Output()
  public sendOnomatopiaToParent: EventEmitter<any> = new EventEmitter;

  constructor() {
  }

  ngOnInit(): void {

  }

  createOnomatopia(): void {
    console.log('Child : createOnomatopia ')
    this.sendOnomatopiaToParent?.emit(this.newOnomatopia);
  }

  onSubmit() {
    // form submitted
    this.submit = true;
    console.log('Chlid : onSubmit' + this.newOnomatopia);
  }


}
