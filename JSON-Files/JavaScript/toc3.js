document.addEventListener('DOMContentLoaded', () => {
    fetch('./JSON-Files/gearCard.json')
      .then(response => response.json())
      .then(data => {
        const gearCard = data.gearCard;
        const jsonElement = document.getElementById('gear-json'); 
        let html = '';

        gearCard.forEach(gearCard => {
          html += `
            <div class="product-card">
              <img src="${gearCard.image}" alt="${gearCard.alt}">
              <h2>${gearCard.name}</h2> 
              <p>${gearCard.description}</p> 
              <span>${gearCard.price}</span> 
              <button>${gearCard.buttonText}</button> 
            </div>
          `;
        });
  
        jsonElement.innerHTML = html;
      })
      .catch(error => {
        console.log('Error', error);
      });
  });
  