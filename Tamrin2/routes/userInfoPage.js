var express = require('express');
var router = express.Router();
const path = require('path');
const userInfo = require(path.join(__dirname, "..", "userInfo", "userInfo.json"));

router.get('/userInfo', function (req, res, next) {
  if (req) {
    res.render('pageLogin')
  } else {
    console.log('err');
  }

});


