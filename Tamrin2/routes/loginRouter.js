var express = require('express');
var router = express.Router();
const path = require('path');
const userInfo = require(path.join(__dirname, "..", "userInfo", "userInfo.json"));

router.get('/login', function (req, res, next) {
  if (req) {
    res.render('pageLogin')
  } else {
    console.log('err');
  }

});

router.post('/login', function (req, res, next) {
  if (req.body.username == '' || req.body.password == '') {
    res.send('username and pass is neccessary');
  }
  else {
    for (let key of userInfo) {
      if (key.username === req.body.username && key.password === req.body.password) {
        key['isLoggin'] = true;
        res.send(key)
      }
    }
    res.send("username or pass wrong!!!")
  }


});




// body('name', 'Empty name').trim().isLength({ min: 1 }).escape(),




module.exports = router;
