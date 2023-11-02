
1- Le POM (Project Object Model) est l'unité fondamental d'un projet Maven. c'est un fichier XML qui contient les informations concernant le projet ainsi que les les détails de configuration utilisés par Maven pour "builder" le projet.

Les configurations minimales nécessaires dans un fichier POM sont les suivantes:
- projet: l'élément racine
- modelVersion: version du POM (actuellement 4.0.0)
- groupId: l'id du groupe du projet (en général l'adresse url du site à l'envers ou le package)
- artifactId: le nom du projet
- version: version du projet
  
  # Les dossiers importants d'un projet maven

  ### src/main/java
  Ce dossier est utilisé pour stocker les codes sources Java. Il contient donc les classes qui constituent la logique de l'application.

  ### src/main/resources
  Ce dossier est utilisé pour stocker les ressources non-java dont l'application aura besoin. Ces ressources peuvent être dees fichiers de configuration, des fichiers XML, des images ...

  ### src/main/Webapp
  Ce dossier est utilisé spécifiquement pour les applications web. Il contient les ressources web telles que les fichiers HTML, CSS, JavaScript, JSP, Web.xml(appelé descripteur de déploiement) etc