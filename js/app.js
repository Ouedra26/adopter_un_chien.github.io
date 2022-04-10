let compteur = 0 /* Le comteur qui montre l'image active */

let timer, composants, slides, slideWidth;
// On recupère le carousel

const carousel = document.querySelector('.carousel');

composants = document.querySelector('.composants');
// On clone la1 image
let firstImage = composants.firstElementChild.cloneNode(true);
// On inject le clone à la fin du carousel
composants.append(firstImage);

slides = Array.from(composants.children);
// On recupère la taille du carousel
slideWidth = carousel.getBoundingClientRect().width



// Flêches

let next = document.querySelector("#nav-droit");
let prev = document.querySelector("#nav-gauche");

// On gère le click
next.addEventListener("click", slideNext);
prev.addEventListener("click", slidePrev);

// On automatise le défilement

timer = setInterval(slideNext, 10000);

// cette fonction fait déliler l'image à droite
function slideNext() {
    // increment

    compteur++;
    composants.style.transiton = "1s linear";

    let decal = -slideWidth * compteur;
    composants.style.transform = `translateX(${decal}px)`;

    // On attend la fin de la transition et on rembobine
    setTimeout(function() {
        if (compteur >= slides.length - 1) {
            compteur = 0;
            composants.style.transiton = "unset";
            composants.style.transform = "translateX(0)";
        }
    }, 1000);
}
// Défilement à gauche
function slidePrev() {
    // On decrement

    compteur--;
    composants.style.transition = "1s linear";

    if (compteur < 0) {
        compteur = slides.length - 1;
        let decal = -slideWidth * compteur;

        composants.style.transiton = "unset";
        composants.style.transform = `translateX(${decal}px)`;
        setTimeout(slidePrev, 1);

    }

    let decal = -slideWidth * compteur;
    composants.style.transform = `translateX(${decal}px)`;
}