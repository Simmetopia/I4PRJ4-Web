var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({
  Id: Number,
  IntelligenceReq: Number,
  LevelReq: Number,
  Name: String,
  StrengthReq: Number,
  Value: Number
});

var userSchema = new mongoose.Schema(
  {
    _id: String,
    name: String,
    email: String,
    password: String,
    totalLevel: Number,
    totalGold: Number,
    saves: [
      {
        SaveId: String,
        PartyLevel: Number,
        PartyExperince: String,
        Coins: Number,
        Players: [
          {
            Health: Number,
            Intelligence: Number,
            Agility: Number,
            Name: String,
            Strength: Number,
            BaseHealth: Number,
            Class: String
          }
        ],
        PlayerItems: [itemSchema]
      }
    ],
    UserItems: [itemSchema]
  },
  { _id: false }
);
mongoose.model('User', userSchema);

module.exports = mongoose.model('User');
