
//1. Je recupere tout les switchs
let elem_switch = document.querySelectorAll(".switch")
console.log(elem_switch);

//2. Je recupere tout les elements html de ma page

//console.log(icon);
const all_element = document.querySelectorAll("*");
console.log(all_element);


//3. Je parcours tout les switchs

elem_switch.forEach(element=>

    element.addEventListener("click", function(){
    
    element.classList.toggle("darkmode");

    const icon = document.querySelectorAll(".icon");

    icon.forEach(icons=>

        icons.classList.toggle("fa-moon")
    )

    all_element.forEach(elements=>
        
        elements.classList.toggle("darkmode")

        )


    })
)

/*
//1. Je recupere tout les switchs
const switchbtns = document.querySelectorAll(".switch");

//2. Je recupere tout les elements html de ma page
const allElements = document.querySelectorAll("*");

//3. Je parcours tout les switchs
switchbtns.forEach(function(switchbtn){
    //4. Pour chaque switch, j'ecoute l'evenement "click" sur chaque switch
    switchbtn.addEventListener("click",function(){
        //5. je recupere toute les icones 
        const icones = document.querySelectorAll(".icon");
        //6. Je parcours les icones
        icones.forEach(function(icone){
            //7. J'inverse l'apparence de l'icone
            icone.classList.toggle("fa-moon");
        });
        //8. Je parcours tout les elements
        allElements.forEach(function(element){
            //9. j'applique le dark mode sur tout les elements
            
            element.classList.toggle("darkmode");
        });
    })
})


*/
