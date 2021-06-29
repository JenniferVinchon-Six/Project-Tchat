Ceci est un sprint : Le client à besoin de son site fonctionnel pour 16h15 !


# Instructions : 


Mettre en place le compteur

Vous venez de mettre en place votre environnement de travail :

Lancement du serveur web (Back-end) via live server


## Préparer l’environnement JS

👉 Créez l'environnement JavaScript qui va permettre d’apporter l’interactivité à la page.

Nommez ce fichier script.js



## Mettre à jour le compteur avec JS et le DOM


👉  Trouvez le nombre de messages affichés sur la page. Pour cela, cherchez la balise qui représente un message.


👉  Mettez à jour la partie HTML faisant référence au compteur avec le nombre total de messages récupérés



## Supprimer des messages

Vous venez de mettre en place un compteur de messages totalement pris en charge par Javascript grâce au DOM.


L'objectif de cette 3ème étape: 

Toujours avec Javascript, mettre en place une mécanique permettant de supprimer un message lorsque l’on clique sur son picto poubelle.


Instructions


## Capter le clic de l’utilisateur

👉  Captez les clics de chaque picto poubelle


## Supprimer l’élément HTML représentant un message

Bravo! Le clic est désormais capté! 🙌


👉 Codez l’instruction de suppression de message  (nom, prénom, avatar, texte, picto poubelle) grâce au DOM. Pensez également à mettre à jour le compteur 😉


 Capter le clic de l’utilisateur

Grâce à la notion d'événement, nous allons pouvoir apposer un écouteur sur le bouton add afin de détecter les clics de l'utilisateur.


## Créer le message dans la liste

👉 Lorsque le clic sur le bouton add est capté, récupérez la valeur du champ input pour créer ensuite un nouveau message qui va se matérialiser dans la liste


Partez du principe que vous êtes l’auteur de ce message. Mettez votre propre nom et prénom. Pour l’avatar choisissez-en un au hasard dans la liste des 6 déjà disponibles (ou allez en chercher un sur Internet).



Vous êtes arrivé à récupérer grâce au JS le texte saisi, génial! C’est une belle étape.

Mais attention à ce stade, ce texte n’est pas encore matérialisé dans la liste des messages mais simplement dans votre fenêtre de debug JS. Encore quelques efforts pour y arriver. 😉


 👉 Matérialisez l'intégralité d’un message: avatar, nom, prénom, message, icône poubelle



 Vous vous rappelez que l’on peut créer de toutes pièces des nouvelles balises HTML sur la page grâce au JS. Il faudra l’exploiter. 😉




## Réinitialiser le champ de saisie

👉 A ce stade, on constate que lorsque le message est ajouté à l’interface graphique, le texte est toujours présent dans le champ de saisie ce qui pose un problème d’ergonomie. Il faut réinitialiser ce champ à chaque fois que le message est validé pour éviter de devoir le supprimer manuellement. A vous de jouer!



 Mettre à jour le compteur

Grâce au Javascript et au DOM, vous venez de créer une interaction vous permettant de capter les messages saisis et de les matérialiser dans la liste des messages existants.


L'objectif de cette 3ème étape : 

Avec l’ajout de la nouvelle fonctionnalité, on constate qu’un bug est apparu. 🙄

Le compteur n’est plus à jour…

A vous de jouer pour faire en sorte que le nouveau message soit pris en compte! 💥


Instructions


👉 Après avoir ajouté le message, ajoutez les instructions nécessaires pour mettre à jour le compteur.



##  Supprimer le nouveau message

Vous avez ajouté avec succès la nouvelle fonctionnalité permettant d’ajouter un nouveau message, vous avez également corrigé un petit bug lié au compteur, bravo! 🙌


Mais un autre bug est apparu : vous ne pouvez plus supprimer les nouveaux messages! Dans le développement informatique c’est très fréquent, une nouvelle fonctionnalité a un impact sur les anciennes, il faut donc être vigilant et surtout tester correctement l’application pour détecter le plus vite possible les bugs afin de les corriger.


Le nouveau message ajouté ne possède pas la fonctionnalité de suppression. En effet, lorsque l’on a décidé de mettre en place la suppression des messages, ce nouveau message n’était pas encore présent. Il faut donc ajouter cette mécanique à ce nouveau message une fois qu’il a été créé.


Instructions


👉 Captez les clics du nouveau picto poubelle nouvellement créé

👉 Supprimez l’intégralité du message (nom, prénom, avatar, texte, picto poubelle) grâce au DOM

👉 Et encore une fois il faudra mettre à jour le compteur 😉











