
// 1. Je recupere le burger
const burger = document.querySelector(".burger");
// 2. Je recupere la fenetre modal
const modal = document.querySelector(".modal");
//escucha el click en el burger
burger.addEventListener("click",
    function(){
        //cambia la clase a show modal 

        modal.classList.toggle("show-modal")
        // cambia la clase  gurger por fa-x 
        burger.classList.toggle("fa-x")

     
    }
)