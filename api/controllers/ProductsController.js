const Products = require("../models/Product")

//Revisar los HTTP Cats
exports.allProducts = (req,res) => {
    Products.findAll()
    .then(products => res.send(products))
    .then(()=> res.send(200))
    .catch(err => console.log(err))
}

exports.productFind = (req,res) => {
    Products.findOne(req.body, {
        where:{
            id : req.params.id
            }
        })
    .then(()=> res.send(200))
    .catch(err => console.log(err))
}

exports.newProduct = (req,res) => {
    Products.create(req.body)
    .then(() => res.send(201))
    .catch(err => console.log(err))
}

exports.editProduct = (req, res) => {
    Products.update(req.body, req.body, {
        where:{
            id : req.params.id
            }
        })
    .then(()=> res.send(204))
    .catch(err => console.log(err))
}

exports.deleteProduct = (req, res) => {
    Products.destroy({where :{
        id : req.params.id
    }})
    .then(()=> res.send(204))
    .catch(err => console.log(err))
}