<?php
date_default_timezone_set("Africa/Porto-Novo");
    class Robot
    {
        private $name;
        public function __construct(){
            $this->generateRandomRobotName();
        }
       
        private function generateRandomRobotName()
        {
            $letters = range('A', 'Z');
            $randomLetters = $letters[array_rand($letters)]
                           . $letters[array_rand($letters)];
            $randomNumber = rand(1000, 9999);
            $robotName = $randomLetters . "-" . $randomNumber;
            return $this->name = $robotName;
        }
        public function greet() // Hello humain, je suis......
    
        {
            return " Hello humain! je suis" . $this->name;
        }
        public function getCurrentDataTime()
        {
            $currentDate = date("d-m-Y");
            $currentTime = date("H:i:s");
            return "Nous somme le " . " " . $currentDate . ", il est " . " " . $currentTime; 
        }
        public function chooseRandomNumberAndParity()
        {
            $numbe = rand(0, 10);
            return "J'ai choisi le nombre  $numbe  C'est un nombre {$this->checkEvenOdd($numbe)}";
        }
        private function checkEvenOdd(int $number)
        {
            if (($number % 2) === 0) {
                return "pair";
            } else {
                return "impair";
            }
    
        }
        public function reverseName()
        {
    
            return "Mon nom à l'envers est ". strrev($this->name) ."  ". "Ah. Ah. Ah";
        }
        public function robotBehavior()
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
        }
    }
?>