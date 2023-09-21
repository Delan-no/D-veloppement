
## Ne plus afficher d'erreur :
```php
 error_reporting(0);
```

## Afficher toutes les erreurs :
```php
 error_reporting(-1);
```



 *- E_ERROR: les erreurs sont affichées par défaut;
 *- E_WARNING: les avertissements sont affichés par défaut
 *- E_ALL :toutes les erreurs et alertes sont affichées

```php
throw new Exception("une erreur est survenue"); Erreur qui donne la possibilité de continuer
```
