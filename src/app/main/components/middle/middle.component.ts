import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class MiddleComponent implements OnInit {
  gender: boolean;
  birthday: Date;
  constructor() { }

  ngOnInit() {
  }

}
