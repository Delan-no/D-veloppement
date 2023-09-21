<?php
namespace App;
// class Programmer extends User {
//     public function __construct(
//         string $n,
//         string $p,
//         int $a,  
//         array $languages ){
//         // appel du consstructeur parent
//         parent::__construct($n, $p, $a);
         
      
//     }
// }
class Programmer{
    use Personne;
    use Employee;
    public function code(){
        echo "Je suis un programmer <pre>";
    }
    
}