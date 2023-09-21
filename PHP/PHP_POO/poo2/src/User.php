<?php
namespace App;

class User{

    public $nom = "john";
    public $prenom = "Doe";
    public $age = 24;

    public function __construct(
        public string  $nom,
        public string  $prenom,
        public string  $age,
    ){
       
    }
}

