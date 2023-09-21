<?php


// require("./generic_functions.php");

if (isset($_GET["file"]) && !empty($_GET["file"])) {
    $filePath = "upload/" . $_GET["file"];

    if (file_exists($filePath)) {
        // Définir les en-têtes pour forcer le téléchargement du fichier
        header("Content-Type: application/octet-stream"); // indique que le contenu est de type binaire et que le navigateur doit traiter le fichier comme un téléchargement plutôt  que de tenter de l'afficher dans le navigateur
        header("Content-Disposition: attachement; filename=" . basename($filePath));
        header("Content-Length: " . filesize($filePath));
        // Lire et afficher le contenu du fichier
        readfile($filePath);
    }else {
        // afficher un message d'erreur
        echo "Le fichier n'existe pas";
    }
}
