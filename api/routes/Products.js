const express = require('express');
const router = express.Router();
const ProductsController = require('../controllers/ProductsController');
const { isAuth, isAdmin } = require('../utils/authCheck');

router.get('/allProducts', ProductsController.allProducts);

router.get('/product/:id', ProductsController.productFind);

// router.get('/tag/:tag', ProductsController.allProductsWithTag);

router.get('/search', ProductsController.searchProduct);

// Admin routes

router.post('/newProduct', isAuth, isAdmin, ProductsController.newProduct);

router.put('/product/:id', isAuth, isAdmin, ProductsController.editProduct);

router.delete(
  '/product/:id',
  isAuth,
  isAdmin,
  ProductsController.deleteProduct
);

module.exports = router;
