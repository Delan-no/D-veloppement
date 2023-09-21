<?php
function getCurrentDataTime()
{
    $currentDate = date("d-m-Y");
    $currentTime = date("H:i:s");
    return "Nous somme le " . " " . $currentDate . ", il est " . " " . $currentTime;
}

function chooseRandomNumberAndParity()
{
    $numbe = rand(0, 10);
    return "J'ai choisi le nombre  $numbe  C'est un nombre ". checkEvenOdd($numbe) ;
}
function checkEvenOdd(int $number)
{
    if (($number % 2) === 0) {
        return "pair";
    } else {
        return "impair";
    }

}
function reverseName(string $name)
{

    return "Mon nom à l'envers est ". strrev($name) ."  ". "Ah. Ah. Ah";
}