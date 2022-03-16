const User = require('../models/User');

exports.getUsers = (req, res, next) => {
  User.findAll({ attributes: { exclude: ['password'] } })
    .then((users) => {
      res.send(users);
    })
    .catch((err) => next(err));
};

exports.editUser = (req, res, next) => {
  let adminId = req.user.dataValues.userId;
  let userId = parseInt(req.params.id);

  console.log(req.body.isAdmin);
  if (adminId === userId && req.body.isAdmin === false) {
    let err = new Error('Cannot revoke admin access to itself');
    return next(err);
  }

  User.update(req.body, {
    where: {
      userId: req.params.id,
    },
    returning: true,
  })
    .then((user) => res.send(user[1]))
    .catch((err) => next(err));
};
