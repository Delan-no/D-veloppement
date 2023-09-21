<?php
declare(strict_types=1);
date_default_timezone_set("Africa/Porto-Novo");   
    function generateRandomRobotName()
        {
            $letters = range('A', 'Z');
            $randomLetters = $letters[array_rand($letters)]
                           . $letters[array_rand($letters)];
            $randomNumber = rand(1000, 9999);
            return $randomLetters . "-" . $randomNumber;
        }

        function greet(string $name) // Hello humain, je suis...
    
        {
            return " Hello humain! je suis " . $name;
        }
 
        function robotBehavior()
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

        

