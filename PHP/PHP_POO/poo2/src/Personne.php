<?php
namespace App;
trait Personne{
    public function present(string $name, string $prenom){
        echo "On m'appelle ...";
    }
}