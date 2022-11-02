const mainNav = document.querySelector(".main-nav");
const toggleNav = document.querySelector(".main-nav__btn");
const getNavUl = document.querySelector(".main-nav__ul");
const body = document.body;
const colorName = document.getElementById("color-name");
const getNavSpan = document.querySelectorAll("span");
const getNavInput = document.querySelectorAll("input");
const homeLi = document.getElementById("li-home");

// HIERONDER STAAT EEN FUNTIE VOOR HET TOGGELEN VAN HET MENU ALS JE OP HET HAMBURGER ICOON KLIKT.

toggleNav.addEventListener("click", () => {
    getNavUl.classList.toggle("show-menu");
});

// HIERONDER STAAT EEN FUNCTIE OM HET MENU TE LATEN VERDWIJNEN ALS ER BUITEN HET MENU WORD GEKLIKT.

document.addEventListener("click", (e) => {
    if (e.target !== mainNav && !mainNav.contains(e.target)) {
        getNavUl.classList.remove("show-menu");
    }

});

// HIERONDER STAAN 2 FUNCTIES VOOR HET VERANDEREN VAN DE ACHTERGRONDKLEUR EN INNERHTML ALS JE OP DE MENUTEKST OF RADIOBUTTONS KLIKT.

getNavSpan.forEach(span => {
    span.addEventListener("click", () => {
        getNavUl.classList.remove("show-menu");
        colorName.innerHTML = span.id;
        body.style.backgroundColor = span.id;
    });
});

getNavInput.forEach(input => {
    input.addEventListener("click", () => {
        getNavUl.classList.remove("show-menu");
        colorName.innerHTML = input.nextSibling.id;
        body.style.backgroundColor = input.nextSibling.id;

    });
});

// HIERONDER STAAT EEN APARTE EVENTLISTENER VOOR HET HOME LISTELEMENT OMDAT IK DE ID "HOME" NIET DIRECT KAN GEBRUIKEN ALS ACHTERGRONDKLEUR.

homeLi.addEventListener("click", () => {
    body.style.backgroundColor = "lightgray";
});

