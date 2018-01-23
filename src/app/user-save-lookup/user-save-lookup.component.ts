import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser, ISave } from '../Data/user.interface';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-user-save-lookup',
  templateUrl: './user-save-lookup.component.html',
  styleUrls: ['./user-save-lookup.component.css']
})
export class UserSaveLookupComponent implements OnInit {
  user: ISave;
  username: string;
  searchUser: FormGroup;
  constructor(private http: HttpClient, private fb: FormBuilder) {}
  OnSubmit(form: FormGroup) {
    this.user = undefined;
    this.username = form.get('name').value;
    const a = this.username.toLocaleLowerCase();
    this.http
      .get<ISave>('http://kingsofdanger.herokuapp.com/api/users/showuser/' + a)
      .subscribe(
        data => {
          this.user = data;
          this.user.PlayerItems.slice(1, 6);
        },
        err => {
          alert('user not found');
        }
      );
  }
  ngOnInit() {
    this.searchUser = this.fb.group({
      name: 'simon'
    });
  }
}
