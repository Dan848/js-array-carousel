//Dato un array contenente una lista di cinque immagini, creare un carosello.

//Creo l'array contenente il nome del file img
const images = [
    `img/01.webp`,
    `img/02.webp`,
    `img/03.webp`,
    `img/04.webp`,
    `img/05.webp`
];
//Associo una variabile css alla lunghezza dell'array per suddividere equamente le immagini nel box thumbnails
document.documentElement.style.setProperty('--images-number', images.length);

//VARIABILI
const slider = document.querySelector(".slider");
const thumbnails = document.querySelector(".thumbnails");
let slides = ``;
let thumb = ``;
let imgIndex = 0;

//Ciclo For per inserire automaticamente le immagini nelle rispettive variabili...
for (let i = 0; i < images.length; i++) {
    slides += `<div class="slide">
    <img src="./${images[i]}" alt="Carosello-${i}"></div>`;
    thumb += `<div class="thumb">
    <img src="./${images[i]}" alt="Thumbnail-${i}"></div>`;
}
//...che andranno poi "aggiunte" ai rispettivi container
slider.innerHTML += slides;
thumbnails.innerHTML += thumb;

//Rendo già visibile la prima il primo elemento dell'array assegnando la classe "active"
addActive ();

//Collego all'evento click dei button le rispettive funzioni
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
prev.addEventListener("click", goPrev);
next.addEventListener("click", goNext);

//Gestisco la classe active "legandola" alla variabile imgIndex che controllo con le relative funzioni legate ai Button

//BUTTON NEXT
function goNext () {
    removeActive ();
    //Se imgIndex è pari al numero della posizione dell'ultimo elemento dell'array, riportalo al primo (che sarà sempre 0)
    if (imgIndex === images.length - 1) {
        imgIndex = 0;
    }
    //Altrimenti incrementa l'index
    else {
        imgIndex ++;
    }
    addActive ();
}

//BUTTON PREV
function goPrev () {
    removeActive ();
    //Se imgIndex è pari al numero della posizione del primo elemento dell'array, riportalo all'ultimo
    if (imgIndex === 0) {
        imgIndex = images.length - 1;
    }
    //Altrimenti decrementa l'index
    else {
        imgIndex --;
    }
    addActive ();
}

function removeActive () {
    document.querySelectorAll(".thumb")[imgIndex].classList.remove("active");
    document.querySelectorAll(".slide")[imgIndex].classList.remove("active");
}

function addActive () {
    document.querySelectorAll(".thumb")[imgIndex].classList.add("active");
    document.querySelectorAll(".slide")[imgIndex].classList.add("active");
}