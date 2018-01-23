import { Component, OnInit } from '@angular/core';
import { AuctionService } from '../auction.service';
import { IItem } from '../Data/items-interface';

@Component({
  selector: 'app-all-auctions-list',
  template: `
  <app-auction-houce *ngFor="let item of auction" [item]="item" > </app-auction-houce>`
})
export class AllAuctionsListComponent implements OnInit {
  constructor(private ah: AuctionService) {}
  auction: IItem[];
  ngOnInit() {
    this.ah.GetAuctions().subscribe(data => {
      this.auction = data;
    });
  }
}
