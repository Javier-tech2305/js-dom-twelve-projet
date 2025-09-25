/*
Nouvelles compétences:
- querySelector // Selectionne le premier element seulement mieux que getElementsBy
- HTMLElement.style 
*/

// 1. Je recupere le bouton "Accepter les cookies"

const btn_cookies = document.querySelector(".btn-accept");
//console.log(btn_cookies);

// 2. Je recupere la banniere de cookies

const banniere = document.querySelector(".cookies");

// 3. J'ecoute l'evenement "click" sur le bouton "Accepter les cookies"

btn_cookies.addEventListener("click", function(event_obj){

    banniere.style.opacity = 0;

    
})