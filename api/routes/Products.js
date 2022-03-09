const express = require('express')
const passport = require('passport')
const router = express.Router()
const ProductsController = require("../controllers/ProductsController")


//preguntar por la ruta de delete y update (entiendo que se hace todo desde la ruta del producto que se quiere borrar o eliminar)
router.get("/allProducts",ProductsController.allProducts)

router.get("/product/:id" , ProductsController.productEdit)

router.post("/newProduct",ProductsController.newProduct)

router.put("/product/:id", ProductsController.editProduct)

router.delete("/product/:id", ProductsController.deleteProduct)

module.exports = router