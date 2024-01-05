const jwt = require('jsonwebtoken');

module.exports.generateToken = (data) =>{
    const token = jwt.sign(data,process.env.JWT_SECRET,{
        expiresIn: '7d'
    })
    return token
}