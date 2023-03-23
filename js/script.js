//Dato un array contenente una lista di cinque immagini, creare un carosello.


//FUNZIONI

//Funzione per aggiungere un array di classi a un elemento
function toggleClasses (element, classes) {
    for (const _class of classes) {
      element.classList.toggle(_class);
  }
  }
  
//Funzione per creare un tag HTML, assegnargli un array di classi e stampare al suo interno del testo
function createChild(tagName, classes, text) {
    const newElement = document.createElement(tagName);
    newElement.innerHTML = text;
    toggleClasses(newElement, classes);
    return newElement;
  }

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
    document.querySelectorAll(".carousel-subtitle")[imgIndex].classList.remove("active")
    document.querySelectorAll(".carousel-title")[imgIndex].classList.remove("active");
    document.querySelectorAll(".thumb")[imgIndex].classList.remove("active");
    document.querySelectorAll(".slide")[imgIndex].classList.remove("active");
}

function addActive () {
    document.querySelectorAll(".carousel-subtitle")[imgIndex].classList.add("active")
    document.querySelectorAll(".carousel-title")[imgIndex].classList.add("active");
    document.querySelectorAll(".thumb")[imgIndex].classList.add("active");
    document.querySelectorAll(".slide")[imgIndex].classList.add("active");
}

let intervalGoNext;
function startAutoplay() {
    intervalGoNext = setInterval (goNext, 4000);
}

function stopAutoplay () {
    clearInterval(intervalGoNext);
}

function addImages(element) {
    carousel.parentNode.insertBefore(createChild("h1", ["carousel-title", "mb-2"], `${element.imgName}`), carousel);
    carousel.parentNode.insertBefore(createChild("p", ["carousel-subtitle", "mb-5", "fs-"], `${element.subTitle}`), carousel);
    slides += `<div class="slide">
    <img src="./${element.src}" alt="Carosello-${element.imgName}"></div>`;
    thumb += `<div class="thumb">
    <img src="./${element.src}" alt="Thumbnail-${element.imgName}"></div>`;
}

//Creo l'array contenente il nome del file img
const images = [
    {
        src: `img/01.webp`,
        imgName: `Spider-man`,
        subTitle: `Dal dubbio colore`
    },
    {
        src: `img/02.webp`,
        imgName: `Ratchet & Clank Rift Apart`,
        subTitle: `Solo €80 su Amazon...solo eh`
    },
    {
        src: `img/03.webp`,
        imgName: `Credo sia Fortnite`,
        subTitle: `Non lo so, non ci gioco...ma perché c'è Darth Fener?`
    },
    {
        src: `img/04.webp`,
        imgName: `Stray`,
        subTitle: `Bellissimo gioco, bellissimo gatto`
    },
    {
        src: `img/05.webp`,
        imgName: `Gli Avengers`,
        subTitle: `...che hai ordinato su Wish... volevo dire della Marvel`
    }
];
//Associo una variabile css alla lunghezza dell'array per suddividere equamente le immagini nel box thumbnails
document.documentElement.style.setProperty('--images-number', images.length);

//VARIABILI PER CONTROLLARE GLI ELEMENTI DEL DOM
const slider = document.querySelector(".slider");
const thumbnails = document.querySelector(".thumbnails");
const carousel = document.querySelector(".full-carousel");

let slides = ``;
let thumb = ``;
let imgIndex = 0;
let titleImg = ``;

//Ciclo forEach per inserire automaticamente le immagini nelle rispettive variabili...

images.forEach(addImages)
// for (let i = 0; i < images.length; i++) {
//     slides += `<div class="slide">
//     <img src="./${images[i].src}" alt="Carosello-${i}"></div>`;
//     thumb += `<div class="thumb">
//     <img src="./${images[i].src}" alt="Thumbnail-${i}"></div>`;
// }
console.log(slides)
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

//Collego all'evento mouse Over lo stop all'autoplay...
carousel.addEventListener("mouseover", stopAutoplay);
carousel.addEventListener("mouseout", startAutoplay);

startAutoplay(); 