import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html'
})
export class PipesComponent implements OnInit {
  price = 22;
  time = 6;

  constructor() {
  }

  ngOnInit() {
  }

}
