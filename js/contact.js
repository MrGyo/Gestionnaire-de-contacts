// Création de la classe contact
class Contact {
    constructor(name, firstName = "", email = "") {
        //initialisation du constructor pour le nom, le prénom et l'email
        this.name = this.checkField(name, "name");
        this.firstName = this.checkField(firstName, "firstName");
        this.email = this.checkField(email, "email");
    }

    displayInfo() {
        return ` Name : ${this.name} First Name : ${this.firstName} Email : ${this.email}`;
    }

    // Dans cette méthode, value ET type sont toujours disponibles (image de la fonction (a, b) => a + b = 1 + 5)
    checkField(value, type) {
        switch(type) {
            case "email":
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) === false)
                {
                    let input = prompt("L'email est incorrect " + value + " , veuillez enter un email valide");
                    return this.checkField(input, type);
                }
                else
                {
                    return value;
                }
           
            default:
                if (value.length <= 2)
                {
                    let typeName = (type =="name") ? "nom" : "prénom";
                    let promptQuestion = (value == "") ? "Le champ est vide, merci de le remplir" : "Le " + typeName + " " + value + " est invalide (trop petit). Merci d'entrer un autre nom";
                    let input = prompt(promptQuestion);
                    return this.checkField(input, type);
                }
                else
                {
                    return value;
                }
        }
    }
}




