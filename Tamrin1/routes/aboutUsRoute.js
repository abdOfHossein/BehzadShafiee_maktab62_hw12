const express = require('express');
const path = require('path/posix');
const router = express.Router();

router.get('/abouteUs', (req, res) => {
    if (req) {
        res.render('abouteUs');
    }
    else {
        res.send('err');
    }

})

module.exports=router;