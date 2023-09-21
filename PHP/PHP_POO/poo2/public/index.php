<?php
declare(strict_types=1);
// phpinfo();
function add($num1, $num2) {
    return (string) $num1 + (string) $num2;
}

echo add(23, 56);
echo add("abc", "def");

// use App\Programmer;
// use App\User;
// use App\Rectangle;

// require __DIR__ . "/../vendor/autoload.php";

// $progr1 = new Programmer();
// var_dump($progr1->nom);

// $u1 = new User("John","Doe","23");
// $p = new Programmer("Délanno","Kotcho", 34, ["js","css"]);
// var_dump($p);
/*
class connexion{
    //
    private static $instance = null;
    //
    private $pdo;
    private static $id;
    private function __construct(){
        $this->id = rand(1000, 9999);
        // intialisation de la connexion à la BDD
        $this->pdo = new PDO("mysql:host=localhost;dbname=album_app_mvc;", "root", "");
    }
    
    public static function getInstance(){
        echo "Connexion Id = " . self::$id;
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }
}
$db = connexion::getInstance();
$db = connexion::getInstance();
*/
// $rect1 = new Rectangle();
// $rect1->present();

// $program = new Programmer();
// $program->code();
// $program->present();
// $program->work();
// throw new Exception("une erreur est survenue");



