const Products = require('../models/Product');
const Category = require('../models/Category');
const { Op } = require('sequelize');

exports.allProducts = async (req, res, next) => {
  try {
    let products = await Products.findAll({ include: Category });
    res.send(products);
  } catch (err) {
    next(err);
  }
};

exports.productFind = async (req, res, next) => {
  try {
    let product = await Products.findOne({
      where: {
        productId: req.params.id,
      }, include: Category
    });

    res.send(product.dataValues);
  } catch (err) {
    next(err);
  }
};

exports.productFindCategory = async (req, res, next) => {
  try {
    let products = await Products.findAll({
      include: [
        {
          model: Category,
          where: { categoryId: req.params.id },
        },
      ],
    });

    res.send(products);
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
      let parsedArray;

      if (typeof req.body.categories === 'number') {
        parsedArray = [req.body.categories];
      } else {
        let categoryArray = req.body.categories.split(',');
        parsedArray = categoryArray.map((category) =>
          parseInt(category.trim())
        );
      }

      let foundCategories = await Promise.all(
        parsedArray.map(
          async (categoryId) => await Category.findByPk(categoryId)
        )
      );

      await createdProduct.setCategories(foundCategories);
    }

    res.status(201).send(createdProduct.dataValues);
  } catch (err) {
    next(err);
  }
};

exports.editProduct = async (req, res, next) => {
  try {
    if (typeof req.body.img === 'string') {
      let imagesArray = req.body.img.split(', ');
      let trimmedImages = imagesArray.map((image) => image.trim());
      req.body.img = [...trimmedImages];
    }

    await Products.update(req.body, {
      where: {
        productId: req.params.id,
      },
      returning: true,
    });

    if (req.body.categories) {
      let parsedArray;

      if (typeof req.body.categories === 'number') {
        parsedArray = [req.body.categories];
      } else {
        let categoryArray = req.body.categories.split(',');
        parsedArray = categoryArray.map((category) =>
          parseInt(category.trim())
        );
      }

      let foundCategories = await Promise.all(
        parsedArray.map(
          async (categoryId) => await Category.findByPk(categoryId)
        )
      );

      let product = await Products.findByPk(req.params.id);

      await product.setCategories(foundCategories);
    }

    let productResult = await Products.findOne({
      where: { productId: req.params.id },
      include: Category,
    });

    res.status(201).send(productResult);
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
