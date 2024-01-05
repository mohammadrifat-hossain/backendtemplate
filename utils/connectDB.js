const mongoose = require('mongoose');

const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MOMGO_URL,{
            serverSelectionTimeoutMS:30000
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB
