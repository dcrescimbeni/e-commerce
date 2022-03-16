exports.isAuth = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  else {
    let err = new Error('User is not authenticated');
    next(err);
  }
};

exports.isAdmin = (req, res, next) => {
  if (req.user.dataValues.isAdmin) return next();
  else {
    let err = new Error('User is not an admin');
    next(err);
  }
};
