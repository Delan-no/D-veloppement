<?php 
$str = <<<Text
Nom du patient : AHOUMENOU Emile 
Nom du patient : ABOU Martin
Nom du patient : KEOULA Erféro 
Nom du patient : AGBANNONDE Warris
Text;

$regexp = "/(?<=Nom du patient : ).+/";
// preg_match_all pour trouver toutes les correspondances

preg_match_all($regexp, $str, $matches);
print_r($matches);