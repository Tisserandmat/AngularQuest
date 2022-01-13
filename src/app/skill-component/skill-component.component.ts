import {Component, Input, OnInit} from '@angular/core';
import {Skill} from "../common/skill";

@Component({
  selector: 'app-skill-component',
  templateUrl: './skill-component.component.html',
  styleUrls: ['./skill-component.component.css']
})
export class SkillComponentComponent implements OnInit {

  @Input()
   public skills : Skill | undefined;

  constructor() { }

  ngOnInit(): void {

  }

}
