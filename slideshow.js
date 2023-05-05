const slide = document.querySelectorAll(".pics img");
const slideCount = slide.length;
let currentSlide = 0; // initialize to the index of the initial slide to show

function showSlide(index) {
    if (index < 0) {
        index = slideCount - 1;
    } 
    if (index >= slideCount) {
        index = 0;
    }
    for (let i = 0; i < slideCount; i++) {
        slide[i].style.display = "none"; // replace "slides" with "slide"
    }
    slide[index].style.display = "block";
    currentSlide = index;
} 

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Added event listeners to the next and previous buttons
document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".previous").addEventListener("click", prevSlide);

// Call showSlide() with the initial slide index
showSlide(currentSlide);
