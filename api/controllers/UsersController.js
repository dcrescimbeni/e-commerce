
const User = require('../models/User')


export const userCreate = (req,res,next) => {
    User.create(req.body)
    .then(res.send(201))
    .catch(err => console.log(err))
}

export const userLogin = (req,res,next) => {
    res.send(req.user)
}

export const userEdit = (req,res,next) => {
    User.update(req.body, {
        where:{
            id : req.params.id
        }
    })
    .then(res.send(204))
    .catch(err => console.log(err))
}

export const userLogOut = (req,res,next)=> {
    if(!req.user) res.sendStatus(401)
    res.send(req.user)
}


export const userDelete = (req,res,next) => {
    User.destroy({where :{
        id : req.params.id
    }})
    .then(res.send(204))
    .catch(err => console.log(err))
}


export const getUsers = (req,res,next) => {
    User.findAll({where:{
        isAdmin : false
    }})
    .then(users => res.send(users))
}