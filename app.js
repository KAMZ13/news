
const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const router = express.Router();
const path = require('path')
const axios = require('axios');
const key = process.env.APIK



var axphbs = require('express-handlebars');
const exphbs = require('express-handlebars');
app.set('views',path.join(__dirname, 'views'));

app.engine('.hbs',exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    extname: '.hbs'
    
}));

app.set('view engine', '.hbs');



async function  getEverything(nodes){
    try { 
    console.log(`https://newsapi.org/v2/everything?q=${nodes}&apiKey=${key}`)
    let url = `https://newsapi.org/v2/everything?q=${nodes}&apiKey=${key}`
    return await axios.get(url)
    .then(response =>{
        console.log(response.data.articles)
        return  response.data.articles
    })
    } 
    catch (err) { // Handle Error Here 
        console.error(err); } 


}

async function  getAll(){
    try { 
        console.log('hola')
        let url = `https://newsapi.org/v2/everything?q=puppies&apiKey=${key}`
        return await axios.get(url)
    .then(response =>{
        //console.log(response.data.articles)
        return  response.data.articles
    })
    } 
    catch (err) { // Handle Error Here 
        console.error(err); } 


}







app.use('/assests',express.static(path.join(__dirname,'public')));


app.get("/", async function(req,res){
    if(!req.query.everything){

        res.render('index',{
            news: await getAll()
        });
    }
    else{
        res.render('index',{
            news: await getEverything(req.query.everything)

        });

    }
   
})



const port = process.env.port || 5000;

app.listen(port,()=>{
    console.log('App is listening on port'+port)
})

