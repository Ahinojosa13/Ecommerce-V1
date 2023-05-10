let i = 0;
var pictures = [];
var time = 2000;
pictures[0] ="/images/pro.webp" //juice
pictures[1] ="/Images/anime.webp" //clothes
pictures[2] ="/images/nike.webp" //gear
pictures[3] ="/images/beats.webp" //accessories

function autoplay(){
    document.slide.src = pictures[i];
    if(i < pictures.length - 1){
        i++;
    }else{
        i = 0; //Starts over
    }
    setTimeout("autoplay()", time);
}
window.onload=autoplay;