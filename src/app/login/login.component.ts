import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { IUser } from '../Data/user.interface';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  name: string;
  password: string;
  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit() {}
  Login() {
    const name = this.name.toLocaleLowerCase();
    this.auth.GetUser({ name: this.name, password: this.password }).subscribe(
      data => {
        this.auth.user = data;
        this.auth.isAuthenticated = true;
        console.log('fucking glem det tobz');
        console.log({
          name: 'Fucking Tobi',
          favoriteAssPaper: 'Sandpaper'
        });
        this.router.navigate(['userhome']);
      },
      err => {
        alert('incorrect password or username');
      }
    );
  }
  Logout() {
    this.auth.isAuthenticated = false;
    this.auth.user = null;
  }
}
