<?php
// require "../Models/AuthModel.php";
class AuthController
{
    private $model;
    public function __construct(AuthModel $model)
    {
        $this->model = $model;
    }
    public function signupAction($username, $password)
    {
        // On demande au model d'ajouter l'utilisateur
        $this->model->addUser($username, $password);
    }
    public function loginAction(string $username)
    {
        // On demande au model de récupérer l'utilisateur "username"
        return $this->model->getUser($username);
    }
}