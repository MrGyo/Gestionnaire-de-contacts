/* Création d'un contact manager */
let contactManager = new ContactManager()

/* Initialisation du Contact Manager */
//contactManager.init()

const btnNew = document.getElementById('form_button_1');    // On récupère le bouton sur lequel on veut cliquer
btnNew.addEventListener('click', function() {          // On écoute l'événement 'click'
    contactManager.addContact();               // On lance la méthode via le contact manager pour ajouter un contact !"
});

/* Initialisation du Contact Manager */
/*contactManager.contacts.push( new Contact("Parker", "Joe","parker.joe@email.fr"));
contactManager.contacts.push( new Contact("Lee", "John", "john.lee@email.fr"));
contactManager.contacts.push( new Contact("Joe", "Bob", "joewilson@email.fr"));*/

contactManager.showAll();
contactManager.showAllHtml();
















