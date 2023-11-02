## @RestController

Lorsqu'une classe est annotée avec `@RestController`, Spring considère que chaque méthode ce cette classe renvoie ds données à représenter directement dans le corps  de la réponse HTTP en tant que données JSON (ou Xml).

## Les méthodes à définir sur un objet ja

### equals()
Cette méthode permet de comparer l'objet courant avec un autre objet passé en argument pour déterminer s'ils sont égaux ou non.

### hashCode()
Cette méthode retourne un ocde de hachage (numéro calculé à partir des valeurs internes de l'objet) entier pour l'objet. Il est important que si deux objet s osnt égaux selon la méthode equal(), ils aient le même code de hachage.

### toString()
Cette méthode retourne une chaine de caractères représentant l'objet. Il est recommandé de redéfinir cette méthode dans nos classes pour retourner une représentation plus significative de l'objet.

## bean
Un bean est l'instance dd'une classe qui est automatiquement généré par Java.j