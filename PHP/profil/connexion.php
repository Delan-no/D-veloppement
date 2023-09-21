<?php
define("LOGIN", "delanktc24@gmail.com");
define("PASSWORD", "123456");
$errorMessage = "";

if (!empty($_POST)) {
    // Les identifiants sont transmis
    if (!empty($_POST["login"]) && !empty($_POST["pwd"])) {
        // sont-ils les mêmes que ceux enrégistrés dans la BDD
        if ($_POST["login"] !== LOGIN) {
            $errorMessage = "Mauvais login";
        } else if ($_POST["pwd"] !== PASSWORD) {
            $errorMessage = "Mauvais mot de passe!";
        } else {
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

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Formulaire d'authentification</title>
</head>

<body>
    <div class="container" style="margin-top: 5rem;">
        <form action="<? htmlspecialchars($_SERVER["PHP_SELF"]) ?>" method="post">
            <fieldset>
                <legend>Identifiez-vous</legend>
                <?php if (!empty($errorMessage)): ?>
                    <p>
                        <?= $errorMessage ?>
                    </p>
                <?php endif; ?>
                <p>
                    <label for="login"> Email</label>
                    <input type="text" name="login" id="login" placeholder="Entrez Votre Email" required>
                </p>
                <p>
                    <label for="pwd"> Mot de passe :</label>
                    <input type="password" name="pwd" id="pwd" placeholder="Entrez votre mot de passe" required>
                </p>
                <p>
                    <button type="submit" name="submit" class="registerbtn"> S'authentifier </button>
                </p>
                <div class="signin">
                    <p>Already have an account? <a href="inscription.php">Sign in</a>.</p>
                    <p>Cliquez <a href="inscription.php">Mot de passe oubilé</a> pour modifier le mot de passe.</p>
                </div>
            </fieldset>
        </form>
    </div>
</body>

</html>