import { Component, OnInit } from '@angular/core';
import { LocalDataService } from '../common/localStorage.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public localDataService:LocalDataService) { }

  ngOnInit() {
  }

}
