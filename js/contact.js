// Création de la classe contact
class Contact {
    constructor(name, firstName = "", email = "") {
        //init constructor
        this.name = this.checkField(name, "name");
        this.firstName = this.checkField(firstName, "firstName");
        this.email = this.checkField(email, "email");
        // Bonus : Si l'email existe déjà, on a un message qui nous informe que l'email est déjà associé à un autre contact.
    }
    displayInfo() {
        return ` Name : ${this.name} First Name : ${this.firstName} Email : ${this.email}`;
    }
    checkField(value, type) {
        switch(type) {
            case "email":
 
                

            default:
                if (value.length <= 2)
                {
                    let typeName = (type =="name") ? "nom" : "prénom";
                    let promptQuestion = (value == "") ? "Le champ est vide, merci de le remplir" : "Le" + typeName + " " + value + " est invalide (trop petit). Merci d'entrer un autre nom";
                    let input = prompt(promptQuestion);
                    return this.checkField(input);
                }
                else
                {
                    return value;
                }
        }
    }
}




