import { Component, OnInit } from '@angular/core';
import { User } from "./user";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }

model: User = new User()

  ngOnInit(): void {


  }
  submitted = false;

  onSubmit() {
    // form submitted
    console.log(this.model);
    this.submitted = true;
  }

}
