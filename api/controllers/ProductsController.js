const Products = require('../models/Product');
const Category = require('../models/Category');
const { Op } = require('sequelize');
const id = require('volleyball/lib/id');

exports.allProducts = (req, res) => {
  Products.findAll({ include: Category })
    .then((products) => res.send(products))
    .catch((err) => console.log(err));
};

exports.productFind = (req, res) => {
  console.log('');
  Products.findOne({
    where: {
      productId: req.params.id,
    },
  })
    .then((products) => res.send(products))
    .catch((err) => console.log(err));
};

exports.productFindCategory = (req, res) => {
  Products.findAll({
    include: [
      {
        model: Category,
        where: { categoryId: req.params.id },
      },
    ],
  })
    .then((products) => res.send(products))
    .catch((err) => console.log(err));
};

exports.newProduct = async (req, res, next) => {
  if (typeof req.body.img === 'string') {
    let imagesArray = req.body.img.split(', ');
    let trimmedImages = imagesArray.map((image) => image.trim());
    req.body.img = [...trimmedImages];
  }

  if (req.body.categories) {
    let categoryArray = req.body.categories.split(',');
    let parsedArray = categoryArray.map((category) =>
      parseInt(category.trim())
    );
    req.body.categories = [...parsedArray];
  }

  try {
    let createdProduct = await Products.create(req.body);
    res.status(201).send(createdProduct.dataValues);
  } catch (err) {
    next(err);
  }
  // await Products.create(req.body)
  //   .then((response) => response.dataValues)
  //   .then((createdProduct) => {
  //     res.status(201).send(createdProduct);
  //   })
  //   .catch((err) => console.log(err));
};

exports.editProduct = (req, res) => {
  Products.update(req.body, {
    where: {
      productId: req.params.id,
    },
    returning: true,
  })
    .then((response) => response[1])
    .then((editedProduct) => res.status(201).send(editedProduct))
    .catch((err) => console.log(err));
};

exports.deleteProduct = (req, res) => {
  Products.destroy({
    where: {
      productId: req.params.id,
    },
  })
    .then((response) => {
      const result = { deletedEntries: response };
      res.status(202).send(result);
    })
    .catch((err) => console.log(err));
};

exports.searchProduct = (req, res) => {
  let searchQuery = req.query.query;
  console.log(searchQuery);

  Products.findAll({
    where: { name: { [Op.iLike]: `%${searchQuery}%` } },
  })
    .then((products) => {
      res.send(products);
    })
    .catch((err) => console.log(err));
};
