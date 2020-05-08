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

    /* On modifie un contact du formulaire */
    modifyContact() {
        //-- @TODO: 
        //-- Renseigner un email pour trouver le contact -> une fois le contact trouvé dans le tableau, modifier en réutilisant la classe Contact si possible avec ces verifs de champs.
        
    }

    /* On supprime un contact du formulaire */
    
    /* SOURCE */ 
    /* var array = ['email@email.fr','gmail@gmail.com','js@js.net'];
    var remove = function(removeMail){
        var index = array.indexOf(removeMail);
        if (index>-1) {
            array.splice(index, 1);
        }
    }
    remove(prompt("Entrez le mail que vous souhaitez supprimer : "));
    console.log(array);*/

    deleteContact() {

        const contactsToFind = this.contacts

        console.log(contactsToFind)

        const find = prompt("Entrer le mail du contact que vous souhaitez supprimer : ");
        const contactsListFiltered = contactsToFind.find(item => item.email == find);
        const index = contactsToFind.indexOf(contactsListFiltered);

        if (index>-1) {
        contactsToFind.splice(index, 1);
        }
        else
        console.log("Saisi incorrecte")
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