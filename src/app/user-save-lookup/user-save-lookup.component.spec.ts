import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSaveLookupComponent } from './user-save-lookup.component';
import { NameMaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { Savedata } from '../test/TestSaveData.MOCK';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Component({ selector: 'app-save-detail', template: '<p>donger</p>' })
class AppSaveDetailComponent {
  @Input() save = Savedata;
}
describe('UserSaveLookupComponent', () => {
  let component: UserSaveLookupComponent;
  let fixture: ComponentFixture<UserSaveLookupComponent>;
  let httpServiceStub;
  let http: HttpClient;
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [UserSaveLookupComponent, AppSaveDetailComponent],
        imports: [NameMaterialModule, FormsModule, ReactiveFormsModule],
        providers: [{ provide: HttpClient, useValue: httpServiceStub }]
      }).compileComponents();
      fixture = TestBed.createComponent(UserSaveLookupComponent);
      component = fixture.componentInstance;
      httpServiceStub = {
        get() {
          return Observable.of(false);
        }
      };
      http = fixture.debugElement.injector.get(HttpClient);
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSaveLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
