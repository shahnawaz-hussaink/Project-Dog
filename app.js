// Start 

let url = "https://dog.ceo/api/breeds/image/random";
let btn = document.querySelector("button");


async function getImage(){
    try{
        let res = await axios.get(url);
        return res.data.message;
    }
    catch(error){
        alert("You Connection is slow!");
        return "Connection lost";
    }
}

btn.addEventListener("click", async ()=>{
    let img = document.querySelector("#img-res");
    let imagelink = await getImage();
    img.setAttribute("src",imagelink);
});
