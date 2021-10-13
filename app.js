const express = require('express');
const app = express();
const router = express.Router();
const path = require('path')

if (process.env.NODE_ENV == 'dev'){
    require('dotenv').config();
}


const port = process.env.port;
app.listen(port,()=>{
    console.log('App is listening on port'+port)
})