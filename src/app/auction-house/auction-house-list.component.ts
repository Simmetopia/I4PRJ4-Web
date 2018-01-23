import { Component, OnInit } from '@angular/core';
import { AuctionService } from '../auction.service';
import { IItem } from '../Data/items-interface';

@Component({
  selector: 'app-auction-house-list',
  templateUrl: './auction-house-list.component.html'
})
export class AuctionHouselistComponent implements OnInit {
  constructor(private auction: AuctionService) {}
  auctions: IItem[];
  ngOnInit() {
    this.auction.GetAuctions().subscribe(data => {
      this.auctions = data.filter(i => i.isSold !== 1);
    });
  }
}
