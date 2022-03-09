
const User = require('../models/User')


exports.userCreate = (req,res,next) => {
    User.create(req.body)
    .then(() => res.send(200))
    .catch(err => console.log(err))
}

exports.userLogin = (req,res,next) => {
    res.send(req.user)
}

exports.userLogout = (req,res,next)=> {
    req.logout();
    res.redirect('/') 
}

exports.getUser = (req,res,next) => {
    if(!req.user) res.sendStatus(401)
    res.send(req.user)
}

exports.userEdit = (req,res,next) => {
    User.update(req.body, {
        where:{
            id : req.params.id
        }
    })
    .then(() => res.send(204))
    .catch(err => console.log(err))
}

exports.userDelete = (req,res,next) => {
    User.destroy({where :{
        id : req.params.id
    }})
    .then(() => res.send(204))
    .catch(err => console.log(err))
}

exports.getUsers = (req,res,next) => {
    User.findAll({where:{
        isAdmin : false
    }})
    .then(users => res.send(users))
}

exports.giveAdmin = (req,res,next) => {
   User.update({isAdmin : true},
    {where : {
        userId : req.params.id
    }})
    .then(user => res.send(user))
}