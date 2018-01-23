import { Component, Input, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuctionService } from '../auction.service';
import { IItem } from '../Data/items-interface';

@Component({
  selector: 'app-auction-houce',
  template: ` <a routerLink="/auction/{{item._id}}" [ngClass]="{'disabledAuction':item.isSold === 1}"
   class="list-group-item list-group-item-action flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">{{item?.item.Name}}</h5>
                  <div style="margin-left: 2em;" *ngIf="item?.isSold === 1" > <strong> SOLD </strong> </div>
                  <small>price: {{ item?.cost }}</small>
                </div>
                <p class="mb-1">From user:{{ item?.user.name }}, user level: {{ item?.user.totalLevel }} </p>
              </a>`,
  styleUrls: ['./auction-houce.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AuctionHouceComponent {
  constructor() {}
  @Input() item: IItem;
}
