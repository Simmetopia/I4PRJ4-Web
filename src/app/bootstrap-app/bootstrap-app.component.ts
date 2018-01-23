import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>`
})
export class BootstrapAppComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
