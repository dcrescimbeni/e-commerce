const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/CategoryController');

router.post('category/create', CategoryController.createCategory);

router.put('/category/:id', CategoryController.editCategory);

router.delete('/category/:id', CategoryController.deleteCategory);

module.exports = router;
