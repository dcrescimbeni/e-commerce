exports.isAuth = (req, res, next) => {
  if (req.user) return next();
  else {
    let err = new Error('User is not authenticated');
    next(err);
  }
};

exports.isAdmin = (req, res, next) => {
  // console.log('Admin check');
  if (req.user.dataValues.isAdmin) return next();
  else {
    let err = new Error('User is not an admin');
    next(err);
  }
};
