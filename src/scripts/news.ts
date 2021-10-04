declare let axios;
export class News{
    getAll(nodes){
       let url = 'https://newsapi.org/v2/everything?q='+nodes+'&apiKey=9dd678c7876f4b49bf68e9d8508b6e22'
       return axios.get(url)


    }
}

