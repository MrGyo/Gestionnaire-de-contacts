  /*editContact(email){

        alert('Vous êtes sur le point de modifier le contact ' + email);

        let contactName = document.getElementById('name');
        contactName.innerHTML += '<div class="info">' + 'Nom' + '</div>';
        contactName.innerHTML += '<div class="content">' + this.name + '</div>';

        let contactFirstName = document.getElementById('first_name');
        contactFirstName.innerHTML += '<div class="info">' + 'Prénom' + '</div>';
        contactFirstName.innerHTML += '<div class="content">' + this.firstName + '</div>';

        let contactEmail = document.getElementById('name');
        contactEmail.innerHTML += '<div class="info">' + 'Email' + '</div>';
        contactEmail.innerHTML += '<div class="content">' + this.email + '</div>';

    }*/

    editContact(email) {

        alert('Vous êtes sur le point de modifier le contact ' + email);

        let contactsToEdit = this.contacts;

        let find = prompt("Entrer le mail du contact que vous souhaitez éditer : ");

        let contactsListFiltered = contactsToEdit.find(item => item.email == find);
        
        if (confirm('Vous êtes sur le point de modifier le contact ' + find +  ', êtes-vous sûr ?')) {

            let index = contactsToEdit.indexOf(contactsListFiltered);
            if (index>-1) { 
                let contactName = document.getElementById('name');
                contactName.innerHTML += '<div class="info">' + 'Nom' + '</div>';
                contactName.innerHTML += '<div class="content">' + this.name + '</div>';
                let contactFirstName = document.getElementById('first_name');
                contactFirstName.innerHTML += '<div class="info">' + 'Prénom' + '</div>';
                contactFirstName.innerHTML += '<div class="content">' + this.firstName + '</div>';
                let contactEmail = document.getElementById('name');
                contactEmail.innerHTML += '<div class="info">' + 'Email' + '</div>';
                contactEmail.innerHTML += '<div class="content">' + this.contacts.email + '</div>';
            } else {
                alert ('La modification du contact ' + find +  ' est annulée !');
            }
        }
    }

    /* On permet à l'utilisateur de supprimer un contact*/
    deleteContact() {
        /* On initialise une variable control qui renvoie au tableau de contacts */
        let contactsToDelete = this.contacts;
        /* On initialise une variable avec une fonction prompt pour la saisie de la question */
        let find = prompt("Entrer le mail du contact que vous souhaitez supprimer : ");
        /* On initialise une variable qui permet de filtrer le tableau pour vérifier si le mail y figure */
        let contactsListFiltered = contactsToDelete.find(item => item.email == find);
        if (confirm('Vous êtes sur le point de supprimer le contact ' + find +  ', êtes-vous sûr ?')) {
            /* On utilise la methode IndexOf de l'objet contacts qui va nous renvoyer  la valeur de l'index si l'objet passé en paramètre existe */
            let index = contactsToDelete.indexOf(contactsListFiltered);
            if (index>-1){
                contactsToDelete.splice(index, 1);
                console.log('Le contact ' + find + ' a été supprimé !');
                alert ('Le contact ' + find +  ' a été supprimé !');
                this.showAllHtml();
                document.getElementById("name").value = "";
                document.getElementById("first_name").value = "";
                document.getElementById("email_contact").value = "";
                document.getElementById("id").value = contact.id;
            } else {
                alert ('Saisie incorrecte !');   
            }
        } else {
            alert ('La suppression du contact ' + find +  ' est annulée !');
            }
    }

    
    deleteContact() {
        let contactsToDelete = document.getElementById("email_contact");
        if (confirm('Vous êtes sur le point de supprimer le contact, êtes-vous sûr ?')) {
            contactsToDelete.splice(index, 1);
            alert ('Le contact a été supprimé !');
            this.showAllHtml();
            document.getElementById("name").value = "";
            document.getElementById("first_name").value = "";
            document.getElementById("email_contact").value = "";
            document.getElementById("id").value = contact.id;
            } 
        else {
            alert ('La suppression du contact est annulée !');
        }
    }

    /* On permet à l'utilisateur de modifier un contact*/
modifyContact() {
    /* On initialise une variable control qui renvoie au tableau de contacts */
    let contactsToModify = this.contacts;
    /* On initialise une variable avec une fonction prompt pour la saisie de la question */
    let find = prompt("Entrer le mail du contact que vous souhaitez modifier : ");
    /* On initialise une variable qui permet de filtrer le tableau pour vérifier si le mail y figure */
    let contactsListFiltered = contactsToModify.find(item => item.email == find);
    
    if (confirm('Vous êtes sur le point de modifier le contact ' + find +  ', êtes-vous sûr ?')) {
        /* On utilise la methode IndexOf de l'iobjet contacts qui va nous renvoyer  la valeur de l'index si l'objet passé en paramètre existe */
        let index = contactsToModify.indexOf(contactsListFiltered);
        if (index>-1) { 
            let name = prompt("Quel est votre nom ?");
            let firstName = prompt("Quel est votre prénom ?");
            let email = prompt("Quelle est votre adresse email ?");
            let contact = new Contact(name, firstName, email);
            this.contacts.push(contact);
            contactsToModify.splice(index, 1);
            this.showAllHtml();
            document.getElementById("name").value = " " + contact.name;
            document.getElementById("first_name").value = " " + contact.firstName;
            document.getElementById("email_contact").value = " " + contact.email;
            document.getElementById("id").value = contact.id;
        } else {
            alert ('La modification du contact ' + find +  ' est annulée !');
        }
    }
}




