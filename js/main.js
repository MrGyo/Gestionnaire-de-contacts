/* Création d'un contact manager */
let contactManager = new ContactManager()

/* Initialisation du Contact Manager */
//contactManager.init()

const btnNew1 = document.getElementById('form_button_1');
btnNew1.addEventListener('click', function() {
    contactManager.addContact();  
});

const btnNew2 = document.getElementById('form_button_2');
btnNew2.addEventListener('click', function() {
    contactManager.modifyContact();
});

const btnNew3 = document.getElementById('form_button_3');
btnNew3.addEventListener('click', function() {
    contactManager.deleteContact();
});

contactManager.showAll();
contactManager.showAllHtml();
















