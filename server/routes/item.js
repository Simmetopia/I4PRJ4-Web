var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({
  user: {
    name: String,
    totalLevel: String
  },
  cost: Number,
  item: {
    Id: Number,
    IntelligenceReq: Number,
    LevelReq: Number,
    Name: String,
    StrengthReq: Number,
    Value: Number
  },
  isSold: { type: Number, default: 0 }
});
mongoose.model('Item', itemSchema);

module.exports = mongoose.model('Item');
