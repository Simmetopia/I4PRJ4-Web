export interface IItem {
  _id: string;
  isSold: number;
  cost: number;
  item: {
    Id: number;
    IntelligenceReq: number;
    LevelReq: number;
    Name: string;
    StrengthReq: number;
    Value: number;
  };
  user: { name: string; totalLevel: number };
}
