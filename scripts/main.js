var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { News } from "./news.js";
const news = new News;
let btn1 = document.querySelector("#submit");
news.getAll('puppies').then(response => {
    console.log('Results: ', response.data.articles);
    const templateSource = document.getElementById('news-template').innerHTML;
    const template = Handlebars.compile(templateSource);
    document.getElementById('news-container').innerHTML = template({
        news: response.data.articles
    });
});
btn1.addEventListener("click", function () {
    return __awaiter(this, void 0, void 0, function* () {
        let nodes = document.querySelector("#searchbar");
        console.log(nodes);
        news.getAll(nodes.value).then(response => {
            console.log('Results: ', response.data.articles);
            const templateSource = document.getElementById('news-template').innerHTML;
            const template = Handlebars.compile(templateSource);
            document.getElementById('news-container').innerHTML = template({
                news: response.data.articles
            });
        });
    });
});
