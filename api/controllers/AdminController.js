const User = require('../models/User');

exports.getUsers = (req, res, next) => {
  User.findAll().then((users) => res.send(users));
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
