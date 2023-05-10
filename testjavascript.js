let http =new XMLHttpRequest();             //Created a Xmlhttp-request object
http.open('get', 'accessories.json', true);     //Prepared request with open() method 
http.send();
http.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        let products = JSON.parse(this.responseText);
        let output = "";
        for(let item of products){
            output += `
            <div class="product">
                <img src="${item.image}" alt="${item.image}">
                <h2>${item.name}</h2>
                <p>${item.description}</p>
                <span>${item.image}</span>
                <button>${item.buttonText}</button>
            </div>
            `;
        }
        // document.querySelector(".products")
        document.querySelector(".products").innerHTML = output;
    }
}