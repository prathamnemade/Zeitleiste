import { Component, Injectable } from '@angular/core';

import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class SessionTimeout {
    idleState = 'Not started.';
    timedOut = false;
    lastPing?: Date = null;
    constructor(private _router: Router) {
        console.warn("this is from sessiontimeout");
    }
    sessiontimeout(idle: Idle, keepalive: Keepalive) {
        idle.setIdle(5);
        idle.setTimeout(5);
        idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);
        idle.onIdleEnd.subscribe(() => this.idleState = 'No longer idle.');
        idle.onTimeout.subscribe(() => {
            console.log("timeouttrigjkd=======================================")
            this._router.navigate(['/login']);
            this.idleState = 'Timed out!';
            this.timedOut = true;
        });
        idle.onIdleStart.subscribe(() => this.idleState = 'You\'ve gone idle!');
        idle.onTimeoutWarning.subscribe((countdown) => this.idleState = 'You will time out in ' + countdown + ' seconds!');
        // sets the ping interval to 15 seconds
        keepalive.interval(15);
        keepalive.onPing.subscribe(() => this.lastPing = new Date());
        this.reset(idle);
    }
    reset(idle) {
        idle.watch();
        this.idleState = 'Started.';
        this.timedOut = false;
    }
}