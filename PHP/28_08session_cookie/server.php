<?php
require "./generic_function.php";
define("MAX_SIZE", 3000000);


// L'utilisateur à uploader un fichier
if (isset($_POST['submit']) && isset($_FILES['photo_profile'])) {
    // récupérer les informations du fichier (nom, extension, chemin)

    $fileName = $_FILES['photo_profile']['name'];
    $tmpDir = $_FILES['photo_profile']['tmp_name'];

    $fileExtension = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));
    $allowedFiles = ["jpg", "jpeg", "png"];

    // ne accepter que les fichiers jpg, jpeg, png
    // les false en PHP : false, 0, 0.0, -0.0, [], "", null
    if(in_array($fileExtension, $allowedFiles)){
        //echo "bon fichier";  
        // vérifier qu'il n'y a pas d'erreurs
        if ($_FILES["photo_profile"]["error"] === 0) {

            if ($_FILES["photo_profile"] ["size"] <= MAX_SIZE) {
                // La taille est inférieur à 3M
            move_uploaded_file($tmpDir, "./upload/" . uniqid("img-"). "." . $fileExtension);

            }else {
                // La taille est trop élevée
                echo "Fichier trop volumineux. (> ". MAX_SIZE . "octets)";
            }

            // Il n'y a pas d'erreur
        }else {
            echo "Erreur de chargement du fichier. Réessayez svp";
        } 

        // vérifier la taille du fichier
    }else {
        echo "Fichier $fileExtension non autorisés ! <br>";
        echo "Formats autorisés: " . implode(", ", $allowedFiles);
    };


    /** fonction qui sauvegarde le fichier à l'endroit désiré */
    // sauvegarder le fichier sur le serveur

} else {
    // rediriger ce dernier sur la page du formulaire
    header('Location:/index.php?error=no_file_uploaded');
}

