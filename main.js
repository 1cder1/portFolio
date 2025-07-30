function soundButton() {
    const clickSound = new Audio("mouseClick.mp3");
    clickSound.volume = 0.5;
    clickSound.play();
}

dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();

        pos3 = e.clientX;
        pos4 = e.clientY;

        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;


    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";


    let clone = elmnt.cloneNode(true);
    clone.style.position = "absolute";
    clone.style.top = elmnt.style.top;
    clone.style.left = elmnt.style.left;
    clone.style.opacity = "1";
    document.body.appendChild(clone);

    setTimeout(() => {
        clone.remove();
    }, 50);
}
    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function showAboutMe() {
    let aboutMeDiv = document.getElementById("aboutMeDiv");
    aboutMeDiv.style.display = "block";
    dragElement(aboutMeDiv);
}

function showLinks() {
    let aboutMeDiv = document.getElementById("linksDiv");
    aboutMeDiv.style.display = "block";
    dragElement(aboutMeDiv);
}

function showWork() {
    let aboutMeDiv = document.getElementById("workDiv");
    aboutMeDiv.style.display = "block";
    dragElement(aboutMeDiv);
}

function showContact() {
    let aboutMeDiv = document.getElementById("contactDiv");
    aboutMeDiv.style.display = "block";
    dragElement(aboutMeDiv);
}


function aboutClosePopUp() {

    document.getElementById("aboutMeDiv").style.display = "none";
}

function linksClosePopUp() {

    document.getElementById("linksDiv").style.display = "none";
}

function workClosePopUp() {

    document.getElementById("workDiv").style.display = "none";
}


function contactClosePopUp() {

    document.getElementById("contactDiv").style.display = "none";
}

let audio = new Audio('backgroundMusic.mp3');
audio.loop = true;
let isPlaying = false;

function playBkMusic() {
    if (!isPlaying) {
        audio.volume = 0;
        audio.play();
        let fadeIn = setInterval(() => {
            if (audio.volume < 1) {
                audio.volume = Math.min(audio.volume + 0.05, 1);
            } else {
                clearInterval(fadeIn);
            }
        }, 100);
    } else {
        let fadeOut = setInterval(() => {
            if (audio.volume > 0) {
                audio.volume = Math.max(audio.volume - 0.05, 0);
            } else {
                clearInterval(fadeOut);
                audio.pause();
            }
        }, 100);
    }
    isPlaying = !isPlaying;
}

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let indervalId = null;

initializeSlider();
function initializeSlider(){

    if(slides.length > 0 ) {
        slides[slideIndex].classList.add("displaySlide");
    }

}

function showSlide(index){

    if(index >= slides.length){
        slideIndex = 0;
    } else if(index < 0) {
        slideIndex = slides.length - 1;
    }


    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}

