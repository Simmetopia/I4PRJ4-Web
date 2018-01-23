import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IEvent } from './data';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  encapsulation: ViewEncapsulation.None
})
export class FormComponent implements OnInit {
  events: IEvent[];
  eventForm: FormGroup;
  formName: FormControl;
  time: FormControl;
  cost: FormControl;
  sessions: FormControl;

  constructor(private route: Router) {}

  ngOnInit() {
    this.formName = new FormControl('');
    this.time = new FormControl('');
    this.cost = new FormControl('');
    this.sessions = new FormControl('');

    this.eventForm = new FormGroup({
      formName: this.formName,
      time: this.time,
      cost: this.cost,
      sessions: this.sessions
    });
  }

  saveEvent(formValues) {
    const event: IEvent = {
      title: formValues.formName,
      cost: formValues.cost,
      time: formValues.time,
      sessions: {
        name: formValues.sessions,
        time: formValues.time
      }
    };
    this.events.push(event);
    // console.log(event);
  }

  goBack() {
    // noinspection JSIgnoredPromiseFromCall
    this.route.navigate(['/']);
  }
}
