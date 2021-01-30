const express = require('express'),
    router = express.Router(),
    signUpTemplateCopy = require('../models/signUpModel');

router.post('/signup', (req, res) => {
    const signedUpUser = new signUpTemplateCopy({
        //user entry
        fullname: req.body.fullname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })

    signedUpUser.save()
        .then(data => {
            res.json(data)
        })
        .catch(error => {
            res.json(error)
        })
});


module.exports = router;