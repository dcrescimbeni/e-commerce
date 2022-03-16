const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/CategoryController');
const { isAuth, isAdmin } = require('../utils/authCheck');

router.get('/all', CategoryController.getCategories);

// Admin routes

router.post('/newCategory', isAuth, isAdmin, CategoryController.createCategory);
router.put('/category/:id', isAuth, isAdmin, CategoryController.editCategory);
router.delete(
  '/category/:id',
  isAuth,
  isAdmin,
  CategoryController.deleteCategory
);

    
module.exports = router;
