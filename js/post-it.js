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