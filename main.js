
// comment générer l'intéraction entre un bouton html et le fichier js
// comment afficher une donnée js dans mon chteumeul


class ContactManager{
    constructor(){
        this.contacts = [];
    }
    add(contact){
        this.contacts.push(contact);
    }
    //Bonus : Si l'email existe déjà, on a un message qui nous informe que l'email est déjà associé à un autre contact.
    delete(email){
    }
    displayContacts(){

    }
}

class Contact {
    constructor(name, firstName = "", email = "") {
        this.name = name;
        this.firstName = firstName;
        //Bonus : Si l'email existe déjà, on a un message qui nous informe que l'email est déjà associé à un autre contact.
        this.email = email;
    }
    displayInfo() {
        return ` Name : ${this.name} First Name : ${this.firstName} Email : ${this.email}`;
    }

    modify(){

    }

}

let myFirstContact = new Contact("Parker")
let mySecondContact = new Contact("Lewis")

let contacts = new ContactManager();
contacts.add(myFirstContact);
contacts.add(mySecondContact);

console.log(myFirstContact.displayInfo())


