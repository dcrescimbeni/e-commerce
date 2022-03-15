
const express = require('express')
const passport = require('passport')
const router = express.Router()
const product = require("./Products")
const user = require("./Users")

router.use("/products", product)
router.use("/users", user)

module.exports = router