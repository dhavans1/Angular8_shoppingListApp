import { OnInit } from '@angular/core';

export class AuthService implements OnInit {
    isAuthorized: boolean = false;

    constructor() {}

    ngOnInit() {
    }

    authorize(uname: string, pwd: string) {
        if ( uname === 'd' && pwd === 'd') {
            this.isAuthorized = true;
            return this.isAuthorized;
        } else {
            this.isAuthorized = false;
            return this.isAuthorized;
        }
    }
}
