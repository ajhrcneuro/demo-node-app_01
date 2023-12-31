const express = require('express');
const { body, validationResult } = require('express-validator/check');
const router = express.Router();

//router.get('/', (req, res) => {
//    res.send('It works!');
//});

//router.get('/', (req, res) => {
//    res.render('form');
//});

router.get('/', (req, res) => {
    res.render('form', { title: 'Registration form'});
});

router.post('/', (req, res) => {
    res.render('form', { title: 'Registration form'});
});

//router.post('/', (req, res) => {
//    console.log(req.body);
//    res.render('form', { title: 'Registration form'});
//});

router.post('/',
    [
        body('name')
        .isLength({ min: 1 })
        .withMessage('Please enter a name'),
        body('email')
        .isLength({ min: 1 })
        .withMessage('Please enter an email'),
    ], 
    (req, res) => {
        //console.log(req.body);
        //res.render('form', { title: 'Registration form'});

        const errors = validationResult(req);

        if (errors.isEmpty()){
            res.send('Thank you for your registration!');
        }else {
            res.render('form',{
                title: 'Registration form',
                errors: errors.arrays(),
                data: req.body,
            });
        }
    }
);

module.exports = router;
