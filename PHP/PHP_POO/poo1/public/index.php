<?php
// include("./User.php");
// fonction d'autoloading... 
// permet de charger automatiquement les classes 
// spl_autoload_register(function ($class_name) {
//     require $class_name . ".php";
// });


 $x = 12;
 $y = 8;
 $s1 = "salut";
 $s2 = "Del";

require(__DIR__ . "/../vendor/autoload.php");

use app\math\Calculator as MathCalculator;
use app\string\Calculator as stringCalculator;

$mathe = new MathCalculator();
echo $mathe->add($x,$y);

echo "<pre>";

$string = new stringCalculator;
echo $string->concatenate($s1, $s2);





