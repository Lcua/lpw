var currentSlide = 1;
var home = null;
var music = null;
var coding = null;
var hola = null;

console.log(currentSlide);



function nextSlide() {
    switch(currentSlide) {
        case 1:
            currentSlide++;
            slideSelect();
            break;
        case 2:
            currentSlide++;
            slideSelect();
            break;
        case 3: 
            currentSlide++;
            slideSelect();
            break;
        case 4:
            currentSlide = 1;
            slideSelect();
            break;
    }
}

function prevSlide() {
    switch(currentSlide) {
        case 1:
            currentSlide = 4;
            slideSelect();
            break;
        case 2:
            currentSlide--;
            slideSelect();
            break;
        case 3:
            currentSlide--;
            slideSelect();
            break;
        case 4:
            currentSlide--;
            slideSelect();
            break;
    }
}

function slideSelect() {
    switch(currentSlide) {
        case 1:
            document.getElementById("screenhead1").classList.replace("hide-slide", "show-slide");
            document.getElementById("screenhead2").classList.replace("show-slide", "hide-slide");
            document.getElementById("screenhead3").classList.replace("show-slide", "hide-slide");
            document.getElementById("screenhead4").classList.replace("show-slide", "hide-slide");
            document.getElementById("screenbot1").classList.replace("hide-slide", "show-slide2");
            document.getElementById("screenbot2").classList.replace("show-slide2", "hide-slide");
            document.getElementById("screenbot3").classList.replace("show-slide2", "hide-slide");
            document.getElementById("screenbot4").classList.replace("show-slide2", "hide-slide");
            break;
        case 2:
            document.getElementById("screenhead1").classList.replace("show-slide", "hide-slide");
            document.getElementById("screenhead2").classList.replace("hide-slide", "show-slide");
            document.getElementById("screenhead3").classList.replace("show-slide", "hide-slide");
            document.getElementById("screenhead4").classList.replace("show-slide", "hide-slide");
            document.getElementById("screenbot1").classList.replace("show-slide2", "hide-slide");
            document.getElementById("screenbot2").classList.replace("hide-slide", "show-slide2");
            document.getElementById("screenbot3").classList.replace("show-slide2", "hide-slide");
            document.getElementById("screenbot4").classList.replace("show-slide2", "hide-slide");
            break;
        case 3:
            document.getElementById("screenhead1").classList.replace("show-slide", "hide-slide");
            document.getElementById("screenhead2").classList.replace("show-slide", "hide-slide");
            document.getElementById("screenhead3").classList.replace("hide-slide", "show-slide");
            document.getElementById("screenhead4").classList.replace("show-slide", "hide-slide");
            document.getElementById("screenbot1").classList.replace("show-slide2", "hide-slide");
            document.getElementById("screenbot2").classList.replace("show-slide2", "hide-slide");
            document.getElementById("screenbot3").classList.replace("hide-slide", "show-slide2");
            document.getElementById("screenbot4").classList.replace("show-slide2", "hide-slide");
            break;
        case 4:
            document.getElementById("screenhead1").classList.replace("show-slide", "hide-slide");
            document.getElementById("screenhead2").classList.replace("show-slide", "hide-slide");
            document.getElementById("screenhead3").classList.replace("show-slide", "hide-slide");
            document.getElementById("screenhead4").classList.replace("hide-slide", "show-slide");
            document.getElementById("screenbot1").classList.replace("show-slide2", "hide-slide");
            document.getElementById("screenbot2").classList.replace("show-slide2", "hide-slide");
            document.getElementById("screenbot3").classList.replace("show-slide2", "hide-slide");
            document.getElementById("screenbot4").classList.replace("hide-slide", "show-slide2");
            break;
    }
}