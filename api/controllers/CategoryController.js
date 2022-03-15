const Category = require('../models/Category');

exports.createCategory = (req, res) => {
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
