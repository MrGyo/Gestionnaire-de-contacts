/* On crée une class ContactManager - Etapes 6 à 10 du TP */
class ContactManager {

    constructor(){
        /* On crée un tableau vide qui viendra s'agrémenter de nouveaux contacts créés grâce à la méthode addContact()*/
        this.contacts = [];
    }

    /* On crée de la méthode qui initialise le programme de saisi du contact*/
    init() {
        /* Affichage d'un message de bienvenue*/
        console.log("Bienvenue dans le formulaire de contacts !")
        /* Recours à la méthode displayMenu pour l'ouverture de la boîte de dialogue après initialisation*/
        this.displayMenu()
    }

    /* On montre tous les contacts du tableaux initié par le constructor grâce à une boucle for */
    showAll() {
        for (let contact of this.contacts) {
            /* Affichage un à un des contacts enregistrés dans l'array avec les 3 values nom, prénom et adresse mail */
            console.log(`Nom: ${contact.name}, Prénom: ${contact.firstName}, Email: ${contact.email}`);
        }
    }

    /* On génère des prompts successifs pour ajouter un contact */
    //-- @TODO Verifier que l'email n'existe pas déjà
    addContact() {
        const name = prompt("Quel est votre nom ?");
        const firstName = prompt("Quel est votre prénom ?");
        const email = prompt("Quelle est votre adresse email ?");

        /* On ajoute un nouveau contact au tableau du constructor */
        let contact = new Contact(name, firstName, email);

        /* On réalise un push pour envoyer le nouveau contact dans l'array contacts du constructor */
        this.contacts.push(contact);
        /* On confirme l'ajout dans la console */
        console.log("Contact ajouté !");
    }

    /* On permet à l'utilisateur de modifier un contact*/
    modifyContact() {
        let contactsToModify = this.contacts;
        let find = prompt("Entrer le mail du contact que vous souhaitez modifier : ");
        let contactsListFiltered = contactsToModify.find(item => item.email == find);
        
        if (confirm('Vous êtes sur le point de modifier le contact ' + find +  ', êtes-vous sûr ?')) {
            let index = contactsToModify.indexOf(contactsListFiltered);
            if (index>-1) { 

                let name = prompt("Quel est votre nom ?");
                let firstName = prompt("Quel est votre prénom ?");
                let email = prompt("Quelle est votre adresse email ?");
                let contact = new Contact(name, firstName, email);
                this.contacts.push(contact);
                contactsToModify.splice(index, 1);
                alert ('Le contact ' + firstName + ' a été ajouté !');
            } else {
                alert ('La modification du contact ' + find +  ' est annulée !');
            }
        }
    }

    /*
    modifyContact2() {
        let contactsToModify = this.contacts;
        let find = prompt("Entrer le mail du contact que vous souhaitez modifier : ");
        let contactsListFiltered = contactsToModify.find(item => item.email == find);

        if (confirm('Vous êtes sur le point de modifier le contact ' + find +  ', êtes-vous sûr ?')) {
            let index = contactsToModify.indexOf(contactsListFiltered);

            if (index>-1) { 
                contactsToModify[index].name = prompt("Quel est votre nom ?");
                contactsToModify[index].firstName = prompt("Quel est votre prénom ?");
                contactsToModify[index].email = prompt("Quelle est votre adresse email ?");
                alert ('Le contact ' + contactsToModify[index].firstName + ' a été ajouté !');
            } else {
                alert ('La modification du contact ' + find +  ' est annulée !');
            }
        }
    }*/


    /* On permet à l'utilisateur de supprimer un contact*/
    deleteContact() {
        let contactsToDelete = this.contacts;
        let find = prompt("Entrer le mail du contact que vous souhaitez supprimer : ");
        let contactsListFiltered = contactsToDelete.find(item => item.email == find);

        if (confirm('Vous êtes sur le point de supprimer le contact ' + find +  ', êtes-vous sûr ?')) {
            let index = contactsToDelete.indexOf(contactsListFiltered);
            if (index>-1){
                contactsToDelete.splice(index, 1);
                console.log('Le contact ' + find + ' a été supprimé !');
                alert ('Le contact ' + find +  ' a été supprimé !');
            } else {
                alert ('Saisie incorrecte !');   
            }
        } else {
            alert ('La suppression du contact ' + find +  ' est annulée !');
            }
    }
        
    /* On permet à l'utilisateur de quitter le programme */
    quit() {
        /* On procède à l'ouverture de la boîte de dialogue "confirm" pour demander confirmation à l'utilisateur s'il souhaite quitter ou non le programme */
        if(confirm('Vous êtes sur le point de quitter l\'application, êtes-vous sûr ?')) {
            console.log('Vous avez quitté l\'application, merci et à bientôt');
        } else {
            /* Sinon l'utilisateur retourne au menu */
            this.init();
        }
    }

    /* On crée un menu avec les 5 options en utilisant un switch case */
    displayMenu() {
        /* On procède à l'ouverture d'un prompt en demandant à l'utilisateur de choisir parmi 5 options */
        let userInput
        do { 
            userInput = prompt (`
            ################ MENU #################
            1 - Lister les contacts
            2 - Ajouter un nouveau contact
            3 - Modifier un contact existant
            4 - Supprimer un contact
            5 - Quitter le gestionnaire de contacts
            #######################################
            `);
        } while(!userInput);

        /* Les cas de figure prévus par le switch case : 5 possibilités */
        switch(userInput) {
            case '1':
                /* l'utilisateur a choisi de lister l'ensemble des contacts enregistrés */
                this.showAll();
            break;
            case '2':
                /* l'utilisateur a choisi d'ajouter un contact */
                this.addContact();
            break;
            case '3':
                /* l'utilisateur a choisi de modifier un contact */
                this.modifyContact();
            break;
            case '4':
                /* l'utilisateur a choisi de supprimer un contact */
                this.deleteContact();
            break;
            case '5':
                /* l'utilisateur a choisi de quitter l'application */
                this.quit();
            return;
            default:
                /* l'utilisateur n'a pas choisi une des options proposées */
                console.log("Désolé choix invalide!");
            break;
        }
        this.displayMenu();
    }
}