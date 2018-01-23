import { Injectable } from '@angular/core';
import { IUser, Item } from './Data/user.interface';
import { HttpClient } from '@angular/common/http';
import { IItem } from './Data/items-interface';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  user: IUser;
  isAuthenticated = false;
  constructor(private http: HttpClient) {}
  AddItem(cost: number, item: Item) {
    this.user.totalGold -= cost;
    this.user.UserItems.push(item);
    this.UpdateUser().subscribe(() => {
      // console.log('user add item update');
    });
  }
  private UpdateUser(): Observable<IUser> {
    if (this.user.UserItems === undefined) {
      this.user.UserItems = new Array();
    }
    return this.http.put<IUser>(
      'http://kingsofdanger.herokuapp.com/api/users/' + this.user._id,
      this.user
    );
  }
  AddGold(price: number) {
    this.user.totalGold += price;
    this.UpdateUser().subscribe(() => {
      // console.log('user updated gold update');
    });
  }

  RemoveAndUpdatePlayerItems(Save: number, ItemNr: number) {
    this.user.saves[Save].PlayerItems.splice(ItemNr, 1);
    this.UpdateUser().subscribe(() => {
      // console.log('Specific save PlayerItem deleted');
    });
  }

  RemoveAndUpdateGlobalItems(ItemNr: number) {
    this.user.UserItems.splice(ItemNr, 1);
    this.UpdateUser().subscribe(() => {
      // console.log('Global item item deleted');
    });
  }

  GetUser(login): Observable<IUser> {
    return this.http.post<IUser>(
      'http://kingsofdanger.herokuapp.com/api/users/securelogin',
      login
    );
  }
}
