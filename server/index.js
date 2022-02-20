require('dotenv').config({path:'./config.env'})
const bodyParser = require('body-parser')
const express = require('express')
const LoginRouter = require('./routes/user')
const LivestockRouter = require('./routes/livestock')
const blogRouter = require('./routes/blog')
const cors = require('cors');
const app = express()
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000;
const {spawn} = require('child_process')

connectDB()

const fetchData = async() => {
    const python = spawn('python',['livestockIndia.js'])

    python.on('close', () => console.log("chile process terminated"))
}

app.use(bodyParser.json({extended: true, limit: '30mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '30mb'}))
app.use(cors())

app.use('/',LoginRouter);
app.use('/user',LivestockRouter);
app.use('/blog',blogRouter);

app.listen(PORT, () => {
    //fetchData()
    console.log(`Listening on Port ${PORT}`)
})