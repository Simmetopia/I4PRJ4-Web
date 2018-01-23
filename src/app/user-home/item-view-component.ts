import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../Data/user.interface';

@Component({
  selector: 'app-item-view',
  template: `
      {{ item?.Name }}. Vendor price: {{ item?.Value }}
      <input class="form-control-sm" [(ngModel)]="amount" type="number" placeholder="Sell For Price">
      <button class="btn" (click)="SellItem()">sell</button>
    `
})
export class ItemViewComponent implements OnInit {
  @Input() item: Item;
  amount: number;
  @Output() SellItems = new EventEmitter<number>();
  SellItem() {
    if (this.amount <= 0) {
      alert('plz tobz');
    } else {
      this.SellItems.emit(this.amount);
    }
  }
  constructor() {}

  ngOnInit() {}
}
