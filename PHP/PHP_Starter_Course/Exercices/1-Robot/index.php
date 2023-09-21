<?php
declare(strict_types=1);

date_default_timezone_set("Africa/Porto-Novo");

require "./Robot.php";

$robot = new Robot();
// echo ($robot->greet());

// /** @var  Méthode de Théophile */
/*
$alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
$number = ["0", "1", "2", "3", "4", "4", "6", "7", "8", "9"];
$botMessage;
function randomCharacter($arr)
{
return $arr[rand(0, count($arr) - 1)];
}
$botMessage = 'Salut humain! je suis '
. randomCharacter($alpha)
. randomCharacter($alpha)
. "-"
. randomCharacter($number)
. randomCharacter($number)
. randomCharacter($number)
. randomCharacter($number);
/**
* Méthode du Formateur
* Summary of generateRanddomRobotName
* @return string
*/
/*
function generateRanddomRobotName()
{
$letters = range('A', 'Z');
$randomLetters = $letters[array_rand($letters)]
. $letters[array_rand($letters)];
$randomNumber = rand(1000, 9999);
return $randomLetters . "-" . $randomNumber;
}
$robotNames = generateRanddomRobotName();
date_default_timezone_set("Africa/Porto-Novo");
$currentDate = date("d-m-Y");
$currentTime = date("H:i:s");
function generateNum()
{
$num = rand(0, 10);
if (($num % 2) === 0) {
echo "J'ai choisi le nombre " . $num . " C'est un nombre pair";
} else {
echo "J'ai choisi le nombre " . $num . " C'est un nombre impair.";
}
}
*/

/*
$reverse = strrev($robotNames);
function extermination()
{
$exter = rand(1, 3);
switch ($exter) {
case '1':
echo '<p style="color:red"> Extermination ! Extermination !</p>';
break;
case '2':
echo '<p style="color:green">Vous voulez un café ?</p>';
break;
case '3':
echo ' <p style="color:green">Vous voulez un café ? </p>';
break;
}
if ($exter <= 2) {
return ' <p style="color:green">Vous voulez un café ? </p>';
} else {
return '<p style="color:red"> 🕙 Extermination ! Extermination ! 💀👿</p>';
}
}
*/
?>


<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Robot-factory Php</title>
    <style>
        body {
            text-align: center;
            color: white;
            background-color: black;
        }
    </style>
</head>

<body>
    <h1>Robot-Factory Avec la classes</h1>

    <h2>
        <?= $robot->greet() ?>
    </h2>
    <h2>
        <?= $robot->getCurrentDataTime() ?>
    </h2>
    <h2>
        <?= $robot->reverseName() ?>
    </h2>
    <h2>
        <?= $robot->robotBehavior() ?>
    </h2>
    <h2>
        <?= $robot->chooseRandomNumberAndParity() ?>
    </h2>

</body>

</html>