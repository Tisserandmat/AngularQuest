import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, Validators, AbstractControl, FormGroup} from '@angular/forms';
import {isRequiredValidator} from "./validator/requiredValidator";
import {rangeDateValidator} from "./validator/rangeDateValidator";

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})

export class SearchMovieComponent implements OnInit {

  searchForm = new FormGroup({});


  ngOnInit(): void {

    this.searchForm = this.fb.group({
      identify: (['']),
      title: (['']),
      year: ['', [Validators.required, rangeDateValidator(1900, new Date())]],
      type: [1],
      plug: [''],
    },{
      validators: isRequiredValidator('identify', 'title'),

    });
  }

  constructor(private fb : FormBuilder) {
  }

  onSubmit() {
    console.log(JSON.stringify(this.searchForm.value))
  }
}
