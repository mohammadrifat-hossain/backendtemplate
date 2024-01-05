const jwt = require('jsonwebtoken');

module.exports.authMiddleware = async (req,res,next) =>{
    const {authorization} = req.headers 

    if(authorization){
        const token = authorization.split(Bearer )[1]
        if(!token){
            res.status(400).json({error:"Please Login first"})
        }else{
            try {
                const decodeToken = jwt.verify(token, process.env.JWT_SECRET)
                req.id = decodeToken.id
                next()
            } catch (error) {
                console.log(error.message);
                res.status(400).json({message:"Please login first"})
            }
        }
    }else{
        res.status(400).json({message:"Please login first"})
    }
}