const User = require("../models/User");

const nodemailer = require("nodemailer");
const { transport } = require("../config/email");
const { Order, OrderDetails } = require("../models");

exports.userCreate = (req, res, next) => {
  User.create(req.body)
    .then(() => res.send(200))
    .catch((err) => next(err));
};

// exports.userLoginOAuth = (req,res,next) => {
//   res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out')
//   .catch(err => next(err));
// }

exports.userLogin = (req, res, next) => {
  res.send(req.user);
};

exports.userLogout = (req, res, next) => {
  req.logout();
  res.redirect("/").catch((err) => next(err));
};

exports.getUser = (req, res, next) => {
  req.isAuthenticated();
  if (!req.user) res.sendStatus(401);
  else {
    res.send(req.user);
  }
};

exports.userEdit = (req, res, next) => {
  User.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then(() => res.send(204))
    .catch((err) => next(err));
};

exports.userDelete = (req, res, next) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => res.send(204))
    .catch((err) => next(err));
};

exports.getUsers = (req, res, next) => {
  User.findAll({
    where: {
      isAdmin: false,
    },
  })
    .then((users) => res.send(users))
    .catch((err) => next(err));
};

exports.giveAdmin = (req, res, next) => {
  User.update(
    { isAdmin: true },
    {
      where: {
        userId: req.params.id,
      },
    }
  )
    .then((user) => res.send(user))
    .catch((err) => next(err));
};

exports.sendEmail = (req, res, next) => {
  async function main() {
    let mailOptions = {
      from: '"SNikers 👻" <fabriberdina@gmail.com>', // sender address
      to: req.body.email, // list of receivers
      subject: "Su Pedido ha sido realizado ✔", // Subject line
      html: "<b>Gracias por su compra en SNikers</b>", // html body
    };

    let info = await transport.sendMail(mailOptions, (err, info) => {
      if (err) res.status(500).send(err.message);
      else {
        console.log("email enviado");
        res.send(200);
      }
    });
  }
  main().catch(console.error);
};


exports.getOrders = (req, res, next) => {
  
  Order.findAll({ include : OrderDetails , where: { userId: req.params.id }})
    .then((data) => {
      res.send(data)
    })
};
