import { Component, OnInit } from '@angular/core';
import { SessionTimeout } from 'src/app/common/sessionTimeout';
import { Idle } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private sessionTimeout: SessionTimeout, private idle: Idle, private keepalive: Keepalive) {
    console.warn("construct");
    this.sessionTimeout.sessiontimeout(idle, keepalive)

  }

  ngOnInit() {
  }

}
