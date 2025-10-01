/**
 * Event submit
 * event.preventDefault()
 * HTMLInputElement.value
 * String.prototype.trim()
 * regex
 * RegexExp.prototype.test()
 */


/**
 * 1 .Je recupère
 *      - le formulaire
 *      - le champ prenom
 *      - le champ nom
 *      - le champ email
 *      - le champ message
 */
const form = document.getElementById("formulaire");
/*const prenom = document.getElementById("prenom");
const nom = document.getElementById("nom");
const email = document.getElementById("email");
const message = document.getElementById("message");*/

// 2. Lorsque le formulaire est soumit (clique du bouton submit ou touche ENTER)
form.addEventListener("submit",function(event){
    // 3. J'annule le comportement par défaut du formulaire  : qui consiste à envoyer une requete http GET à l'adresse de l'attribut action du formualire et donc recharger la page
    event.preventDefault();
    
    const data = new FormData(form)
    const prenomStr = data.get('prenom')
    const nomStr = data.get('nom')
    const mailStr= data.get('email')
    const messageStr =data.get('message')
    
    
    if(!(prenomStr.length > 2) || !(prenomStr.length <= 20) ){
        
        const prenom = document.querySelector("#prenom")
        console.log(prenom)
        prenom.classList.remove("invisible")
        
    }else{
        
        prenom.classList.add("invisible")
        
    }
    
    if(!(nomStr.length > 2) || !(nomStr.length <= 20) ){
        
        const nom = document.querySelector("#nom")
        console.log(nom)
        nom.classList.remove("invisible")
        
    }else{
        
        nom.classList.add("invisible")
        
    }
    
    if(isValidEmail(mailStr)){
        
        const mail = document.querySelector("#mail")
        console.log(mail)
        mail.classList.remove("invisible")
        
    }else{
        
        mail.classList.add("invisible")
        
    }
    
    if(!(messageStr.length > 10) || !(messageStr.length <= 100) ){
        
        const message = document.querySelector("#message")
        console.log(message)
        message.classList.remove("invisible")
    }else{
        
        message.classList.add("invisible")
        
    }
    /*addError()
    function addError(){
    prenom.classList.toggle("invisible")
    nom.classList.toggle("invisible")
    mail.classList.toggle("invisible")
    message.classList.toggle("invisible")
    }*/
});

/**
 * HELPERS FUNCTIONS
*/
/**
 * Renvoie vrai si la string email passé en paramètre correspond à une adresse email valide.
 */
function isValidEmail(email){
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Création d'un objet RegexExp
    if (emailFormat.test(email))
    {
        return true;
    }else{
        return false
    }
}


/**
 * BONUS HORS ACTIVITE *********************************************
 * Envoyer un mail
 */
/**
 * sendMail : Fonction qui permet d'envoyer un mail
 */
function sendMail(message,from){
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: `{"message":"${message}","from":"${from}"}`
      };
      
    fetch('http://localhost:3000/sendmail', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}