const User = require('../models');

exports.getUsers = (req, res, next) => {
  User.findAll({
    where: {
      isAdmin: false,
    },
  }).then((users) => res.send(users));
};

exports.giveAdmin = (req, res, next) => {
  User.update(
    { isAdmin: true },
    {
      where: {
        userId: req.params.id,
      },
    }
  ).then((user) => res.send(user));
};
