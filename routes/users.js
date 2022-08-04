var express = require('express');
var router = express.Router();
const userC= require("../controllers/user.controller");

/* GET users listing. */
router.get('/',(req,res,next)=>{
  res.send("aaaa")
});
router.get('/getallusers',userC.getUsers);
router.post('/add',userC.postAdd);
router.post('/update',userC.postEdit);
router.delete('/delete',userC.postDel);


module.exports = router;
