<?php
$text = <<<Text
Le numéro de téléphone est 229-67514101";
Le numéro de téléphone est 229-67514102";
Text;
$regexp = "/(\d{3})-(\d{2})/";
preg_match($regexp, $text, $matches);

// if (count($matches)>0) {
//     // Récupérer les groupes de capture
//     $indicatif = "+" . $matches[1];
//     $numero = $matches[2];

//     // Formater le numéro de téléphone
//     $numeroFormate = "$indicatif $numero";
//     echo $numeroFormate;
// }

// Remplacer le numéro dans le texte
$text_formate = preg_replace($regexp, "+$1 $2", $text);
echo $text_formate;
