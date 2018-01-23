import { LoginComponent } from './login.component';
import { AuthService } from '../auth.service';
import { DebugElement, Component, Input } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('Login components unit tests', () => {
  let uut: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let routerMock;
  let de: DebugElement;
  let el: HTMLElement;
  let authServiceStub;
  let auth: AuthService;
  let router: Router;
  beforeEach(() => {
    authServiceStub = {
      isAuthenticated: false,
      user: { name: 'Simon', totalGold: 200 },
      AddGold() {
        return Observable.of(false);
      }
    };
    routerMock = {
      navigate() {}
    };

    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [LoginComponent],
      providers: [
        { provide: AuthService, useValue: authServiceStub },
        { provide: Router, useValue: routerMock }
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(LoginComponent);
    uut = fixture.componentInstance;
    auth = fixture.debugElement.injector.get(AuthService);
    router = fixture.debugElement.injector.get(Router);
    uut.ngOnInit();
  });
  describe('LoginValidation', () => {
    it('isAuthenticted is false by default', () => {
      expect(uut.auth.isAuthenticated).toBeFalsy();
    });
  });
  describe('Different view if logged in or out', () => {
    it('When logged out, username input field should be shown', () => {
      fixture.detectChanges();
      de = fixture.debugElement.query(By.css('#username'));
      expect(de).toBeDefined();
    });
    it('When logged in, username input field should be hidden', () => {
      uut.auth.isAuthenticated = true;
      fixture.detectChanges();
      de = fixture.debugElement.query(By.css('#username'));
      expect(de).toBeNull();
    });
    it('When logged in, username of logged in user should be shown', () => {
      uut.auth.isAuthenticated = true;
      fixture.detectChanges();
      de = fixture.debugElement.query(By.css('h1'));
      el = de.nativeElement;
      expect(el.textContent).toContain('Simon');
    });
  });
});
