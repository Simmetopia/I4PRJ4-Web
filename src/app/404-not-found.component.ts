import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-404-not-found',
  template: `<h1 class="display-1"> Oops, this page is not found </h1>`,
  styles: [``]
})
export class NotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
