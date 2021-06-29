// Je récupère mes données:

var TotalCompteur = document.querySelector("#count");
// console.log( "total messages", TotalCompteur);
var input = document.querySelector("#add-message");
// console.log("new message", NewMessage);
var Button = document.querySelector("#btn-add");
// console.log("click detecte", Button);
var messages = document.querySelectorAll("p");
// console.log("tableau message déjà tapé", messages);
var photo = document.querySelectorAll(".avatar")
// console.log("tableau photo personne", photo);
var nom = document.querySelectorAll("h6")
// console.log("tableau des prenoms", nom);
var Allprofil = document.querySelectorAll("div") 
// console.log(Allprofil);


// mettre à jour le compteur :
console.log("message déjà tapé :", messages.length); // récupérer le nb de <p> du tableau de la variable "message" avec ".length"
console.log("compteur actuel :", TotalCompteur.textContent); // récupérer le nb d'element de la variable "TotalCompteur" avec ".textContent" car se n'est pas 1 tableau comme la variable "message"!
TotalCompteur.textContent = messages.length; // mettre à jour le compteur en ajoutant les <p> de la variable "messages"
console.log("compteur après ajout :", TotalCompteur.textContent);

console.log("NOUVELLE ETAPE");

// capte les clicks s/ le picto POUBELLE :
var poubelle = document.querySelectorAll(".trash")
console.log(poubelle);

// clicker s/ chaque poubelle et la supprimer
for ( var i = 0 ; i < poubelle.length ; i++){
    poubelle[i].addEventListener("click", function(){
    // console.log("click poubelle"); // détécte le click s/ la poubelle
    this.parentNode.remove(); // ".parentNode" => permet d'appeler la <div> qui englobe la poubelle et ".remove()" permet de supprimer.
    // console.log("sup poubelle");
    var messages = document.querySelectorAll("p") // il faut redéfinir la variable ds la boucle reprendre le nb de message <p> 
    TotalCompteur.textContent = messages.length; //  pour pouvoir mettre à jour le compteur !
    })

}

console.log("NOUVELLE ETAPE");

// capte les clicks s/ le boutton "add":

// générer un new message avec un new profil le NOTRE!
Button.addEventListener("click", function(){
    console.log("click bouton détecté");
        // il faut RE-Crée et rajouter un profil complet (<div class "row">) pr crée un message
        var moi = document.createElement("div"); // recrée la <div class = "row"> du HTML
        moi.className = "row" // la nommé <class = "row">
        var avatar = document.createElement("img") // recrée la balise <img> du HTML
        avatar.className = "avatar" // la nommé <class = "avatard">
        avatar.src = "avatar-2.jpg" // intégrer l'image
        moi.appendChild(avatar) // venir intégrer la balise img=> "avatar" à la div"row"=> "moi" au dessus
        var container = document.createElement("div")
        moi.appendChild(container)
        var titre = document.createElement("h6")
        titre.textContent = "Jennifer Vinchon-Six"
        container.appendChild(titre)
        var paragraphe = document.createElement("p")
        paragraphe.textContent = input.value
        container.appendChild(paragraphe)
        var poubelle = document.createElement("img")
        poubelle.className = "trash"
        poubelle.src = "trash.png"
        moi.appendChild(poubelle)

        document.body.appendChild(moi); // ATTENTION NE PAS OUBLIER d'integrer au HTML ma <"div"><"row"> => "var moi" ds mon "BODY" de HTML
        console.log(moi);

        // Clean son input
        input.value = ""

            // EVENEMENT ds EVENEMENT : clicker s/ la poubelle pr la supprimer
            poubelle.addEventListener("click", function(){
            // console.log("click poubelle"); // détécte le click s/ la poubelle
            this.parentNode.remove(); // ".parentNode" => permet d'appeler la <div> qui englobe la poubelle et ".remove()" permet de supprimer.
            // console.log("sup poubelle");
            var messages = document.querySelectorAll("p") // il faut redéfinir la variable ds la boucle reprendre le nb de message <p> 
            TotalCompteur.textContent = messages.length; //  pour pouvoir mettre à jour le compteur !
            })
        
            // Bonus intégrer le message en 1ére position:
    
            var targetSecondRow = document.querySelectorAll('.row')[1];
            targetSecondRow.after(moi);

        var messages = document.querySelectorAll("p") // il faut redéfinir la variable pr mon compteur ds la boucle reprendre le nb de message <p> 
        TotalCompteur.textContent = messages.length;
})

console.log("FIN");


