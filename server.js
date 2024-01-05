const express = require('express')
const app = express()
const http = require('http')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
require('dotenv').config()

//create http server
const server = http.createServer(app)

app.use(cors({
    origin:"*",
    credentials:true
}))
app.use(bodyParser.json())
app.use(cookieParser())

app.use('/api', require('./routes/AuthRoutes'))


server.listen(4000,()=>{
    console.log("server is running");
})

