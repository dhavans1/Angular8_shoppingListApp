import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor( private authSvc: AuthService, private router: Router ) { }

  ngOnInit() {
    this.username = '';
    this.password = '';
  }

  onSubmit() {
    if ( this.authSvc.authorize(this.username, this.password) ){
      this.router.navigate(['recipes']);
    } else {
      this.router.navigate(['login']);
    }
  }

}
