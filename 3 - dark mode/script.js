/*
Nouvelles compétences:
- forEach
- querySelectorAll
*/

const btn_dark = document.querySelector(".btn");
btn_dark.addEventListener("click", function(){

    const all_elem = document.querySelectorAll("*");
    all_elem.forEach(all_elem =>
    all_elem.classList.toggle("darkmode") );
})
