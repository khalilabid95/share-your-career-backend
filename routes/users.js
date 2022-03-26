const express = require('express')
const { register } = require('../controllers/users')
const UserRouter = express.Router()



UserRouter.post('/register',register)


module.exports = UserRouter