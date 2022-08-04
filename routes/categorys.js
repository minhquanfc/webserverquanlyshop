var express = require('express');
var router = express.Router();
const categoryController = require('../controllers/category.controller');

router.post('/add', categoryController.postAddCategory);
router.get('/getallcategory', categoryController.getCategory);
router.post('/update', categoryController.postEditCategory);
router.delete('/delete',categoryController.postDelCategory);

module.exports = router;