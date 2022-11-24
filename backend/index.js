const express = require('express')
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const db = require('./db')
const cors = require('cors')
const port = process.env.PORT || 8000
const {errorHandler} = require('./middlewar/errorMiddlewar')
const carRouter= require('./routes/carRouter');
const DetallesRoute = require('./routes/DetallesRouter');


db();
const app = express()

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(errorHandler)


app.use('/api/detalles',DetallesRoute)
app.use('/api/cars',carRouter)
app.use('/api/users',require('./routes/userRouter'))
app.use('/api/admins',require('./routes/adminRouter'))


app.listen(port, ()=>{ 

    console.log(`hello from ${port}`)

})

