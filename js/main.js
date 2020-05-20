const LABEL_VAR_LOCAL_STORAGE = "contact_app_gyo";

/* Création d'un contact manager */
//let contactManager = new ContactManager()

let contactManager = new ContactManager()

var stringContacts = localStorage.getItem(LABEL_VAR_LOCAL_STORAGE);

if (stringContacts != undefined) {
    contactManager.loadLocal(stringContacts);
}

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
















