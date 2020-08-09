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

function showHome() {
    document.getElementById("screenhead1").classList.replace("hide-slide", "show-slide");
    document.getElementById("screenhead2").classList.replace("show-slide", "hide-slide");
    document.getElementById("screenhead3").classList.replace("show-slide", "hide-slide");
    document.getElementById("screenhead4").classList.replace("show-slide", "hide-slide");
    document.getElementById("screenbot1").classList.replace("hide-slide", "show-slide2");
    document.getElementById("screenbot2").classList.replace("show-slide3", "hide-slide");
    document.getElementById("screenbot3").classList.replace("show-slide2", "hide-slide");
    document.getElementById("screenbot4").classList.replace("show-slide2", "hide-slide");
}

function showMusic() {
    document.getElementById("screenhead1").classList.replace("show-slide", "hide-slide");
    document.getElementById("screenhead2").classList.replace("hide-slide", "show-slide");
    document.getElementById("screenhead3").classList.replace("show-slide", "hide-slide");
    document.getElementById("screenhead4").classList.replace("show-slide", "hide-slide");
    document.getElementById("screenbot1").classList.replace("show-slide2", "hide-slide");
    document.getElementById("screenbot2").classList.replace("hide-slide", "show-slide3");
    document.getElementById("screenbot3").classList.replace("show-slide2", "hide-slide");
    document.getElementById("screenbot4").classList.replace("show-slide2", "hide-slide");
}

function showCoding() {
    document.getElementById("screenhead1").classList.replace("show-slide", "hide-slide");
    document.getElementById("screenhead2").classList.replace("show-slide", "hide-slide");
    document.getElementById("screenhead3").classList.replace("hide-slide", "show-slide");
    document.getElementById("screenhead4").classList.replace("show-slide", "hide-slide");
    document.getElementById("screenbot1").classList.replace("show-slide2", "hide-slide");
    document.getElementById("screenbot2").classList.replace("show-slide3", "hide-slide");
    document.getElementById("screenbot3").classList.replace("hide-slide", "show-slide2");
    document.getElementById("screenbot4").classList.replace("show-slide2", "hide-slide");
}

function showHola() {
    document.getElementById("screenhead1").classList.replace("show-slide", "hide-slide");
    document.getElementById("screenhead2").classList.replace("show-slide", "hide-slide");
    document.getElementById("screenhead3").classList.replace("show-slide", "hide-slide");
    document.getElementById("screenhead4").classList.replace("hide-slide", "show-slide");
    document.getElementById("screenbot1").classList.replace("show-slide2", "hide-slide");
    document.getElementById("screenbot2").classList.replace("show-slide3", "hide-slide");
    document.getElementById("screenbot3").classList.replace("show-slide2", "hide-slide");
    document.getElementById("screenbot4").classList.replace("hide-slide", "show-slide2");
}

function slideSelect() {
    switch(currentSlide) {
        case 1:
            showHome();
            break;
        case 2:
            showMusic();
            break;
        case 3:
            showCoding();
            break;
        case 4:
            showHola();
            break;
    }
}