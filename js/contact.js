/* On crée une classe Contact - Etapes 1 à 5 du TP */
class Contact {

    /* On initialise dans cette classe Contact le constructor avec un nom, un prénom et un email */
    constructor(name, firstName = "", email = "") {
        /* On passe une valeur ET un type pour permettre le contrôle des éléments saisis via la méthode checkField ci-dessous */
        this.name = this.checkField(name, "name"); 
        this.firstName = this.checkField(firstName, "firstName");
        this.email = this.checkField(email, "email");
    }

    /* On crée une première méthode permettant d'afficher les infos contacts */
    displayInfo() {
        return `Name : ${this.name} First Name : ${this.firstName} Email : ${this.email}`;
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
           
            default:
                /* Puis on utilise "default" pour tester successivement les types restants prévus au constructor : nom et prénom */
                /* Si le string value est inf. ou = 2 alors on entre dans l'alternative de la condition */
                if (value.length <= 2)
                {
                    /* On initialise une variable typeName afin de distinguer si la valeur est un nom, sinon c'est un prénom (ternaire) */
                    let typeName = (type =="name") ? "nom" : "prénom";
                    /* On initialise une variable promptQuestion ayant recours à la variable typeName qui permettra l'affichage d'un message d'erreur dans le prompt */
                    let promptQuestion = (value == "") ? "Le champ " + typeName + " est vide, merci de le remplir" : "Le " + typeName + " " + value + " est invalide. Veuillez saisir un " + typeName + " comportant au moins 3 caractères !";
                    /* On initialise une variable input pour lancer le prompt qui utilisera la variable promptQuestion */
                    let input = prompt(promptQuestion);
                    /* Une fois enregistrée, on retourne le contrôle de cette nouvelle valeur */
                    return this.checkField(input, type);
                }
                else
                {
                    /* Sinon le nom et/ou le prénom est valide et on retourne la valeur */
                    return value;
                }
        }
    }
}

