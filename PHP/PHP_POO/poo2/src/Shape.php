<?php
namespace App;
abstract class Shape{
    // Force les sous-classes à définir la méthode area()
   abstract protected function area();
   public function present(){
        echo " je suis une forme";
    }
}