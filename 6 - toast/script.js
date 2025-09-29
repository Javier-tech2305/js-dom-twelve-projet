/**
 * document.createElement()
 * element.classList.add()
 * element.innerHTML
 * elemParent.appendChild(elemEnfant)
 * element.remove()
 * setTimeout()
 */

// 1. Je recupere le bouton
const btn = document.querySelector("button");
// 2. Je recupere le conteneur de toasts
const ctnToasts = document.querySelector(".container-toasts");


function addtoast(){
   //onsole.log("qsdfsq");
    const toast =document.createElement("div");
    
    toast.innerHTML= "<p>Votre fichier est enregistre !</p>"
    ctnToasts.appendChild(toast);

    toast.classList.add("toast")
    
    setTimeout(() => {
       toast.remove();
    }, 600)
}

btn.addEventListener("click",function(){

   //onsole.log("qsdfsq");

    addtoast();

})
