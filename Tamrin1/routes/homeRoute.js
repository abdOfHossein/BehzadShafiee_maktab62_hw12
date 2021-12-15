const express = require('express');
const path = require('path/posix');
const router = express.Router();

router.get('/home', (req, res) => {
    if (req) {
        res.render('mainPage');
    }
    else {
        res.send('err');
    }
    

})







module.exports = router;