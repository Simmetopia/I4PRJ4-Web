import { ISave } from '../Data/user.interface';

export const Savedata: ISave = {
  Coins: 200,
  PartyExperince: '220 / 200',
  PartyLevel: 12,
  PlayerItems: [
    {
      Id: 2,
      IntelligenceReq: 2,
      LevelReq: 2,
      Name: 'MockSword',
      StrengthReq: 2,
      Value: 200
    }
  ],
  Players: [
    {
      Agility: 2,
      BaseHealth: 100,
      Class: 'Negromanxer',
      Health: 200,
      Intelligence: 200,
      Name: 'thedudesogdonger',
      SaveId: '213',
      Strength: 20
    }
  ],
  SaveId: 'mocksaveid'
};
