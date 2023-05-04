// Products JavaScript
const products = [
    {
      "name": "Product 1",
      "image": "product1.jpg",
      "price": "$50",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat velit eu velit tincidunt, at iaculis urna hendrerit.",
      "buttonText": "Add to Cart"
    },
    {
      "name": "Product 2",
      "image": "product2.jpg",
      "price": "$75",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat velit eu velit tincidunt, at iaculis urna hendrerit.",
      "buttonText": "Buy Now"
    }
  ];
  
  const productCards = document.querySelectorAll(".product-card");
  
  for (let i = 0; i < productCards.length; i++) {
    const product = products[i];
    const image = productCards[i].querySelector("img");
    const name = productCards[i].querySelector("h2");
    const description = productCards[i].querySelector("p");
    const price = productCards[i].querySelector("span");
    const button = productCards[i].querySelector("button");
    
    image.src = product.image;
    image.alt = product.name;
    name.textContent = product.name;
    description.textContent = product.description;
    price.textContent = product.price;
    button.textContent = product.buttonText;
  }
  
