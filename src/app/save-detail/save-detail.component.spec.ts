import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveDetailComponent } from './save-detail.component';
import { Component, Input } from '@angular/core';
import { Savedata } from '../test/TestSaveData.MOCK';
@Component({ selector: 'app-character-detail', template: '<p>donger</p>' })
class ItemViewComponent {
  @Input() char;
}
describe('SaveDetailComponent', () => {
  let component: SaveDetailComponent;
  let fixture: ComponentFixture<SaveDetailComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [SaveDetailComponent, ItemViewComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveDetailComponent);
    component = fixture.componentInstance;
    component.save = Savedata;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
