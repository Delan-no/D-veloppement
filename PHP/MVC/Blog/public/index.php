<?php
require("../app/Views/AuthView.php");
require("../app/Models/AuthModel.php");
require("../app/Controllers/Authcontroller.php");
/** Le point d'entrée (également front controller) est un fichier PHP unique qui agit comme le point de départ de votre app Web. Il reçoit toutes les requêtes HTTP entrantes et dirige le flux de controle vers les composants appropriés (contrôleurs, vues , modèles) e, fp,ctop, de l'URL ou d'autres paramètres  */
$view = new AuthView();
$model = new AuthModel();
$controller = new AuthController($model);


if ($_GET['action']) {
    // l'utilisateur veut s'inscrire 
    if ($_GET['action'] === "signup") {
        // appeler le contrôleur approprié
        $controller->signupAction($_POST['username'], $_POST['password']);
    }
    // l'utilisateur veut se connecter
    if ($_GET['action'] === "login") {
        // appeler le contrôleur approprié
        $controller->loginAction($_POST['username']);
    }
} else {
    $view->showLoginForm();
    $view->showSignupForm();
}