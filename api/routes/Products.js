const express = require('express');
const router = express.Router();
const ProductsController = require('../controllers/ProductsController');
const { isAuth, isAdmin } = require('../utils/authCheck');

router.get('/allProducts', ProductsController.allProducts);

router.get('/product/:id', ProductsController.productFind);

// router.get('/tag/:tag', ProductsController.allProductsWithTag);

router.post('/newProduct', isAuth, isAdmin, ProductsController.newProduct);

router.put('/product/:id', isAuth, isAdmin, ProductsController.editProduct);

router.delete('/product/:id', ProductsController.deleteProduct);

router.get('/search', ProductsController.searchProduct);

module.exports = router;
