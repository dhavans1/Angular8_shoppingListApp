import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGaurdService implements CanActivate {

    constructor( private authSvc: AuthService ) {}

    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        if ( this.authSvc.isAuthorized ){
            return true;
        } else {
            return false;
        }
    }
}
