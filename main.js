
// comment générer l'intéraction entre un bouton html et le fichier js
// comment afficher une donnée js dans mon chteumeul

class Contact {
    constructor(name, firstName = "", email = "") {
        this.name = name;
        this.firstName = firstName;
        this.email = email;
    }
    displayInfo() {
        return ` Name : ${this.name} First Name : ${this.firstName} Email : ${this.email}`;
    }
}

let myFirstContact = new Contact("Parker")
let mySecondContact = new Contact("Lewis")

console.log(myFirstContact.displayInfo())



