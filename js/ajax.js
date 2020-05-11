var request = new XMLHttpRequest();
request.open("GET", "http://url-service-web.com/api/users");
request.send();

/*
Voici ce que fait le code, ligne par ligne :

Ligne 1 : on crée un nouvel objet de type  XMLHttpRequest  qui correspond à notre objet AJAX. C'est grâce à lui qu'on va créer et envoyer notre requête ;
Ligne 2 : on demande à ouvrir une connexion vers un service web. C'est ici que l'on précise quelle méthode HTTP on souhaite, ainsi que l'URL du service web ;
Ligne 3 : on envoie finalement la requête au service web.
*/

// Récupérez les données au format JSON

/*
Un service web peut choisir le format qu'il veut pour nous renvoyer des données, mais le plus courant et le plus simple est le format JSON.

Qu'est-ce que le format JSON ?
JSON signifie JavaScript Object Notation. Il s'agit d'un format textuel 
(contrairement à un format binaire plus léger mais impossible à lire à l'œil humain), se rapprochant en termes de syntaxe de celui des objets dans le langage JavaScript.
*/

// objet JS suivant : 

const obj = {
    name: "Mon contenu",
    id: 1234,
    message: "Voici mon contenu",
    author: {
        name: "John"
    },
    comments: [
        {
            id: 45,
            message: "Commentaire 1"
        },
        {
            id: 46,
            message: "Commentaire 2"
        }
    ]
};

// donnne en JSON : 

{
    "name": "Mon contenu",
    "id": 1234,
    "message": "Voici mon contenu",
    "author": {
        "name": "John"
    },
    "comments": [
        {
            "id": 45,
            "message": "Commentaire 1"
        },
        {
            id: 46,
            "message": "Commentaire 2"
        }
    ]
}