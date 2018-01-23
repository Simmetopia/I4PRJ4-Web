export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  totalLevel: number;
  totalGold: number;
  saves: ISave[];
  UserItems: Item[];
}
export interface Item {
  Id: number;
  IntelligenceReq: number;
  LevelReq: number;
  Name: string;
  StrengthReq: number;
  Value: number;
}

export interface ISave {
  SaveId: string;
  Players: Player[];
  PlayerItems: Item[];
  PartyLevel: number;
  PartyExperince: string;
  Coins: number;
}

export interface Player {
  Health: number;
  Intelligence: number;
  Agility: number;
  Name: string;
  SaveId: string;
  Strength: number;
  BaseHealth: number;
  Class: string;
}
