const Category = require('../models/Category');

exports.getCategories = async (req, res) => {
  const allCategories = await Category.findAll();
  res.send(allCategories);
};

exports.createCategory = (req, res, next) => {
  Category.create(req.body)
    .then((response) => response.dataValues)
    .then((createdCategory) => {
      res.status(201).send(createdCategory);
    })
    .catch((err) => next(err));
};

exports.editCategory = (req, res, next) => {
  Category.update(req.body, {
    where: {
      categoryId: req.params.id,
    },
    returning: true,
  })
    .then((response) => response[1][0])
    .then((editedCategory) => res.status(201).send(editedCategory))
    .catch((err) => next(err));
};

exports.deleteCategory = (req, res, next) => {
  Category.destroy({
    where: {
      categoryId: req.params.id,
    },
  })
    .then((response) => {
      const result = { deletedEntries: response };
      res.status(202).send(result);
    })
    .catch((err) => next(err));
};
