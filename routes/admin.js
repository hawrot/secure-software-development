const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');



router.get('/view-bug',(req,res,next)=>{
    res.render('view-bug', {
       pageTitle: 'View Bugs',
        path: 'view-bug'
    });
});

router.get('/add-bug', (req,res,next)=>{
    res.render('add-bug', {
        pageTitle: 'Add a bug',
        path: 'add-bug'

    });
});

router.get('/', (req,res,next)=>{
   res.render('index', {
       pageTitle: 'Index',
       path: '/'
   });

});





module.exports = router;

