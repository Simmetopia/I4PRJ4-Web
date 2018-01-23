export interface IEvent {
  title: string;
  time: Date;
  cost: number;
  sessions: ISession;
}

export interface ISession {
  name: string;
  time: number;
}
