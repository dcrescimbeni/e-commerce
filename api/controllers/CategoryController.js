const Category = require('../models/Category');

exports.getCategories = async (req, res) => {
  const allCategories = await Category.findAll();
  res.send(allCategories);
};

exports.createCategory = (req, res) => {
  console.log('entre');
  Category.create(req.body)
    .then((data) => res.send(data))
    .then(() => res.send(201))
    .catch((err) => console.log(err));
};

exports.editCategory = (req, res) => {
  Category.update(req.body, req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then(() => res.send(204))
    .catch((err) => console.log(err));
};

exports.deleteCategory = (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => res.send(204))
    .catch((err) => console.log(err));
};
