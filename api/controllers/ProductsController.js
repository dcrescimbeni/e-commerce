const Products = require('../models/Product');
const { Op } = require('sequelize');

//revisar en postman las rutas y seguir con Trello, ver Include
exports.allProducts = (req, res) => {
  Products.findAll()
    .then((products) => res.send(products))
    .then(() => res.send(200))
    .catch((err) => console.log(err));
};

exports.productFind = (req, res) => {
  console.log('estoy aca');
  Products.findOne({
    where: {
      productId: req.params.id,
    },
  })
    .then((products) => res.send(products))
    .catch((err) => console.log(err));
};

// exports.allProductsWithTag = (req,res) => {
//     Products.findAll(...tag, {
//         where:{
//             tag: req.params.tag
//         }
//     })
//     .then(()=> res.send(200))
//     .catch(err => console.log(err))
// }

exports.newProduct = (req, res) => {
  Products.create(req.body)
    .then(() => res.send(201))
    .catch((err) => console.log(err));
};

exports.editProduct = (req, res) => {
  Products.update(req.body, req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then(() => res.send(204))
    .catch((err) => console.log(err));
};

exports.deleteProduct = (req, res) => {
  Products.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => res.send(204))
    .catch((err) => console.log(err));
};

exports.searchProduct = (req, res) => {
  let searchQuery = req.query.query.toLowerCase();
  console.log(searchQuery);

  Products.findAll({
    where: { name: { [Op.like]: `%${searchQuery}%` } },
  })
    .then((products) => {
      res.send(products);
    })
    .catch((err) => console.log(err));
};
