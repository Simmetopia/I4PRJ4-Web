import { browser, by, element } from 'protractor';
import { HttpClient, HttpRequest } from 'selenium-webdriver/http';

export class AppPage {
  request = require('superagent');
  navigateTo() {
    return browser.get('/');
  }
  initalDonger() {
    this.request
      .put('http://kingsofdanger.herokuapp.com/users/simon')
      .send(donger)
      .end();
  }

  getParagraphText() {
    return element(by.css('app-root h2')).getText();
  }
}
const donger = {
  _id: 'simon',
  name: 'TestUnit',
  email: 'mikbitsch@live.dk',
  password: 'simon',
  totalLevel: 131,
  totalGold: 2759,
  __v: 0,
  UserItems: [],
  saves: [
    {
      SaveId: 'save3',
      _id: '5a3ba715f8a2d300046b22e2',
      PlayerItems: [
        {
          Value: 0,
          LevelReq: 0,
          IntelligenceReq: 0,
          StrengthReq: 0,
          Name: 'Dusk Gnarl Dagger',
          Id: 4,
          _id: '5a3ba715f8a2d300046b22e9'
        },
        {
          Value: 0,
          LevelReq: 0,
          IntelligenceReq: 0,
          StrengthReq: 0,
          Name: 'Thirsty Spear Of the Titan',
          Id: 3,
          _id: '5a3ba715f8a2d300046b22e8'
        },
        {
          Value: 0,
          LevelReq: 0,
          IntelligenceReq: 0,
          StrengthReq: 0,
          Name: 'Ghoul Impaler Mail armor',
          Id: 8,
          _id: '5a3ba715f8a2d300046b22e7'
        },
        {
          Value: 0,
          LevelReq: 0,
          IntelligenceReq: 0,
          StrengthReq: 0,
          Name: 'Cloth armor',
          Id: 6,
          _id: '5a3ba715f8a2d300046b22e6'
        }
      ],
      Players: [
        {
          Name: '1',
          Class: 'Negromancer',
          Strength: 5,
          Intelligence: 18,
          Agility: 4,
          BaseHealth: 125,
          Health: 25,
          _id: '5a3ba715f8a2d300046b22e5'
        },
        {
          Name: '2',
          Class: 'Priest',
          Strength: 4,
          Intelligence: 18,
          Agility: 4,
          BaseHealth: 50,
          Health: 26,
          _id: '5a3ba715f8a2d300046b22e4'
        },
        {
          Name: '2',
          Class: 'Priest',
          Strength: 4,
          Intelligence: 18,
          Agility: 4,
          BaseHealth: 50,
          Health: 26,
          _id: '5a3ba715f8a2d300046b22e3'
        }
      ]
    },
    {
      SaveId: 'save1',
      _id: '5a3ba715f8a2d300046b22dd',
      PlayerItems: [
        {
          Value: 0,
          LevelReq: 0,
          IntelligenceReq: 0,
          StrengthReq: 0,
          Name: 'Rapture Song Mail armor',
          Id: 3,
          _id: '5a3ba715f8a2d300046b22e1'
        }
      ],
      Players: [
        {
          Name: '1',
          Class: 'Negromancer',
          Strength: 4,
          Intelligence: 14,
          Agility: 3,
          BaseHealth: 75,
          Health: 59,
          _id: '5a3ba715f8a2d300046b22e0'
        },
        {
          Name: '2',
          Class: 'Priest',
          Strength: 3,
          Intelligence: 14,
          Agility: 3,
          BaseHealth: 38,
          Health: 26,
          _id: '5a3ba715f8a2d300046b22df'
        },
        {
          Name: '2',
          Class: 'Priest',
          Strength: 3,
          Intelligence: 14,
          Agility: 3,
          BaseHealth: 38,
          Health: 26,
          _id: '5a3ba715f8a2d300046b22de'
        }
      ]
    },
    {
      SaveId: 'save213',
      _id: '5a3ba715f8a2d300046b22d9',
      PlayerItems: [],
      Players: [
        {
          Name: '1',
          Class: 'Negromancer',
          Strength: 4,
          Intelligence: 14,
          Agility: 3,
          BaseHealth: 75,
          Health: 25,
          _id: '5a3ba715f8a2d300046b22dc'
        },
        {
          Name: '2',
          Class: 'Priest',
          Strength: 3,
          Intelligence: 14,
          Agility: 3,
          BaseHealth: 38,
          Health: 26,
          _id: '5a3ba715f8a2d300046b22db'
        },
        {
          Name: '2',
          Class: 'Priest',
          Strength: 3,
          Intelligence: 14,
          Agility: 3,
          BaseHealth: 38,
          Health: 26,
          _id: '5a3ba715f8a2d300046b22da'
        }
      ]
    }
  ]
};
