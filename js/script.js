const images = [
    `img/01.webp`,
    `img/02.webp`,
    `img/03.webp`,
    `img/04.webp`,
    `img/05.webp`
];

document.documentElement.style.setProperty('--images-number', images.length);
const slider = document.querySelector(".slider");
const thumbnails = document.querySelector(".thumbnails");
let slides = ``;
let thumb = ``;
let imgIndex = 0;

for (let i = 0; i < images.length; i++) {
    slides += `<div class="slide">
    <img src="./${images[i]}" alt="Carosello-${i}"></div>`;
    thumb += `<div class="thumb">
    <img src="./${images[i]}" alt="Thumbnail-${i}"></div>`;
}

slider.innerHTML += slides;
thumbnails.innerHTML += thumb;
document.querySelectorAll(".thumb")[imgIndex].classList.add("active");
document.querySelectorAll(".slide")[imgIndex].classList.add("active");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

prev.addEventListener("click", goPrev);
next.addEventListener("click", goNext);

function goNext () {
    document.querySelectorAll(".thumb")[imgIndex].classList.remove("active");
    document.querySelectorAll(".slide")[imgIndex].classList.remove("active");
    if (imgIndex === images.length - 1) {
        imgIndex = 0;
    }
    else {
        imgIndex ++;
    }
    document.querySelectorAll(".thumb")[imgIndex].classList.add("active");
    document.querySelectorAll(".slide")[imgIndex].classList.add("active");
}

function goPrev () {
    document.querySelectorAll(".thumb")[imgIndex].classList.remove("active");
    document.querySelectorAll(".slide")[imgIndex].classList.remove("active");
    if (imgIndex === 0) {
        imgIndex = images.length - 1;
    }
    else {
        imgIndex --;
    }
    document.querySelectorAll(".thumb")[imgIndex].classList.add("active");
    document.querySelectorAll(".slide")[imgIndex].classList.add("active");
}