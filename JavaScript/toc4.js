document.addEventListener('DOMContentLoaded', () => {
    fetch('./JSON-Files/juiceCard.json')
      .then(response => response.json())
      .then(data => {
        const juiceCard = data.juiceCard;
        const jsonElement = document.getElementById('juice-json'); 
        let html = '';

        juiceCard.forEach(juiceCard => {
          html += `
            <div class="product-card">
              <img src="${juiceCard.image}" alt="${juiceCard.alt}">
              <h2>${juiceCard.name}</h2> 
              <p>${juiceCard.description}</p> 
              <span>${juiceCard.price}</span> 
              <button>${juiceCard.buttonText}</button> <
            </div>
          `;
        });
  
        jsonElement.innerHTML = html;
      })
      .catch(error => {
        console.log('Error', error);
      });
  });
  