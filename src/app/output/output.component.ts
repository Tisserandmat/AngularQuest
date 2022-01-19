import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  public onomatopoeias: string[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  onReceiveNewOnomatopia($event: any) {
    this.onomatopoeias.push($event);
    console.log('Parent : onReceiveNewOnomatopia')
  }
}