/* On permet à l'utilisateur de modifier un contact*/
modifyContact() {
    let contactsToModify = this.contacts;
    let find = document.getElementById("email_contact").value;
    if (find === "") {
        alert ('Veuillez cliquer sur le contact à modifier !');
    } else {
        let contactsListFiltered = contactsToModify.find(item => item.email == find);
        if (confirm('Vous êtes sur le point de modifier le contact ' + find +  ', êtes-vous sûr ?')) {
        /* On utilise la methode IndexOf de l'iobjet contacts qui va nous renvoyer  la valeur de l'index si l'objet passé en paramètre existe */
        let index = contactsToModify.indexOf(contactsListFiltered);
            if (index>-1) { 
                let name = prompt("Quel est votre nom ?");
                let firstName = prompt("Quel est votre prénom ?");
                let email = prompt("Quelle est votre adresse email ?");
                let contact = new Contact(name, firstName, email);
                this.contacts.push(contact);
                contactsToModify.splice(index, 1);
                this.showAllHtml();
                document.getElementById("name").value = " " + contact.name;
                document.getElementById("first_name").value = " " + contact.firstName;
                document.getElementById("email_contact").value = " " + contact.email;
                document.getElementById("id").value = contact.id;
                alert ('La modification du contact ' + find +  ' est effectuée !');
            } else {
                alert ('La modification du contact ' + find +  ' est annulée !');
            }
        }
    } 
}


/* On permet à l'utilisateur de supprimer un contact*/
deleteContact() {
    let contactsToDelete = this.contacts;
    let find = document.getElementById("email_contact").value;
    if (find === "") {
        alert ('Veuillez cliquer sur le contact à supprimer !');
    } else {
        let contactsListFiltered = contactsToDelete.find(item => item.email == find);
        if (confirm('Vous êtes sur le point de supprimer le contact ' + find +  ', êtes-vous sûr ?')) {
        /* On utilise la methode IndexOf de l'objet contacts qui va nous renvoyer  la valeur de l'index si l'objet passé en paramètre existe */
            let index = contactsToDelete.indexOf(contactsListFiltered);
            if (index>-1){
                contactsToDelete.splice(index, 1);
                this.showAllHtml();
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


modifyContact() {
    /* On initialise une variable control qui renvoie au tableau de contacts */
    let contactsToModify = this.contacts;
    /* On initialise une variable avec une fonction prompt pour la saisie de la question */
    let find = document.getElementById("email_contact").value;
    /* On initialise une variable qui permet de filtrer le tableau pour vérifier si le mail y figure */
    let contactsListFiltered = contactsToModify.find(item => item.email == find);
    if (confirm('Vous êtes sur le point de modifier le contact ' + find +  ', êtes-vous sûr ?')) {
        /* On utilise la methode IndexOf de l'iobjet contacts qui va nous renvoyer  la valeur de l'index si l'objet passé en paramètre existe */
        let index = contactsToModify.indexOf(contactsListFiltered);
            if (index>-1) { 
                let name = prompt("Quel est votre nom ?");
                let firstName = prompt("Quel est votre prénom ?");
                let email = prompt("Quelle est votre adresse email ?");
                let contact = new Contact(name, firstName, email);
                this.contacts.push(contact);
                contactsToModify.splice(index, 1);
                this.showAllHtml();
                document.getElementById("name").value = " " + contact.name;
                document.getElementById("first_name").value = " " + contact.firstName;
                document.getElementById("email_contact").value = " " + contact.email;
                document.getElementById("id").value = contact.id;
                alert ('La modification du contact ' + find +  ' est effectuée !');
            } else {
                alert ('La modification du contact ' + find +  ' est annulée !');
            }
    }
}

deleteContact() {
    /* On initialise une variable control qui renvoie au tableau de contacts */
    let contactsToDelete = this.contacts;
    /* On initialise une variable avec une fonction prompt pour la saisie de la question */
    let find = document.getElementById("email_contact").value;
    /* On initialise une variable qui permet de filtrer le tableau pour vérifier si le mail y figure */
    let contactsListFiltered = contactsToDelete.find(item => item.email == find);
    if (confirm('Vous êtes sur le point de supprimer le contact ' + find +  ', êtes-vous sûr ?')) {
        /* On utilise la methode IndexOf de l'objet contacts qui va nous renvoyer  la valeur de l'index si l'objet passé en paramètre existe */
        let index = contactsToDelete.indexOf(contactsListFiltered);
        if (index>-1){
            contactsToDelete.splice(index, 1);
            this.showAllHtml();
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
