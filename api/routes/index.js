
const express = require('express')
const passport = require('passport')
const router = express.Router()
const product = require("./Products")
const user = require("./Users")
const order = require("./Orders")

router.use("/products", product)
router.use("/users", user)
router.use("/orders", order)

module.exports = router