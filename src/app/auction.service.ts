import { Injectable } from '@angular/core'
import { IItem } from './Data/items-interface'
import { HttpClient } from '@angular/common/http'
import { AuthService } from './auth.service'
import { Item, IUser } from './Data/user.interface'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class AuctionService {
  constructor(private http: HttpClient) {}

  BuyItem(item: IItem): Observable<IUser> {
    return this.http.put<IUser>('api/items/' + item._id, {
      isSold: '1'
    })
  }

  PostAuction(auction: IItem) {
    this.http.post('api/items', auction).subscribe(() => {})
  }
  GetAuctions(): Observable<IItem[]> {
    return this.http.get<IItem[]>('api/items')
  }
  deleteAuction(id) {
    return this.http.delete('api/items/' + id)
  }
}
