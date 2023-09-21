<?php
class User{
    // memebre | propriétés | champs
    public $nom = "John";
    public $prenom = "Doe";
    public $age = 24;

    // méthodes
    const pieds = 2;
    public function present(){
        echo " Je m'appelle " . $this->nom . " " . $this->prenom . " .J'ai" . self::pieds . " pieds";
    }
}
