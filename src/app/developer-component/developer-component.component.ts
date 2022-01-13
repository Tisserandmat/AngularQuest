import { Component, OnInit } from '@angular/core';
import {Developer} from "../common/developer";
import {Skill} from "../common/skill";

@Component({
  selector: 'app-developer-component',
  templateUrl: './developer-component.component.html',
  styleUrls: ['./developer-component.component.css']
})
export class DeveloperComponentComponent implements OnInit {

  public devEnCarton : Developer | undefined;

  constructor() { }

  ngOnInit(): void {

    this.devEnCarton = new Developer('Zizou', 'Zidane', 13, 'Male',
      'Un genie incompris', [
        new Skill('Incroyablement fort',
          'https://img.search.brave.com/B1SMn1RHYzSKXwOFRzrrhY4kCEwIfj5tcBMVP9qC6B4/fit/492/225/ce/1/' +
          'aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5W/cEhHZkdwaHJ6WDNH/Qk5aeDBnTHFRSGFI/SSZwaWQ9QXBp',
          'https://onepiece-streaming.co/'),
        new Skill('incroyablement beau', 'https://img.search.brave' +
          '.com/chooCu0w-qtqfW7ifu5UEuEWIKQ07fIDeUe6j-3Hdl4/fit/419/225/ce/1/aHR0cHM6Ly90c2Uz/' +
          'Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5J/VmhRWGR1dGZ1U2xn/a3E0ZGNrU1hRSGFJ/WCZwaWQ9QXBp',
          'https://en.wikipedia.org/wiki/Goku')
      ])
  }
}
