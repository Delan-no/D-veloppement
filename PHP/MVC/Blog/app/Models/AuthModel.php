<?php
class AuthModel
{
    private $users = [];
    /**
     * Fonction qui ajoute un utilisateur dans notre tableau
     */
    public function addUser($username, $password)
    {
        $this->users[$username] = password_hash($password, PASSWORD_DEFAULT); // se traduit en password_bcrypt
    }

    /**
     * Fonction qui recherche un utilisateur dans notre tableau
     */
    public function getUser(string $username): null|string
    {

        return $this->users[$username] ?? null;
    }
}