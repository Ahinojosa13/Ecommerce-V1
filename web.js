let http =new XMLHttpRequest();             //Created a Xmlhttp-request object
http.open('get', 'product.json', true);     //Prepared request with open() method 
http.send();
http.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        let products = JSON.paarse(this.responseText);
        let output = "";
        for(let item of products){
            output += `
            <div class="product-card">
                <img src="${item.image}" alt="${item.image}">
                <h2>${item.name}</h2>
                <p>${item.description}</p>
                <span>${item.image}</span>
                <button>${item.buttonText}</button>
            </div>
            `;
        }
        document.querySelector(".accesories-json").innerHTML = output;
    }
}

// // Products JavaScript
// const products = {
//   "accessories": [
//       {
//           "name": "VOLTRX Premium Electric Protein Shaker Bottle",
//           "image": "/images/shakercup.webp",
//           "price": "$25.98",
//           "description": "The VOLTRX VortexBoost mixing bottle is a high-quality shaker bottle made of Tritan that is safe and shatter-resistant with no BPA. It has a unique and eye-catching design, a 24oz capacity, and a powerful motor that ensures no remaining chunks.",
//           "buttonText": "Add to Cart"
//       },
//       {
//           "name": "Beats Powerbeats Pro",
//           "image": "/images/beats.webp",
//           "price": "$189.99",
//           "description": "Black Wireless Earbuds with Apple H1 Headphone Chip, Class 1 Bluetooth Headphones, 9 Hours of Listening Time, Sweat Resistant, Built-in Microphone",
//           "buttonText": "Add to Cart"
//       },
//       {
//           "name": "CANWAY Foldable Sports Gym Bag",
//           "image": "/images/bag.webp",
//           "price": "$30.99",
//           "description": "Travel Duffel Bag with Shoes Compartment, Carry onBags for Airplanes, Weekender Overnight Workout Bag with Waterproof, Black",
//           "buttonText": "Add to Cart"
//       },
//       {
//           "name": "YQXCC 4 Pack Cooling Towel",
//           "image": "/images/towel.webp",
//           "price": "$14.99",
//           "description": "Cool Cold Towel for Neck, Microfiber Ice Towel, Soft Breathable Chilly Towel for Yoga, Golf, Gym, Camping, Running, Workout & More Activities",
//           "buttonText": "Add to Cart"
//       }
//     ],
//     "clothes": [
//      {
//           "name": "NELEUS Men's 3 Pack Dry Fit",
//           "image": "/images/ytop.webp",
//           "price": "$23.95",
//           "description": "The Y-back design is ideal for bodybuilders, gym enthusiasts, and men with muscular athletic physiques. The fitted design allows for a comfortable fit and natural range of motion, while also providing room to breathe and stay cool.",
//           "buttonText": "Add to Cart"
//       },
//       {
//           "name": "Anime Shorts",
//           "image": "/images/anime.webp",
//           "price": "$34.99",
//           "description": "These anime-inspired shorts are made of 100% polyester with moisture-wicking technology that absorbs moisture and removes odor. They are versatile and suitable for gym, marathon, or lounge days.",
//           "buttonText": "Add to Cart"
//       },
//       {
//           "name": "DEATH CAN WAIT OVERSIZED TEE",
//           "image": "/images/wolves.webp",
//           "price": "$40",
//           "description": "The Premium Vintage Tee is an oversized, incredibly soft t-shirt made of 100% cotton. It's designed for everyday wear and has been pre-shrunk, softened, and dyed to give it an authentic vintage finish. The tee comes with a screen print and is part of a label called Premium Vintage that reinvents past garments for the present, creating timeless pieces.",
//           "buttonText": "Add to Cart"
//       },
//       {
//           "name": "Ultra Performance 3 Pack",
//           "image": "/images/sweats.webp",
//           "price": "$36.99",
//           "description": "These lightweight mens sweatpants with pockets are perfect for lounging around the house. You never know what the day will throw at you, that is why it feels great to be prepared with clothes like these mens lounge pants with pockets that are ideal in any situation.",
//           "buttonText": "Add to Cart"
//       }
//     ],
//       "gear": [
//       {
//           "name": "Body Reapers Weight Lifting Belt",
//           "image": "/images/belt.webp",
//           "price": "$59.99",
//           "description": "Weight Lifting Belt for Men & Women, Heavy Duty Lever Belt Weightlifting Belt Made of Calfskin Leather 10mm Thick, 4 Inch Wide - Powerlifting Belt for Back Support, Gym & Fitness Training",
//           "buttonText": "Add to Cart"
//       },
//       {
//           "name": "Nike Blazer",
//           "image": "/images/nike.webp",
//           "price": "$112",
//           "description": "VINTAGE STYLE. The Nike Blazer Mid 77 Vintage combines old-school basketball style with the vintage finish of the midsole, while innovative details update the look. Reinforced structure that blends the midsole to the sole for an essential look. Foam exposed on the tongue for a vintage style.",
//           "buttonText": "Add to Cart"
//       },
//       {
//           "name": "Gymreapers Knee Sleeves",
//           "image": "/images/knee.webp",
//           "price": "$59.99",
//           "description": "Knee Sleeve & Compression Brace for Squats, Fitness, Weightlifting, and Powerlifting. Gymreapers 7MM Sleeve Pair For Men & Women",
//           "buttonText": "Add to Cart"
//       },
//       {
//           "name": "Gymreapers Wrist Wraps",
//           "image": "/images/straps.webp",
//           "price": "$19.99",
//           "description": "18 inches Professional Quality Wrist Support with Heavy Duty Thumb Loop. Best Wrap for Powerlifting Competition, Strength Training, Bodybuilding",
//           "buttonText": "Add to Cart"
//       }
//     ],
//     "juice": [
//       {
//           "name": "Bloom Nutrition Green Superfood Stick Packs",
//           "image": "/images/greens.webp",
//           "price": "$34.99",
//           "description": "We have curated an amazing nutritious blend of vitamins, antioxidants, and adaptogenic herbs that aid digestion and support digestive health. Our blend of digestive enzymes helps break down the food you eat, while probiotics help the body absorb the nutrients from those foods.",
//           "buttonText": "Add to Cart"
//       },
//       {
//           "name": "ALPHA LION Superhuman Pre Workout Powder",
//           "image": "/images/pre.webp",
//           "price": "$47",
//           "description": "GREAT TASTING CAFFEINE MATRIX: Our pre workout is powered by our all new SXT Sustained Energy and Focus System. This tri-source caffeine matrix will provide you with more sustained energy and focus vs the standard forms of caffeine used in other pre workout supplements.",
//           "buttonText": "Add to Cart"
//       },
//       {
//           "name": "Black Magic Original Horchata",
//           "image": "/images/pro.webp",
//           "price": "$47.54",
//           "description": "Black Magic Supplements' Handcrafted Casein Protein is a protein powder that contains a blend of premium protein sources such as whey, egg, and casein, with an amino acid profile that may help build muscle and aid in recovery. It is designed to support muscle protein synthesis and help with recovery after workouts. Each scoop provides 24g of high-quality protein, and it has a delicious original horchata flavor.",
//           "buttonText": "Add to Cart"
//       },
//       {
//           "name": "ALPHA LION Gains Candy",
//           "image": "/images/gains.webp",
//           "price": "$41.99",
//           "description": "Gains Candy's diet capsules contain only one ingredient, MitoBurn, which is a form of L-BAIBA, an amino acid found in both plants and animals. It can help convert bad white fat into good fat, leading to increased energy expenditure and a healthier metabolism. Gains Candy can help you reach your body goals by amplifying the effects of your workout, reducing appetite, improving carbohydrate tolerance, and insulin sensitivity.",
//           "buttonText": "Add to Cart"
//       }
//   ],
// };
// ​
// const containers = {
//   "accessories": document.getElementById("#accessories"),
//   "clothes": document.getElementById("#clothes"),
//   "gear": document.getElementById("#gear"),
//   "juice": document.getElementById("#supplements"),
// };
// ​
// products.forEach(function(productCategory) {
//   let categoryProducts = products[productCategory];
// ​
//   for (let i = 0; i < categoryProducts.length; i++) {
//       const product = products[i];
  
//       const card = document.createElement("div");
//       card.setAttribute("class", "product-card");
  
//       const image = document.createElement("img");
//       image.setAttribute("src", product.image);
  
//       const name = document.createElement("h2");
//       name.innerHTML = product.name;
  
//       const description = document.createElement("p");
//       description.innerHTML = product.description;
  
//       const price = document.createElement("span");
//       price.innerHTML = product.price;
  
//       const button = document.createElement("button");
//       button.innerHTML = "Buy Now";
//       button.addEventListener("click", () => {
//           alert("you clicked me");
//       });
  
//       card.appendChild(image);
//       card.appendChild(name);
//       card.appendChild(description);
//       card.appendChild(price);
//       card.appendChild(button);
  
//       containers[productCategory].appendChild(card);
//   }
// });
