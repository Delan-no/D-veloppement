<?php
require("./generic_function.php");
require("./home.phtml");

# Fonction qui démarre une session côté serveur
//session_save_path("C:/laragon/tmp");

// session_start();
// if(empty($_SESSION["nom"])){
//     $_SESSION["nom"] = "John Doe";
// }
// dd($_SESSION);
// echo "<p> Hello {$_SESSION['nom']} </p>";

/** fonction permettant de créer un cookie
 *setcookie (clé, valeur, date_expiration);
 */
//  setcookie("school", "HighFive", time() + 10);

// $_COOKIE: superglobale permettant d'accéder aux cookies côté client
/**
 * Une superglobale est une variable pré-définie qui stocke des iingos et des données importantes accessibles depuis n'importe où dans le script PHP sans avoir besoin de la déclarer explicitement comme une variable classique
 */
// dd($_COOKIE);
/*
echo "Session Path = " .session_save_path(); // renvoi " "
echo "<pre>";
echo session_id(); // fonction qui renvoi l'id de la session actuelle
dd($_COOKIE);
$_SESSION["firstname"] = "JOHN";
$_SESSION["lastname"] = "DOE";
$_SESSION["age"] = 24; */

// créer une nouvelle session si on en avait pas, ou récupérer l'ancienne session
// session_start();

// dd($_SESSION);