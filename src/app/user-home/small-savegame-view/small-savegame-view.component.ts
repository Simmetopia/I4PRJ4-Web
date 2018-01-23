import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ISave, Item } from '../../Data/user.interface';

@Component({
  selector: 'app-small-savegame-view',
  templateUrl: './small-savegame-view.component.html',
  styleUrls: ['./small-savegame-view.component.css']
})
export class SmallSavegameViewComponent implements OnInit {
  @Input() save: ISave;
  @Output() SellFromSaveGameComponent = new EventEmitter<any>();
  constructor() {}

  SetItemOnAuctionOne(ItemNr: number, Price: number) {
    this.SellFromSaveGameComponent.emit({ ItemNr: ItemNr, price: Price });
  }

  ngOnInit() {}
}
