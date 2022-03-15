const express = require('express');
const passport = require('passport');
const router = express.Router();
const ProductsController = require('../controllers/ProductsController');

router.get('/allProducts', ProductsController.allProducts);

router.get('/product/:id', ProductsController.productFind);

// router.get('/tag/:tag', ProductsController.allProductsWithTag);

router.post('/newProduct', ProductsController.newProduct);

router.put('/product/:id', ProductsController.editProduct);

router.delete('/product/:id', ProductsController.deleteProduct);

router.get('/search', ProductsController.searchProduct);


module.exports = router;
