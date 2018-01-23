import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallSavegameViewComponent } from './small-savegame-view.component';
import { Component, Input } from '@angular/core';
import { MOCKDATA } from '../user-home.component.spec';
import { Savedata } from '../../test/TestSaveData.MOCK';
@Component({ selector: 'app-item-view', template: '<p>donger</p>' })
class ItemViewComponent {
  @Input() item;
}

describe('SmallSavegameViewComponent', () => {
  let component: SmallSavegameViewComponent;
  let fixture: ComponentFixture<SmallSavegameViewComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [SmallSavegameViewComponent, ItemViewComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallSavegameViewComponent);
    component = fixture.componentInstance;
    component.save = Savedata;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
