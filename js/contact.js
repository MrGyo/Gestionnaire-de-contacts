// Création de la classe contact
class Contact {
    constructor(name, firstName = "", email = "") {
        this.name = name;
        this.firstName = firstName;
        this.email = email;
        // Bonus : Si l'email existe déjà, on a un message qui nous informe que l'email est déjà associé à un autre contact.
    }
    displayInfo() {
        return ` Name : ${this.name} First Name : ${this.firstName} Email : ${this.email}`;
    }
}

// Création de fonctions vérifiant que le nombre de caractères minimum du prénom et du nom
const nameVerification = (champ) => {
    if(champ.value.length <= 2)
    {
    return prompt("Entrez un autre nom");
    }
    else
    {
    return true;
    }
}

const firstNameVerification = (champ) => {
    if(champ.value.length <= 2)
    {
    return prompt("Entrez un autre prénom");
    }
    else
    {
    return true;
    }
}

// Création d'une fonction vérifiant la validité d'un mail
const verifMail = (champ) => {
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!regex.test(champ.value))
    {
    return (true)
    }
    alert("Adresse mail invalide !")
    return (false)
    }