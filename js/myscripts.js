var currentSlide = 1;
var home = null;
var music = null;
var coding = null;
var hola = null;

console.log(currentSlide);

function dotSelect(i) {
    switch(i) {
        case 1:
            currentSlide = 1;
            slideSelect();
            break;
        case 2:
            currentSlide = 2;
            slideSelect();
            break;
        case 3:
            currentSlide = 3;
            slideSelect();
            break;
        case 4: 
            currentSlide = 4;
            slideSelect();
            break;
    }
}

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
    
    document.getElementById("dot1").classList.add("active");
    document.getElementById("dot2").classList.remove("active");
    document.getElementById("dot3").classList.remove("active");
    document.getElementById("dot4").classList.remove("active");
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

    document.getElementById("dot1").classList.remove("active");
    document.getElementById("dot2").classList.add("active");
    document.getElementById("dot3").classList.remove("active");
    document.getElementById("dot4").classList.remove("active");
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

    document.getElementById("dot1").classList.remove("active");
    document.getElementById("dot2").classList.remove("active");
    document.getElementById("dot3").classList.add("active");
    document.getElementById("dot4").classList.remove("active");
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
    
    document.getElementById("dot1").classList.remove("active");
    document.getElementById("dot2").classList.remove("active");
    document.getElementById("dot3").classList.remove("active");
    document.getElementById("dot4").classList.add("active");
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