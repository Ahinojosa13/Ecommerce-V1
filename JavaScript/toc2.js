document.addEventListener('DOMContentLoaded', () => {
    fetch('./JSON-Files/clothesCard.json')
      .then(response => response.json())
      .then(data => {
        const clothesCard = data.clothesCard;
        const jsonElement = document.getElementById('clothes-json'); 
        let html = '';

        clothesCard.forEach(clothesCard => {
          html += `
            <div class="product-card">
              <img src="${clothesCard.image}" alt="${clothesCard.alt}">
              <h2>${clothesCard.name}</h2> 
              <p>${clothesCard.description}</p> 
              <span>${clothesCard.price}</span> 
              <button>${clothesCard.buttonText}</button> <
            </div>
          `;
        });
  
        jsonElement.innerHTML = html;
      })
      .catch(error => {
        console.log('Error', error);
      });
  });
  