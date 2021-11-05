
let news;
let btn1 = document.querySelector("#submit");
let nodes = document.querySelector("#searchbar").value;

btn1.addEventListener("click", function () {
    
    async function get_everything(){
        news = await fetch(`http://127.0.0.1:3001/${nodes}`, {
            method: "GET"           
        })

    }
})