declare let Handlebars;
import { News } from "./news.js";

const news = new News;

let btn1= document.querySelector("#submit");

news.getAll('puppies').then(response =>{
    console.log('Results: ', response.data.articles);
    const templateSource = document.getElementById('news-template').innerHTML;
    const template = Handlebars.compile(templateSource);
    document.getElementById('news-container').innerHTML = template({
    news: response.data.articles
    });

})


btn1.addEventListener("click", async function(){
    let nodes = document.querySelector("#searchbar");
    console.log(nodes);
    news.getAll((<HTMLInputElement>nodes).value).then(response =>{
        console.log('Results: ', response.data.articles);
        const templateSource = document.getElementById('news-template').innerHTML;
        const template = Handlebars.compile(templateSource);
        document.getElementById('news-container').innerHTML = template({
        news: response.data.articles
        });
    
    })

})