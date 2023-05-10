document.addEventListener('DOMContentLoaded', () => {
    fetch('./JSON-Files/accessoriesCard.json')
      .then(response => response.json())
      .then(data => {
        const accessoriesCard = data.accessoriesCard;
        const jsonElement = document.getElementById('accessories-json'); 
        let html = '';

        accessoriesCard.forEach(accessoriesCard => {
          html += `
            <div class="product-card">
              <img src="${accessoriesCard.image}" alt="${accessoriesCard.alt}">
              <h2>${accessoriesCard.name}</h2> 
              <p>${accessoriesCard.description}</p> 
              <span>${accessoriesCard.price}</span> 
              <button>${accessoriesCard.buttonText}</button> <
            </div>
          `;
        });
  
        jsonElement.innerHTML = html;
      })
      .catch(error => {
        console.log('Error', error);
      });
  });
  