/* On crée une classe Contact - Etapes 1 à 5 du TP */
class Contact {

    /* On initialise dans cette classe Contact le constructor avec un nom, un prénom, un email et une id */
    constructor(name = "", firstName = "", email = "", id ="") {
        /* On passe une valeur ET un type pour permettre le contrôle des éléments saisis via la méthode checkField ci-dessous */
        this.name = name !== "" ? this.checkField(name, "name") : ""; 
        this.firstName = firstName !== "" ? this.checkField(firstName, "firstName") : "";
        this.email = email !== "" ? this.checkField(email, "email") : "";
        this.id = id;
    }

    setFromForm(name, firstName, email) {
        this.name = this.checkField(name, "name"); 
        this.firstName = this.checkField(firstName, "firstName");
        this.email = this.checkField(email, "email");
    }

    setFromJSON(element) {
        this.name = element.name;
        this.firstName = element.firstName;
        this.email = element.email;
        this.id = element.id;
    }

    /* On crée une première méthode permettant d'afficher les infos contacts */
    displayInfo() {
        return 'Name : ' + this.name + ' First Name : ' + this.firstName +  ' Email ';
    }

    modify(name, firstName, email) {
        this.name = this.checkField(name, "name");
        this.firstName = this.checkField(firstName, "firstName");
        this.email = this.checkField(email, "email");
    }

    /* On crée une seconde méthode permettant le contrôle des infos saisies pour contact dans le main en passant par la valeur et le type de ce qu'on souhaite contrôler */
    checkField(value, type) {
        /* On a recours à un switch pour un contrôle successif, en cascade, des "types" prévus au constructeur dans 2 cas de figure */
        switch(type) {
            case "email":
                /* Pour le mail on utilise une expression régulière pour le format d'un email valide : si la valeur du mail est fausse, 
                soit non conforme à l'expression régulière, on entre dans l'alternative de la condition, sinon l'email est valide */
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) === false)
                {
                    /* Dans le cas où l'email est invalide, un prompt apparaît permettant à l'utilisateur de saisir une nouvelle adresse mail */
                    let input = prompt("L'email " + value + " est incorrect, veuillez saisir un email valide !");
                    /* Une fois enregistrée, on retourne le contrôle de cette nouvelle valeur */
                    return this.checkField(input, type);
                }
                else
                {   
                    /* Sinon le mail est valide et on retourne la valeur */
                    return value;
                }
            
            case "name":
                /* Vérification de la longueur minimum (2) du nom et correction via un prompt */
                if (value.length <= 2)
                {
                    /* On déclare une variable promptQuestion avec une condition intégrée si le champs est vide, sinon on indique que le nom est invalide si <= 2 strings */
                    let promptQuestion = (value == "") ? "Le champ nom est vide, merci de le remplir" : "Le nom est invalide, veuillez saisir un nom comportant au moins 3 caractères";
                    /* on déclare une nouvelle variable pour afficher la question du prompt en fonction du cas de figure */
                    let input = prompt(promptQuestion);
                    /* on retourne la saisie faite via le prompt */
                    return this.checkField(input, type);
                }
                else
                {
                    /* Sinon on retourne initialement la valeur saisie */
                    return value;
                }
            
            case "firstName":
                /* Vérification de la longueur minimum (2) du prénom et correction via un prompt */
                if (value.length <= 2)
                {
                    /* On déclare une variable promptQuestion avec une condition intégrée si le champs est vide, sinon on indique que le prénom est invalide si <= 2 strings */
                    let promptQuestion = (value == "") ? "Le champ nom est vide, merci de le remplir" : "Le prénom est invalide, veuillez saisir un nom comportant au moins 3 caractères";
                    /* on déclare une nouvelle variable pour afficher la question du prompt en fonction du cas de figure */
                    let input = prompt(promptQuestion);
                    /* on retourne la saisie faite via le prompt */
                    return this.checkField(input, type);
                }
                else
                {
                    /* Sinon on retourne initialement la valeur saisie */
                    return value;
                }

           
            /*default:

                if (value.length <= 2)
                {
                    let typeName = (type =="name") ? "nom" : "prénom";
                    let promptQuestion = (value == "") ? "Le champ " + typeName + " est vide, merci de le remplir" : "Le " + typeName + " " + value + " est invalide. Veuillez saisir un " + typeName + " comportant au moins 3 caractères !";
                    let input = prompt(promptQuestion);
                    return this.checkField(input, type);
                }
                else
                {
                    return value;
                }*/
        }
    }
}

