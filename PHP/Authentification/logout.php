<?php
// script de déconnexion
// récupère la session actuelle
session_start();
// supprime toutes les variables de sessions
session_unset();
session_destroy();
//rédirection
header("Location: /index.php");
