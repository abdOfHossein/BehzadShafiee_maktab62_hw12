var express = require('express');
var router = express.Router();
const path = require('path');
const userInfo = require(path.join(__dirname, "..", "userInfo", "userInfo.json"));

router.get('/register', function (req, res, next) {
  if (req) {
    res.render('pageReg');
  } else {
    console.log('err');
  }

});

router.post('/register', function (req, res, next) {
  if (req.body.username == '' || req.body.password == '' || req.body.email == '' ) {
   return res.send('username and pass is neccessary');
  }
  if(!/([a-zA-Z0-9]).{7,}/i.test(req.body.password)  ){
    return res.send('pass must have atleast 1 letter & one number and 8 cahracter')
  }
  for(let person of userInfo){
      if(person.username===req.body.username){
       return res.send('username already existed')
      }
    }
  res.render('pageLogin')
});

module.exports = router;
