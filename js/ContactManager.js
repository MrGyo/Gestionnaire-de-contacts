/* On crée une class ContactManager - Etapes 6 à 10 du TP */
class ContactManager {

    constructor(){
        /* On crée un tableau vide qui viendra s'agrémenter de nouveaux contacts créés grâce à la méthode addContact()*/
        this.contacts = [];
    }

    /* On crée la méthode qui initialise le programme de saisi du contact*/
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
            console.log('Nom : ' + contact.name + ', Prénom : ' + contact.firstName + ', Email : ' + contact.email);
        }
    }

    showAllHtml(){
        /* On déclare une variable qui va chercher l'id du ul où souhaite ajouter des li*/
        let contactList = document.getElementById('contacts_list');
        /* on vide systématiquement à chaque ajout pour éviter de rajouter de nouveau les contacts déjà saisis */
        contactList.innerHTML = "";
        /* On crée une boucle forEach pour l'affichage de chaque contact saisi */
        this.contacts.forEach (contact => {
            /* On crée l'élément li */
            let li = document.createElement("li");
            /* On indique que le contenu textuel de ce élément li est le nom et le prénom */
            li.textContent = contact.name + " " + contact.firstName;
            /* On donne une class "contact" à chaque élément li */
            li.classList.add("contact");
            /* On donne une id à chaque contact qui sa position dans l'array */
            li.id = "contact-" + contact.id;
            /* Lorsqu'on clique sur un utilisateur il apparaît dans le tableau de droite */
            li.addEventListener ("click", (e) => {
                document.getElementById("name").value = " " + contact.name;
                document.getElementById("first_name").value = " " + contact.firstName;
                document.getElementById("email_contact").value = " " + contact.email;
                document.getElementById("id").value = contact.id;
            } )
            /* on ajout un nouvel enfant li au parent ul */
            contactList.appendChild(li);
        })
    }

    /* On génère des prompts successifs pour ajouter un contact */
    addContact() {
        const name = prompt("Quel est votre nom ?");
        const firstName = prompt("Quel est votre prénom ?");
        /* Traitement particulier pour l'email car il faut vérifier qu'il n'ait pas déjà été saisi */
        /* On initialise une variable control qui renvoie au tableau de contacts */
        let emailToControl = this.contacts;
        const email = prompt("Quelle est votre adresse email ?");
        /* On initialise une variable qui permet de filtrer le tableau pour vérifier si le mail y figure */
        let emailListFiltered = emailToControl.find(item => item.email == email);
        /* On utilise la methode IndexOf de l'iobjet contacts qui va nous renvoyer  la valeur de l'index si l'objet passé en paramètre existe */
        let index = emailToControl.indexOf(emailListFiltered);

            if (index>-1) {
                alert ('L\email ' + email + ' est déjà utilisé !');
                return;
                } else {
                    console.log('mail valide');
                }
                
        /* On ajoute un nouveau contact au tableau du constructor */
        let contact = new Contact(name, firstName, email);
        /* l'id du contact est égal à sa place dans la saisie du formulaire */
        contact.id = this.contacts.length;

        /* On réalise un push pour envoyer le nouveau contact dans l'array contacts du constructor */
        this.contacts.push(contact);
        //-- Show contacts in DOM
        this.showAllHtml();
        /* On confirme l'ajout dans la console */
        console.log("Contact ajouté !");
    }

    /* On permet à l'utilisateur de modifier un contact*/
    modifyContact() {
        /* On déclare une variable renvoyant au tableau de contacts du formulaire */
        let contactsToModify = this.contacts;
        /* On déclare une variable find pour aller trouver le contact figurant dans la fiche contact à modifier */
        let find = document.getElementById("email_contact").value;
        /* Si l'email est vide c'est que l'utilisateur n'a pas cliqué sur un contact à modifier */
        if (find === "") {
            alert ('Veuillez cliquer sur le contact à modifier !');
        } else {
            /* Sinon on procède à la modification du contact en filtrant la liste des contacts sur la base du mail trouvé dans la fiche contact */
            let contactsListFiltered = contactsToModify.find(item => item.email == find);
            /* On demande une confirmation de modification */
            if (confirm('Vous êtes sur le point de modifier le contact ' + find +  ', êtes-vous sûr ?')) {
            /* On utilise la methode IndexOf de l'objet contacts qui va nous renvoyer la valeur de l'index si l'objet passé en paramètre existe */
            let index = contactsToModify.indexOf(contactsListFiltered);
                if (index>-1) { 
                    let name = prompt("Quel est votre nom ?");
                    let firstName = prompt("Quel est votre prénom ?");
                    let email = prompt("Quelle est votre adresse email ?");
                    /* Nouveau contact créé sur la base du constructor de Contact.js */
                    let contact = new Contact(name, firstName, email);
                    /* On ajoute le nouveau contact à la list de contacts */
                    this.contacts.push(contact);
                    /* On supprime l'ancienne version du contact qu'on souhaitait modifier */
                    contactsToModify.splice(index, 1);
                    /* On fait appel à la méthode showAllHtml pour afficher le contact dans le formulaire */
                    this.showAllHtml();
                    /* On attribue de nouvelles valeurs sur la base de la modification effectuée */
                    document.getElementById("name").value = " " + contact.name;
                    document.getElementById("first_name").value = " " + contact.firstName;
                    document.getElementById("email_contact").value = " " + contact.email;
                    document.getElementById("id").value = contact.id;
                    alert ('La modification du contact ' + find +  ' est effectuée !');
                } else {
                    alert ('Saisie incorrecte !');
                }
            } else {
                alert ('La modification du contact ' + find +  ' est annulée !');
            }
        } 
    }

     /* On permet à l'utilisateur de supprimer un contact*/
    deleteContact() {
        /* On déclare une variable renvoyant au tableau de contacts du formulaire */
        let contactsToDelete = this.contacts;
        /* On déclare une variable find pour aller trouver le contact figurant dans la fiche contact à supprimer */
        let find = document.getElementById("email_contact").value;
        /* Si l'email est vide c'est que l'utilisateur n'a pas cliqué sur un contact à supprimer */
        if (find === "") {
            alert ('Veuillez cliquer sur le contact à supprimer !');
        } else {
            /* Sinon on procède à la modification du contact en filtrant la liste des contacts sur la base du mail trouvé dans la fiche contact */
            let contactsListFiltered = contactsToDelete.find(item => item.email == find);
             /* On demande une confirmation de suppression */
            if (confirm('Vous êtes sur le point de supprimer le contact ' + find +  ', êtes-vous sûr ?')) {
            /* On utilise la methode IndexOf de l'objet contacts qui va nous renvoyer  la valeur de l'index si l'objet passé en paramètre existe */
                let index = contactsToDelete.indexOf(contactsListFiltered);
                if (index>-1){
                    /* On procède à la suppression du contact */
                    contactsToDelete.splice(index, 1);
                    /* On fait appel à la méthode showAllHtml experger du contact supprimé */
                    this.showAllHtml();
                    /* On attribue une valeur "vide" à chacun des types du contact */
                    document.getElementById("name").value = "";
                    document.getElementById("first_name").value = "";
                    document.getElementById("email_contact").value = "";
                    alert ('Le contact ' + find +  ' a été supprimé !');
                } else {
                    alert ('Saisie incorrecte !');   
                }
            } else {
                alert ('La suppression du contact ' + find +  ' est annulée !');
            }
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