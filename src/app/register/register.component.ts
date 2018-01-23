import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../Data/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  RegisterForm: FormGroup;
  name: FormControl;
  email: FormControl;
  password: FormControl;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern('[^ @]*@[^ @]*')
    ]);
    this.name = new FormControl('', Validators.required);
    this.password = new FormControl('', [
      Validators.minLength(8),
      Validators.required
    ]);
    this.RegisterForm = new FormGroup({
      email: this.email,
      name: this.name,
      password: this.password
    });
  }
  registerUser(formValues) {
    const name = (formValues.name as string).toLocaleLowerCase();
    const user = {
      _id: name,
      email: formValues.email,
      name: formValues.name,
      password: formValues.password,
      totalGold: 500,
      totalLevel: 1
    };

    this.http.post('/api/users', user).subscribe(data => {
      this.router.navigate(['login']);
    });
  }
}
