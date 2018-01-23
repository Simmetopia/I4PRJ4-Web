import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuctionService } from '../auction.service';
import { IItem } from '../Data/items-interface';
import { AuthService } from '../auth.service';
import { IUser } from '../Data/user.interface';

@Component({
  selector: 'app-auction-detail',
  templateUrl: './auction-detail.component.html',
  styleUrls: ['./auction-detail.component.css']
})
export class AuctionDetailComponent implements OnInit {
  auction: IItem;
  constructor(
    private route: ActivatedRoute,
    private auctionService: AuctionService,
    private location: Location,
    public auth: AuthService,
    private router: Router
  ) {}
  getAuction(): any {
    const id = this.route.snapshot.paramMap.get('id');
    this.auctionService.GetAuctions().subscribe(data => {
      this.auction = data.find(i => i._id === id);
    });
  }

  ngOnInit() {
    this.getAuction();
  }
  BuyItem() {
    this.auctionService.BuyItem(this.auction).subscribe(() => {
      this.auth.AddItem(this.auction.cost, this.auction.item);
      this.router.navigate(['ah']);
    });
  }
  compare() {
    if (this.auction.cost > this.auth.user.totalGold) {
      return false;
    } else {
      return true;
    }
  }
  isSold() {
    if (this.auction.isSold === 1) {
      return 'line-through';
    }
  }
}
