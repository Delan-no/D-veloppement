<?php
define("LOGIN", "Délanno");
define("PASSWORD", "123456");
$errorMessage = "";
// Test de l'envoi du formulaire
if (!empty($_POST)) {
    // Les identifiants sont transmis
    if (!empty($_POST["login"]) && !empty($_POST["pwd"])) {
        // sont-ils les mêmes que ceux enrégistrés dans la BDD
        if ($_POST["login"] !== LOGIN) {
            $errorMessage = "Mauvais login";
        }else if ($_POST["pwd"] !== PASSWORD) {
            $errorMessage = "Mauvais mot de passe!";
        }else {
            // ouvrir une session
            session_start();
            // on enrégistre le login de sesszion 
            $_SESSION["login"] = LOGIN;
            // on redirige vers le fichier admin.php
            header("HTTP/1.1 302 Found");
            header("Location: /admin.php");
            exit();

        }
    }
}
/** $_SERVER contient les informations sur 
 *      le serveur WEB
 *      l'environnement d'exécution et 
 *      les requêtes HTTP
 */

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulaire d'authentification</title>
</head>
<body>  
<div class="container" style="margin-top: 5rem;">
        <form action="<? htmlspecialchars($_SERVER["PHP_SELF"]) ?>" method="post">
            <fieldset>
                <legend>Identifiez-vous</legend>
                <?php if (!empty($errorMessage)) : ?>
                    <p>
                        <?= $errorMessage ?>
                    </p>
                <?php endif; ?>
                <p>
                    <label for="login"> Utilisateur :</label>
                    <input type="text" name="login" id="login">
                </p>
                <p>
                    <label for="pwd"> Mot de passe :</label>
                    <input type="password" name="pwd" id="pwd">
                </p>
                <p>
                    <button type="submit" name="submit">S'authentifier</button>
                </p>
            </fieldset> 
        </form>
    </div>
</body>
</html>