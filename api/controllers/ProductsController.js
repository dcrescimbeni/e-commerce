const Products = require('../models/Product');
const Category = require('../models/Category');
const { Op } = require('sequelize');

exports.allProducts = async (req, res, next) => {
  try {
    let products = Products.findAll({ include: Category });
    res.send(products.dataValues);
  } catch (err) {
    next(err);
  }
};

exports.productFind = async (req, res, next) => {
  try {
    let product = await Products.findOne({
      where: {
        productId: req.params.id,
      },
    });

    res.send(product.dataValues);
  } catch (err) {
    next(err);
  }
};

exports.productFindCategory = async (req, res, next) => {
  try {
    let products = Products.findAll({
      include: [
        {
          model: Category,
          where: { categoryId: req.params.id },
        },
      ],
    });

    res.send(products.dataValues);
  } catch (err) {
    next(err);
  }
};

exports.newProduct = async (req, res, next) => {
  // Parsing of images passed as strings
  if (typeof req.body.img === 'string') {
    let imagesArray = req.body.img.split(', ');
    let trimmedImages = imagesArray.map((image) => image.trim());
    req.body.img = [...trimmedImages];
  }

  try {
    let createdProduct = await Products.create(req.body);

    // Adding categories
    if (req.body.categories) {
      let categoryArray = req.body.categories.split(',');
      let parsedArray = categoryArray.map((category) =>
        parseInt(category.trim())
      );

      let foundCategories = await Promise.all(
        parsedArray.map(
          async (categoryId) => await Category.findByPk(categoryId)
        )
      );

      await createdProduct.addCategories(foundCategories);
    }

    res.status(201).send(createdProduct.dataValues);
  } catch (err) {
    next(err);
  }
};

exports.editProduct = async (req, res, next) => {
  try {
    let editedProduct = await Products.update(req.body, {
      where: {
        productId: req.params.id,
      },
      returning: true,
    });

    res.status(201).send(editedProduct[1]);
  } catch (err) {
    next(err);
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    let deletedProduct = await Products.destroy({
      where: {
        productId: req.params.id,
      },
    });

    const result = { deletedEntries: deletedProduct };

    res.status(202).send(result);
  } catch (err) {
    next(err);
  }
};

exports.searchProduct = async (req, res, next) => {
  let searchQuery = req.query.query;

  try {
    let foundProduct = await Products.findAll({
      where: { name: { [Op.iLike]: `%${searchQuery}%` } },
    });

    res.send(foundProduct);
  } catch (err) {
    next(err);
  }
};
