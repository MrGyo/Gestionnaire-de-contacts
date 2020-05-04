
class ContactManager{
    constructor(){
        this.contacts = [];
    }
    add(contact){
        this.contacts.push(contact);
    }

    //Bonus : Si l'email existe déjà, on a un message qui nous informe que l'email est déjà associé à un autre contact.
    delete(email){
    }

    displayContacts(){
        
        console.log(contacts);
        for (contact of contacts){
        }
    }

    createDiv(value){
        //var tamaman= '<li class="contact"><a href="#">John Doe</a></li>';
        //-- Creation balise (tag) li vide avec
        var newLi = document.createElement("li");
        //-- Ajout class contact
        newLi.className = 'contact';
        //-- Ajout texte a l'interieur de la balise
        newLi.innerHTML = '<a href="#">'+ value +'</a>';

        //-- Recuperation de la balise id contact_list et ajout de la nouvelle balise inside
        document.getElementById('contacts_list').appendChild(newLi);
    }
}

class Contact {
    constructor(name, firstName = "", email = "") {
        this.name = name;
        this.firstName = firstName;
        //Bonus : Si l'email existe déjà, on a un message qui nous informe que l'email est déjà associé à un autre contact.
        thi
        s.email = email;
    }
    displayInfo() {
        return ` Name : ${this.name} First Name : ${this.firstName} Email : ${this.email}`;
    }

    modify(){

    }

}
// comment générer l'intéraction entre un bouton html et le fichier js
// comment afficher une donnée js dans mon chteumeul
let contactManager = new ContactManager();
let myFirstContact = new Contact("Parker")
let mySecondContact = new Contact("Lewis")

contactManager.add(myFirstContact);
contactManager.add(mySecondContact);

console.log(myFirstContact.displayInfo())
console.log(mySecondContact.displayInfo())
contactManager.testDeFolie();
let newName = prompt("Entrez un autre nom");


/* RECAP
-> CRea prompt contact
-> insertion du contact dans le contactManager
-> Affichage des contacts dans la page html

*/


/*

A VOIR POUR VERIF NOM ET PRENOM

function verifPseudo(champ)
{
   if(champ.value.length < 2 || champ.value.length > 25)
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

AVOIR POUR VERIF EMAIL

function verifMail(champ)
{
   var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
   if(!regex.test(champ.value))
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}
*/

// let newName = prompt("Entrez un autre nom");



