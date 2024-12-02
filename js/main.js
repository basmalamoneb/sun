



async function getApi() {

    var element = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
    var ali = await element.json();
    console.log(ali);
    var myText ="";
    for(var i=0; i<ali. recipes.length;i++){
        var cartoona = `<div class="col-md-4">
                        <img src="${ali.recipes[i].image_url}" style="height:350px" class="img-fluid">
                        <h3>${ali.recipes[i].publisher}</h3>
                        <h5>${ali.recipes[i].title}</h5>
                       </div>
                       `;

       myText = myText + cartoona;                 
    }

    document.querySelector(".test").innerHTML= myText;
}

getApi();  