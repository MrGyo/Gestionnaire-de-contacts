// Création de la class ContactManager
class ContactManager {

    constructor(){
        // Création d'un tableau vide qui viendra s'agrémenter de nouveaux contacts créés grâce à la méthode addContact()
        this.contacts = [];
    }

    init() {
        console.log("Hey Welcome !")
        this.listChoice()
        this.userOptions()
    }

    // Création de la méthode listant les choix offerts à l'utilisateur
    listChoice()
        {
        var menu = `
        ################ MENU #################
        1 - Lister les contacts
        2 - Ajouter un nouveau contact
        3 - Modifier un contact existant
        4 - Supprimer un contact
        0 - Quitter le gestionnaire de contacts
        #######################################
        `;
        console.log(menu);
        };

    // Montrer tous les contacts du tableaux initié par le constructor grâce à une boucle for 
    showAll() {
        // for (let contact of contacts) à tester aussi car plus simple
        for (let contact of this.contacts) {
            // Affichage un à un des contacts enregistrés dans l'array avec les 3 values nom, prénom et adresse mail
            console.log(`Nom: ${contact.name}, Prénom: ${contact.firstName}, Email: ${contact.email}`);
        }
    }

    // Générer des prompts successifs pour ajouter un contact
    //-- @TODO Verifier que l'email n'existe pas deja
    addContact() {
        const name = prompt("Quel est votre nom ?");
        const firstName = prompt("Quel est votre prénom ?");
        const email = prompt("Quelle est votre adresse email ?");

        // Ajout d'un nouveau contact au tableau du constructor
        let contact = new Contact(name, firstName, email);

        // Réalisation d'un push pour envoyer le nouveau contact dans l'array contacts du constructor
        this.contacts.push(contact);
        // Confirmation de l'ajout
        console.log("Contact ajouté !");
    }

    // Modification d'un contact du formulaire
    modifyContact() {
        //-- @TODO: 
        //-- Renseigner un email pour trouver le contact -> une fois le contact trouvé dans le tableau, modifier en réutilisant la classe Contact si possible avec ces verifs de champs.
    }

    // Suppression d'un contact du formulaire
    deleteContact() {
        //-- @TODO: 
        //-- Renseigner un email pour trouver le contact -> une fois le contact trouvé dans le tableau this.contacts, puis l'effacer
    }

    // Permettre à l'utilisateur de quitter le programme
    quit() {
        // Ouverture de la boîte de dialogue confirm pour demander confirmation à l'utilisateur s'il souhaite quitter le programme
        if(confirm('Vous êtes sur le point de quitter l\'application, êtes-vous sûr ?')) {
            console.log('Vous avez quitté l\'application, merci et à bientôt');
        } else {
            // Sinon retour aux options offertes si l'utilisateur ne veut pas quitter le programme
            this.userOptions();
        }
    }

    // Création des options mis à disposition de l'utilisateur en utilisant un switch case
    userOptions() {
        console.log('Selectionner une option: \n1: Liste des contacts \n2: Ajouter un contact  \n0: Quitter');
        
        // Ouverture d'un prompt demandant à l'utilisateur de choisir parmi 3 options 
        let userInput
        
        do { 
            userInput = prompt("Selectionner une option:");
        } while(!userInput);
        
        /*while(!userInput)
        {
            userInput = prompt("Selectionner une option:")
        }*/
        
        // Les cas de figure prévu par le switch case : 3 possibilités 
        switch(userInput) {
            case '0':
                // l'utilisateur a choisi de quitter l'application
                this.quit();
                return;
            case '1':
                // l'utilisateur a choisi de lister l'ensemble des contacts enregistrés
                this.showAll();
            break;
            case '2':
                // l'utilisateur a choisi l'option ajouter un contact
                this.addContact();
            break;
            default:
                // l'utilisateur n'a pas choisi une des options proposées
                console.log("Désolé choix invalide!");
            break;
        }
        this.userOptions();
    }
}