const User = require('../models/User');

exports.getUsers = (req, res, next) => {
  User.findAll({ attributes: { exclude: ['password'] } })
    .then((users) => {
      res.send(users);
    })
    .catch((err) => next(err));
};

exports.setAdmin = (req, res, next) => {
  const { isAdmin } = req.query;

  let adminId = req.user.dataValues.userId;
  let userId = parseInt(req.params.id);

  if (adminId === userId) {
    let err = new Error('Cannot revoke admin access to itself');
    return next(err);
  }

  User.update(
    { isAdmin },
    {
      where: {
        userId: req.params.id,
      },
      returning: true,
    }
  ).then((user) => res.send(user[1]));
};
