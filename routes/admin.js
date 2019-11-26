const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');

const bugController = require('../controllers/bug');
const isAuth = require('../middleware/is-auth')



/*router.get('/view-bug',(req,res,next)=>{
    res.render('view-bug', {
       pageTitle: 'View Bugs',
        path: 'view-bug'
    });
});*/
router.get('/view-bug',isAuth, bugController.getBugs);
router.post('/add-bug',isAuth, bugController.postAddBug);

router.get('/add-bug',isAuth, bugController.getAddBug);
router.post('/delete-bug', bugController.postDeleteBug);

router.get('/', (req,res,next)=>{
   res.render('login', {
       pageTitle: 'Index',
       path: '/login'
   });

});



module.exports = router;

