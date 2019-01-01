import { Component, Injectable } from '@angular/core';

import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { Router } from '@angular/router';
import { LocalDataService } from './localStorage.service';

@Injectable({
    providedIn: 'root'
})
export class SessionTimeout {
    idleState = 'Not started.';
    timedOut = false;
    lastPing?: Date = null;
    timeout = 5000;
    constructor(private _router: Router, private localDataService: LocalDataService) {
        console.warn("this is from sessiontimeout");
    }
    sessiontimeout(idle: Idle, keepalive: Keepalive) {
        idle.setIdle(5);
        idle.setTimeout(5);
        idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);
        idle.onIdleEnd.subscribe(() => { this.idleState = 'No longer idle.'; });
        idle.onTimeout.subscribe(() => {
            this.localDataService.idleStage = !this.localDataService.idleStage;
            this.localDataService.sessionTimedout = true;
            this.localDataService.mean_token = "";
            this._router.navigate(['/login']);
            this.idleState = 'Timed out!';
            this.timedOut = true;
        });
        idle.onIdleStart.subscribe(() => {
            this.idleState = 'You\'ve gone idle!';
        });
        idle.onTimeoutWarning.subscribe((countdown) => {
            this.idleState = 'You will time out in ' + countdown + ' seconds!'; this.localDataService.sessionTimeCount = countdown;
            if (countdown == 5) {
                this.localDataService.idleStage = !this.localDataService.idleStage;
            } else {
                this.localDataService.idleStage = !this.localDataService.idleStage;
            }
        });
        // sets the ping interval to 15 seconds
        keepalive.interval(15);
        keepalive.onPing.subscribe(() => { this.lastPing = new Date(); });
        this.reset(idle);
    }
    reset(idle) {
        idle.watch();
        this.idleState = 'Started.';
        this.timedOut = false;
    }
}