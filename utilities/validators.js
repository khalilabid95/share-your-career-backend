const Joi = require('joi');
var today = new Date()

const registerValidator = Joi.object({
    firstName : Joi.string().alphanum().min(3).max(30).required(),
    lastName: Joi.string().alphanum().min(3).max(30).required(),
    gender: Joi.string(),
    birth_day: Joi.number().integer().min(1).max(31),
    birth_mounth: Joi.number().integer().min(1).max(12),
    birth_year: Joi.number().integer().min(1900).max(today.getFullYear()),
    email: Joi.string().email().required(),
    password: Joi.string().required()
})

module.exports = {
    registerValidator
}