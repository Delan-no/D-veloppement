<?php
declare(strict_types=1);
/*

echo( "Hello World !");
print("salut");

$user; // déclation
$user = "salui!"; // assignation
$firstname = "john";
$lastname = "Doe";

var_dump($firstname);
echo "<br>";
var_dump($lastname);
echo "<br>";
echo "<br>";

echo $firstname . " " . $lastname;
echo ($firstname . " " . $lastname);

$fruits = array("pomme", "orange", "banane");
$notes = [2, 15, 65];
$arr = ["hello", 2, true, null];

var_dump($fruits, $notes, $arr);

echo "<pre>";
print_r($fruits);
echo "</pre>";

class User{
}
$u = new User();
$u2 = new User();
var_dump($u, $u2);

// $floatNum = 3.14;
// $intNum = (int) $floatNum;
// $x = (int) 3.14;

// var_dump($floatNum, $intNum, $x);

$age = 1;

if ( $age < 18 ) {
    echo ("vous êtes mineur");
}else if ( $age > 18 ) {
    echo ("vous êtes majeur");
}else{
    echo ("vous avez 18 ans");
}
$p = "Nous somme";
$day = 0;

// switch ($day) {
//     case 0:
//         echo (" $p dimanche");
//         break;
//     case 1:
//         echo ("$p Lundi");
//         break;
//     case 2:
//         echo ("$p mardi");
//         break;
//     case 3:
//         echo ("$p mercredi");
//         break;
//     case 4:
//         echo ("$p jeudi");
//         break;
//     case 5:
//         echo ("$p vendredi");
//         break;
//     case 6:
//         echo ("$p sammedi");
//         break;

// }

$a = 0;
while ($a < 10) {
    echo $a;
    $a++;
};

echo "<br>";
for ($i = 0; $i < 10; $i++) {
    echo $i;
}
echo "<br>";

$fruits = ["pomme", "raisin", "banane"];
echo count($fruits) . " " . "éléments dans le tableau";

$fruitsLength = count($fruits);
for ($i = 0; $i < $fruitsLength; $i++) {
    echo $fruits[$i] . "<br>";
    
}

foreach ($fruits as $fruit) {
    echo $fruit . "    ";
}

// Tabeau associatif
/*
    un tableau associatif en PHP, est un tableau où les valeurs sont associés à des clés plutôt qu'à des indices numériques comme dans les tableaux indexés. Dans un tableau associatif, chaque élément est identifié par une clé unique qui permet d'accéder à la valeur correspondante.
*/
/*
$notes = [
    "Erfero" => 20, 
    "Emile" => 17, 
    "Alid" => 20, 
    "Sam" => 18
];
$notes2 = array(
    "Erfero" => 20, 
    "Emile" => 17, 
    "Alid" => 20, 
    "Sam" => 18
);

echo $notes["Erfero"];
echo "<pre>";
print_r($notes);
echo "</pre>";

echo "<pre>";
print_r($notes2);
echo "</pre>";

foreach ($notes as $etuidant => $note) {
    echo $etuidant . " a une note de ", $note . " / 20 <br>"; 
}
*/
// type hinting, strict_types
// type hinting ou l'annotation de type 
/*
 + Nous avons la capacité d'annoter les paramètres de fonction et les valeurs de retours. cela permet d'améliorer la lisibilité.

 + L'annotation de type est souvent utilisée conjointement avec la directive "declare (strict_types=1) pour activer le mode strict de typage.
 */
/*
function add(int $x, int $y){
    return $x + $y;
}
echo add(4, 6);

function ad(float $x, float $y):float {
    return $x + $y;
}
echo ad(4.5, 6.5);
 
//paramètres nommées : php-8.0 
echo ad(y:5.5 , x:3.5);
*/

class User{

    public function __construct(
        public string $firstname,
        public string $lastname,
        public int $age,
    ){
    }
};
$u = new User('John', 'Doe', 24);
echo $u->firstname . " <br> " . $u->lastname . " <br> " . $u->age;




?>
