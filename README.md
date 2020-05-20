# tp_p5_oc

Exercice POO Javascript : Gestionnaire de contact
Dans cet exercice nous allons réaliser un gestionnaire de contacts. L'idée est dans un premier temps de réaliser quelque chose qui fonctionnera dans la console de notre navigateur. Puis nous travaillerons directement dans notre page web avec le DOM. Finalement nous travaillerons ave une API afin de sauvegarder à distance nos contacts.

Le point d'entrée de notre application se fera dans un fichier que vous appelerez main.js

Je vous invite à faire un Fork de ce repo et réaliser un commit à chaque étape réalisée.

1 - Créer une Classe Contact
La première étape de cet exercice sera de créer une classe Contact avec les caractéristiques suivantes :

* Un Nom
* Un Prénom
* Un email
Nous créérons la classe contact dans le fichier contact.js

Une fois la classe créée, nous pouvons générer un ou plusieurs contacts basés sur ce modèle dans le fichier main.js du projet. ( nous l'appelerons par la suite "le main" )

Dans le main générer un contact en y définissant uniquement son nom. Le nom sera appliqué par le constructor les autres caractéristiques peuvent être initialisées par défaut.

2 - Plusieurs contacts
Nous venons de créer une classe Contact et un objet basé sur cette classe. Nous pouvons en réalité créer une infinité d'objets à partir de la même classe.

Ajoutez un second contact dans le main et donnez-lui un nom différent pour pouvoir les différencier.

3 - Fiche d'information du Contact
Dans la classe contact, créer une méthode que l'on appellera displayInfo(). Cette méthode affiche le détail d'un contact :

"Nom : Antonio || Prénom: Aurélien || email: contact@aurelienantonio.com"

Une fois la méthode créée, retournez dans le main et demandez à chaque contact d'afficher ses informations en appelant : monContact.displayInfo() remplacer monContact par le nom de vos propres variables

4 - Vérification simple des données
Pouvoir créer de nouveaux contacts c'est bien, mais il est important de s'assurer que l'on ai un minimum de cohérence dans nos informations. Par exemple on ne veut pas que le nom ou le prénom fasse moins de 2 caractères.

Créer les fonctions nécessaires à la vérification du nom et du prénom. Lorsque l'on ajoute une nouvelle personne son nom comme son prénom ne doivent pas faire moins de 2 caractères. Sinon on demande à rentrer un nouveau nom via un prompt.

5 - Vérification des données via Regex (Expressions Régulières)
Maintenant que nous avons vérifié les données du nom et du prénom, créez une fonction qui va vérifier que le format d'email est correct.

6 - Mise en place du gestionnaire de contacts.
Mainteant que nous avons pris soin de notre contact, les données sont vérifiées, formatées. Nous voulons pouvoir de manière dynamique gérer nos contacts via un mini programme.

Créez la classe ContactManager. Cette classe gèrera une liste de contacts. On pourra, au lancement de l'application charger une liste de contacts. Créez une première méthode displayMenu() qui affichera dans une boite de dialogue un menu avec les options suivantes :

* 1 - Lister les contacts
* 2 - Ajouter un nouveau contact
* 3 - Modifier un contact existant
* 4 - Supprimer un contact
* 5 - Quitter le gestionnaire de contacts
Réalisez donc ce menu et faites en sorte que lorsque l'utilisateur choisisse l'option 5 le programme se termine.

7 - Gestionnaire de contacts : Lister les contacts
Créez maintenant la méthode qui nous permettra de lister les contacts que nous avons passé en paramètre à notre gestionnaire de contacts.

La liste des contacts d'affichera dans la console. Une fois la liste affichée, le menu du programme réaparait.

8 - Gestionnaire de contacts : Ajouter un contact
Maintenant créez la méthode qui nous permettra via un prompte simple d'ajouter un contact en ajoutant simplement son nom et son email. Attention il est important que le nom vérifie la condition minimale des 2 lettres et que l'email soit bien au format email.

Bonus : Si l'email existe déjà, on a un message qui nous informe que l'email est déjà associé à un autre contact.

9 - Gestionnaire de contacts : Supprimer un contact
Créez maintenant la possibilité de supprimer un contact de la liste. Libre à vous de choisir comment supprimer le contact, par contre il faut s'assurer que l'on ne supprime toujours qu'un contact à la fois.

10 - Gestionnaire de contacts : Modifier un contact
Maintenant nous désirons pouvoir changer les informations d'un contact. On doit pouvoir modifier, le nom, le prénom où l'email.

11 - Persister les données localement
Lorsque l'on ajoute, modifie ou supprime un contact, faire en sorte que la liste des contacts soit sauvegardée dans le localStorage.

Lorsque l'on relance l'application, nous récupérons les contacts présents dans le localStorage et nous intégrons à notre application

12 - Création d'une interface Graphique
En vous basant sur le design AdobeXD proposé ici, implémentez l'interface graphique.

13 - Connectez l'interface avec l'application
Maintenant que l'interface de l'application est créée, il est temps pour nous de connecter notre application à l'interface graphique. Cela va demander quelques modifications dans notre code.

1 - Afficher la liste des contacts présents dans l' application dans la liste présente à gauche de l'interface
2 - Lorsque l'on clique sur un contact afficher les détails du contact dans le cadre de droite. 
3 - Lorsque l'on clique sur "Modifier" donner la possibilité de modifier la fiche contact
4 - Lorsque l'on clique sur supprimer une fenêtre de confirmation nous demande de confirmer notre choix. Après confirmation le contact est supprim
