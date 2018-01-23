const express = require('express');
const router = express.Router();
var db = require('./db');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('still wurks');
})

// ADD THESE TWO LINES
var UserController = require('./UserController');
router.use('/users', UserController);
// ADD THESE TWO LINES
var ItemController = require('./ItemController');
router.use('/items', ItemController);
// Connection URL

module.exports = router;
