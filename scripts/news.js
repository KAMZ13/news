const dotenv = require('../../dotenv').config();
const key = process.env.APIK;
export class News {
    getAll(nodes) {
        let url = `https://newsapi.org/v2/everything?q=${nodes}&apiKey=${key}`;
        return axios.get(url);
    }
}
;
