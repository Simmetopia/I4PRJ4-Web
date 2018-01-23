import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../Data/user.interface';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  @Input() char: Player;
  percentHealth: number;
  constructor() {}
  getPercentValue(): number {
    const a = this.char.Health / this.char.BaseHealth;
    return a * 100;
  }
  ngOnInit() {
    this.percentHealth = this.getPercentValue();
    console.log(this.char.Name + ' Has ' + this.percentHealth);
  }
}
