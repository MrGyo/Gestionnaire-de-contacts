/* Création de trois contacts permettant de tester les vérifications 1, 2 et 3 */
/*let myFirstContact = new Contact("Parker", "Jo","parker.joe@email.fr")
let mySecondContact = new Contact("Le", "John", "john.lee.email.fr")
let myThirdContact = new Contact("Joe", "", "joewilson@email.fr.com")*/

/* Affichage dans la console des informations contacts */
/*console.log(myFirstContact.displayInfo())
console.log(mySecondContact.displayInfo())
console.log(myThirdContact.displayInfo())*/

/* Création d'un contact manager */
let contactManager = new ContactManager()

/* Initialisation du Contact Manager */
//contactManager.init()

const btnNew = document.getElementById('form_button_1');    // On récupère le bouton sur lequel on veut cliquer
btnNew.addEventListener('click', function() {          // On écoute l'événement 'click'
    contactManager.addContact();               // On lance la méthode via le contact manager pour ajouter un contact !"
});


/*contactManager.contacts.push( new Contact("Parker", "Joe","parker.joe@email.fr"));
contactManager.contacts.push( new Contact("Lee", "John", "john.lee@email.fr"));
contactManager.contacts.push( new Contact("Joe", "Bob", "joewilson@email.fr"));*/
// autre solution directe HTML old school <button type="submit" class="btn btn-primary float-right" id="form_button_1" </button>onclick="contactManager.addContact()">Nouveau</button>
contactManager.showAll();
contactManager.showAllHtml();












