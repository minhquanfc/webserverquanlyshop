var express = require('express');
var router = express.Router();
const productC = require('../controllers/product.controllers');
const multer = require('multer');
const upload = multer({dest:'./tmp/'})

router.post('/add', upload.single("anhsanpham"), productC.postAddProduct);
router.get('/getallproduct', productC.getProduct);
router.post('/update', upload.single("anhsanpham"), productC.postUpdate);
router.delete('/delete',productC.postDel);

module.exports = router;