import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { IUser, Item } from '../Data/user.interface';
import { IItem } from '../Data/items-interface';
import { HttpClient } from '@angular/common/http';
import { AuctionService } from '../auction.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  myAuctions: IItem[];
  constructor(public auth: AuthService, public auction: AuctionService) {}
  ngOnInit() {
    this.auction.GetAuctions().subscribe(data => {
      this.myAuctions = data.filter(i => i.user.name === this.auth.user.name);
    });
    // console.log(this.auth.user.UserItems);
  }
  SetItemOnAuction(Save: number, changes) {
    const a = changes['ItemNr'];
    const b = changes['price'];
    const item = this.auth.user.saves[Save].PlayerItems[changes['ItemNr']];
    this.auction.PostAuction(this.AuctionWrapper(item, changes['price']));
    this.auth.RemoveAndUpdatePlayerItems(Save, changes['ItemNr']);
  }
  SetItemOnAuctionGlobal(ItemNr: number, amount: number) {
    if (amount <= 0) {
      alert('fuckingtobyshit');
    } else {
      const item = this.auth.user.UserItems[ItemNr];
      this.auction.PostAuction(this.AuctionWrapper(item, amount));
      this.auth.RemoveAndUpdateGlobalItems(ItemNr);
    }
  }
  AuctionWrapper(item: Item, amount: number): IItem {
    return {
      _id: null,
      cost: amount,
      isSold: 0,
      item: item,
      user: {
        name: this.auth.user.name,
        totalLevel: this.auth.user.totalLevel
      }
    };
  }

  Claim(a: number) {
    this.auth.AddGold(+this.myAuctions[a].cost);
    this.auction.deleteAuction(this.myAuctions[a]._id).subscribe(() => {});
    this.myAuctions.splice(a, 1);
  }
}
