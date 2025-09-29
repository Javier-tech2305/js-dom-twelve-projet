/**
 * let
 * element.getAttribute()
 * element.setAttribute()
 * ++ operator
 * operateur ternaire
 */

// 1. Je recupere toutes les petites vignettes
const vignettes = document.querySelectorAll(".small");
// 2. Je recupere la grande photo
const fullImg = document.getElementById("full");

// 3. Je recupere le bouton AJOUTER
const btnAdd = document.querySelector(".btn-add");

// 4. Je recupere la balise vide de message d'ajout du panier
const panierMsg = document.querySelector(".panier-msg");
// 5. Je crée une variable qui contient le nombre de produits ajoutées ua panier
let panier = 0;

// ...

vignettes.forEach(vignette =>
    
    vignette.addEventListener("click", function(){
        
        const smallImag = vignette.getAttribute("src");
        const imag = fullImg.getAttribute("src");
        fullImg.setAttribute("src", smallImag);
        vignette.setAttribute("src",imag);
    })
)




btnAdd.addEventListener("click",function(){

    panier++;
    panierMsg.innerHTML = "Vous avez " + panier + " produits dans votre panier";
})

