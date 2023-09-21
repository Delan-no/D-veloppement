## Opérateur de Résolution de Porté(::)

Le scope Resolutionn Operator aussi connu sous le nom (Paamayim Nekudotayim) ou en terme simple les 2 points, est un opérateur permettant d'accéder aux constantes, aux propriétés et méthodes statiques d'une classe.


## Propriétés et Méthodes Statiques

En PHP, une propriété ou méthode statique est associée à la classe est-même plutôt qu'à une istance particulière de cette classe.
Cela signifie que vous pouver accéder à des propriétés et des méthodes statiques sans créer une instance de la classe.
Les propriétés et méthodes statiques sont déclarées en utilisant le mot-clé `static`.
```php
 class Maclass{
    public static int $proprieteStatique = 0;
    public static function increment() {
        self::$proprieteStatique;
    }
 }
```

## Les Traits en PHP
