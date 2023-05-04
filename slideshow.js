let currentSlide = 0;
const slide= document.querySelectorAll(".pics img");
const slideCount = slide.length;

function showSlide(index) {
    if (index<0){
        index =slideCount - 1;
    } 
    if (index>= slideCount) {
        index = 0;
    }
    for (let i = 0; i < slideCount; i++) {
        slides[i].style.display = "none";
    }
    slide[index].style.display = "block";
    currentSlide = index;
} 

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide -1);
}

showSlide(currentSlide);