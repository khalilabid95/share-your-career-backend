const { registerValidator } = require("../utilities/validators")
const User = require('../models/useres')
const bcrypt = require("bcryptjs/dist/bcrypt")


const register = async (req, res) => {
    try {
        const validationResult = registerValidator.validate(req.body, { abortEarly: false })
        if (validationResult.error) {
            res.status(400).json({ validationResult })
            return
        }
        const { firstName, lastName, gender, birth_day, birth_mounth, birth_year, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            res.status(400).json({ error: "Account already exist" })
            return
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newRegister = new User({
            firstName,
            lastName,
            gender,
            birth_day,
            birth_mounth,
            birth_year,
            email,
            password: hashedPassword
        })
        await newRegister.save()
        res.status(201).json({ message: "Account created successfully" })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports = {
    register
}