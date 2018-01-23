import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Component, Input } from '@angular/core';
import { UserHomeComponent } from './user-home.component';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { AuctionHouceComponent } from '../auction-house/auction-houce.component';
import { AppRoutingModule } from '../app-routing.module';
import { AuctionHouselistComponent } from '../auction-house/auction-house-list.component';
import { AuctionService } from '../auction.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { IUser } from '../Data/user.interface';
import { MockUser } from '../auth.service.spec';
import { IItem } from '../Data/items-interface';
import { Savedata } from '../test/TestSaveData.MOCK';

@Component({ selector: 'app-auction-houce', template: '<p>donger</p>' })
class MockAuctionHouceComponent {
  @Input() item;
}
@Component({ selector: 'app-item-view', template: '<p>donger</p>' })
class ItemViewComponent {
  @Input() item;
}
@Component({ selector: 'app-small-savegame-view', template: '<p>donger</p>' })
class SmallSaveGameViewComponent {
  @Input() save = Savedata;
}

describe('UserHomeComponent ', () => {
  let comp: UserHomeComponent;
  let fixture: ComponentFixture<UserHomeComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let authServiceStub;
  let auction: AuctionService;
  let auth: AuthService;
  let auctionService;

  beforeEach(() => {
    auctionService = {
      GetAuctions(): Observable<IItem[]> {
        return Observable.create(observer => {
          observer.next(MOCKDATA);
        });
      },
      PostAuction() {},
      deleteAuction() {
        return Observable.of(false);
      }
    };
    authServiceStub = {
      isAuthenticated: true,
      user: { name: 'Simon', totalGold: 200 },
      AddGold() {
        return Observable.of(false);
      }
    };

    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        UserHomeComponent,
        MockAuctionHouceComponent,
        ItemViewComponent,
        SmallSaveGameViewComponent
      ], // declare the test component
      providers: [
        { provide: AuthService, useValue: authServiceStub },
        { provide: AuctionService, useValue: auctionService }
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(UserHomeComponent);
    comp = fixture.componentInstance; // UserHomeComponent test instance
    auth = fixture.debugElement.injector.get(AuthService);
    auction = fixture.debugElement.injector.get(AuctionService);
    comp.ngOnInit();
  });

  it('should show name in title', () => {
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
    fixture.detectChanges();
    const content = el.textContent;
    expect(content).toContain('Simon');
  });

  it('Should show correct amount of money', () => {
    de = fixture.debugElement.query(By.css('strong'));
    el = de.nativeElement;
    fixture.detectChanges();
    const content = el.textContent;
    expect(content).toContain('200');
  });

  it('It should recognixe data is owned by player', () => {
    expect(comp.myAuctions.length).toBe(3);
  });

  it('deletes item from list when claim is pressed', () => {
    comp.Claim(0);
    expect(comp.myAuctions.length).toBe(2);
  });

  it('deletes item from list when claim is pressed, and is correct item', () => {
    comp.Claim(1);
    expect(comp.myAuctions.find(i => i.item.Id === 2)).toBeFalsy();
  });
});

export const MOCKDATA: IItem[] = [
  {
    _id: '5a36cff3b904400004a36a11',
    isSold: 1,
    cost: 220,
    item: {
      Id: 1,
      Name: 'Blooddrinker',
      StrengthReq: 8,
      IntelligenceReq: 1,
      LevelReq: 2,
      Value: 220
    },
    user: {
      name: 'Simon',
      totalLevel: 1
    }
  },
  {
    _id: '5a36cff3b904400004a36a11',
    isSold: 1,
    cost: 220,
    item: {
      Id: 2,
      Name: 'Blooddrinker',
      StrengthReq: 8,
      IntelligenceReq: 1,
      LevelReq: 2,
      Value: 220
    },
    user: {
      name: 'Simon',
      totalLevel: 1
    }
  },
  {
    _id: '5a36cff3b904400004a36a11',
    isSold: 1,
    cost: 220,
    item: {
      Id: 3,
      Name: 'Blooddrinker',
      StrengthReq: 8,
      IntelligenceReq: 1,
      LevelReq: 2,
      Value: 220
    },
    user: {
      name: 'Simon',
      totalLevel: 1
    }
  }
];
