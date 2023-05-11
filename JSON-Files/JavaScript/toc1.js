document.addEventListener('DOMContentLoaded', () => {
  fetch('./JSON-Files/accessoriesCard.json')  //fetch request is made to retrieve a JSON file located at ./JSON-Files/accessoriesCard.json. //
    .then(response => response.json())
    .then(data => {
      const accessoriesCard = data.accessoriesCard;
      const jsonElement = document.getElementById('accessories-json'); 
      let html = '';
// Then I create a for loop to go through my json file to input in a template for my product card
      accessoriesCard.forEach(accessoriesCard => {
        html += `
          <div class="product-card">                                            
            <img src="${accessoriesCard.image}" alt="${accessoriesCard.alt}"> 
            <h2>${accessoriesCard.name}</h2> 
            <p>${accessoriesCard.description}</p> 
            <span>${accessoriesCard.price}</span> 
            <button>${accessoriesCard.buttonText}</button> 
          </div>
        `;
      });
// Grab information and plugs in the HTML
      jsonElement.innerHTML = html;
    })
//If there is any error it'll console so you can check over your code 
    .catch(error => {
      console.log('Error', error);
    });
});
