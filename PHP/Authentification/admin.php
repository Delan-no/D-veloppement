<?php
//recupérer la session
session_start();
// on teste si la variable de session "login" existe et contient une valeur
if (empty($_SESSION["login"])) {
    // si inexistante ou nulle, on redirige vers le formulaire de login
    header("HTTP/1.1 302 Found");
    header("Location: /index.php");
    exit();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Page</title>
</head>
<body>
    <a href="logout.php">Se déconnecter</a>
    <h1> Bienvenu <?= $_SESSION["login"] ?? "...." ?> </h1>
</body>
</html>