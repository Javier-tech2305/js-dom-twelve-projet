/*
Nouvelles compétences:
 - Font awesome
 - type Boolean
 - if else
 - HTMLElement.classList
    - toggle Inverse l'etat de la classe : present ou pas
    * add
    * remove
    * replace
*/

// 1. Je recupere l'icone smiley

const emoji_elemnt = document.querySelector("#emoji");

// 2. Je recupere le bouton ABONNER

const btn_elemnt = document.querySelector(".btn-sub");

// 3. Je défini une variable binaire qui exprime l'etat abonné ou non de l'utilisateur

const siAbone = false;

// 4. J'ecoute le clique sur l'icone smiley

emoji_elemnt.addEventListener("click", function(){

   
    emoji_elemnt.classList.toggle("fa-face-smile");
    emoji_elemnt.classList.toggle("happy");

})




// 5. J'ecoute l'evenemment click sur le bouton ABONNEZ

btn_elemnt.addEventListener("click",function(){

    if(!siAbone){
        btn_elemnt.classList.remove("btn-sub");
        btn_elemnt.classList.add("abonne");
        btn_elemnt.innerText = "Abonne"
    }
})