import { Component, OnInit, Input } from '@angular/core';
import { ISave } from '../Data/user.interface';

@Component({
  selector: 'app-save-detail',
  template: `<h2>Party Level: {{save?.PartyLevel}}. {{save?.PartyExperince}}</h2>
  <div class="row">

  <div class="col-4" *ngFor="let char of save.Players">

  <app-character-detail  [char]="char" ></app-character-detail>
  </div>
</div>`
})
export class SaveDetailComponent implements OnInit {
  @Input() save: ISave;
  constructor() {}

  ngOnInit() {}
}
