const modal = document.querySelector(".modal")

console.log(modal)

function displayModal(){
    
 modal.style.display = "flex"
}

const modalQuit = document.querySelector(".modal-quit");

modalQuit.addEventListener("click",function(){

    modal.style.display = "none";
    
});

setTimeout(displayModal,3000)

