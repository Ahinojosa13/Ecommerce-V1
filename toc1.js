document.addEventListener('DOMContentLoaded'), () => {
    fetch('accessories.json')
     .then(response => response.json())
     .then(data => {
        const accesories = data.accesories;
        const jsonElement = document.getElementById('accesories-json');
        let html = '';
        accesories.forEach(accesories => {
            html += `
            <div class="product-card">
                <img src="${accesories.image}" alt="${accesories.alt}">
                <h2>${accesories.name}</h2>
                <p>${accesories.description}</p>
                <span>${accesories.image}</span>
                <button>${accesories.buttonText}</button>
            </div>
            `;
            });

            jsonElement.innerHTML = html;
            })
            .catch(error => {
            console.log('Error', error);
        });
    };
