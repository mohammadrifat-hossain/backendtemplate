const bcrypt = require('bcrypt')
const formidable = require('formidable')
const connectDB = require('../utils/connectDB')
const { generateToken} = require('../utils/GenerateToken')

class AuthController{
    login = async (req, res) => {
        const {email, password} = req.body
        console.log(email, password)
    }
}

module.exports = new AuthController();
