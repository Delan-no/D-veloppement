## MVC - Model View Controller

Le Modèle-Vue-Contrôleur (EN: Model-View-Controller) est un modèle de conception (design pattern) cpiraùùe,t itomosé da,s me développement web pour aider à organiser le code et séparer différentes composantes d'une application. Il favorise l'idée de diviser une application en trois composants principaux: le Modèle, la Vue et le Controlleur. Chaque composant a un rôle et des responsabilités spécifiques, ce qui rend la base de code plus organisées, plus facile à entretenir et plus évolutive

  Voici une explication de chaque composant:
  1. Modèle: 
  Le modèle représente les données et la logique de votre application. Il est responsable de la gestion des données, telles que la récupération des données depuis une BDD, l'exécution de calculs et l'application des règles métiers.


  2. Vue :
  La Vue est responsable de l'affichage des donnnées à l'utilisateur . C'est ce que l'utilisateur voit et avec quoi il interagit. La vue prend les données du modele et présente sous une forme conviviale pour l'utilisateur, généralement sous forme de HTML , CSS, et parfois de JavaScript. Les vues sont principalement concernés par la présentation et ne contiennent généralement pas de logique complexe.

  3. Contrôleur:
  Le contrôleur agit comme un intermédiaire entre le modèle et la Vue. Il reçoit les entrées de l'utilisateur depuis la vue, les traite, interagit avec le Modèle pour récupérer ou mettre à jour les données, puis décide quelle vue présenter à l'utilisateur avec les données mises à jour. Le contrôleur contient la logique de l'application qui coordonne le flux de données entre le Modèle et la Vue.