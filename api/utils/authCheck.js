exports.isAuth = (req, res, next) => {
  console.log('auth check');
  return next();
};

exports.isAdmin = (req, res, next) => {
  console.log('Admin check');
  if (req.user.dataValues.isAdmin) return next();
  else {
    let err = new Error('User is not an admin');
    next(err);
  }
};
