const mainNav = document.querySelector(".main-nav");
const toggleNav = document.querySelector(".main-nav__btn");
const getNavUl = document.querySelector(".main-nav__ul");
const getNavLis = document.querySelectorAll(".list-item");
const body = document.body;
const colorName = document.getElementById("color-name");
const defaultText = document.getElementById("color-name").innerHTML;


toggleNav.addEventListener("click", function() {
    getNavUl.classList.toggle("show-menu");
});

// HIERONDER STAAT EEN FUNCTIE OM HET MENU TE LATEN VERDWIJNEN ALS ER BUITEN HET MENU WORD GEKLIKT.

document.addEventListener("click", function(e){
    if (e.target !== toggleNav && !toggleNav.contains(e.target)) {
        getNavUl.classList.remove("show-menu");
    }

});

// HIERONDER GEBRUIK IK EEN EVENTLISTENTER MET "CHANGE" IPV "CLICK" OM HET MENU TE LATEN VERDWIJNEN, AANGEZIEN "CLICK" BLIJKBAAR NIET WERKT OMDAT ER LABELS OM DE LISTELEMENTEN ZITTEN VOOR DE RADIO BUTTONS.

getNavLis.forEach(item => {
    item.addEventListener("change", function() {
        getNavUl.classList.remove("show-menu");
    });
});

// DE ACHTERGRONDKLEUR & HTML WIJZIGEN WERKT WEL GEWOON MET EEN EVENTLISTENER MET "CLICK".

getNavLis[0].addEventListener("click", function(){
    body.style.backgroundColor = "lightgrey";
    colorName.innerHTML = defaultText;
});

getNavLis[1].addEventListener("click", function(){
    body.style.backgroundColor = "red";
    colorName.innerHTML = "Red"

});

getNavLis[2].addEventListener("click", function(){
    body.style.backgroundColor = "orange";
    colorName.innerHTML = "Orange"

});

getNavLis[3].addEventListener("click", function(){
    body.style.backgroundColor = "purple";
    colorName.innerHTML = "Purple"

});

getNavLis[4].addEventListener("click", function(){
    body.style.backgroundColor = "green";
    colorName.innerHTML = "Green"

});




