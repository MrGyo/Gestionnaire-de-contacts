/* Création de trois contacts permettant de tester les vérifications 1, 2 et 3 */
let myFirstContact = new Contact("Parker", "Jo","parker.joe@email.fr")
let mySecondContact = new Contact("Le", "John", "john.lee.email.fr")
let myThirdContact = new Contact("Joe", "", "joewilson@email.fr.com")

/* Affichage dans la console des informations contacts */
console.log(myFirstContact.displayInfo())
console.log(mySecondContact.displayInfo())
console.log(myThirdContact.displayInfo())

/* Création d'un contact manager */
let contactManager = new ContactManager()

contactManager.init()









