import { AuctionService } from './auction.service';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { IUser } from './Data/user.interface';
import { Mock } from 'protractor/built/driverProviders';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('AuctionService', () => {
  let auth: AuthService;
  let http;
  function fakeGetHttp(): IUser {
    return MockUser;
  }
  beforeEach(() => {
    http = jasmine.createSpyObj('http', ['get', 'put', 'post']);
    auth = new AuthService(http);
    http.put.and.returnValue(Observable.of(false));
    auth.user = MockUser;
  });

  it('gets the correct user', () => {
    http.post.and.callFake(fakeGetHttp);
    const i = auth.GetUser('simon');
    expect(i['_id']).toBe('simon');
  });

  it('additem adds money correctly', () => {
    auth.AddGold(250);
    expect(auth.user.totalGold).toBe(750);
  });

  it('Remove global item', () => {
    auth.RemoveAndUpdateGlobalItems(0);
    expect(auth.user.UserItems.length).toBe(0);
  });
  it('remove item from save', () => {
    auth.RemoveAndUpdatePlayerItems(0, 0);
    expect(auth.user.saves[0].PlayerItems.length).toBe(0);
  });
});

export const MockUser: IUser = {
  _id: 'simon',
  name: 'Simon',
  email: 'mikbitsch@live.dk',
  password: 'simon',
  totalLevel: 1,
  totalGold: 500,
  UserItems: [
    {
      Id: 82,
      Name: 'Blooddrinker',
      StrengthReq: 8,
      IntelligenceReq: 1,
      LevelReq: 2,
      Value: 220
    }
  ],
  saves: [
    {
      SaveId: '1',
      Players: [
        {
          SaveId: '2',
          Health: 0,
          BaseHealth: 4412,
          Agility: 0,
          Intelligence: 1,
          Strength: 0.2,
          Class: 'Warrior',
          Name: 'Pope'
        }
      ],
      PlayerItems: [
        {
          Id: 82,
          Name: 'Blooddrinker',
          StrengthReq: 8,
          IntelligenceReq: 1,
          LevelReq: 2,
          Value: 220
        }
      ]
    }
  ]
};
