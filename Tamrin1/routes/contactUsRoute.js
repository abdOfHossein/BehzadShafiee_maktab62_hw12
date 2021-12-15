const express = require('express');
const path = require('path/posix');
const router = express.Router();

router.get('/contactUs', (req, res) => {
    if (req) {
        res.render('contactUsPage');
    }
    else {
        res.send('err');
    }

})






module.exports = router;