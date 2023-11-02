## Les expressions réguliières
 
 Les expressions régulières, aussi appelées `regex` ou `regexp`, sont des séquences de caractères qui forment un motif de recherche. Elles sont utilisées pour rechercher, manipuler et éditer du texte en fonction de certaines règle défines.

## Basiques de Regex

### Correspondance exacte

Consiste à rechercher le texte de manière similaire à un éditeur de texte classic

ex: /John/ ==> recherche "John" da,s me texte
    /bonjour/ ==> recherche "bonjour" dans le texte (site de référence : `https://regexr.com/` ou `https://regex101.com/`)
    12:34:56

### Les classes de caractères:

[abc]: correspond à un seul caractère parmi a, b ou c
[^abc]: correspond à un caractère sauf a, b ou c 
[a-z]: correspond à l'ensemble des caractères allant de a à z (minuscule)
[0-9]: correspond à tous les chiffres de 0 à 9

# Les métacaractères 

Les métacaractères en expression régulières sont de caractères spéciaux qui ont une signification particulière. Ils donnent aux regex leur puissance et leur flexibilité ene permettant de définir des motifs de recherche complexes. Voici quelques-uns des métacaractères les plus couramment utilisés:

1. `.` (point): correspond à n'importe quel caractère sauf un saut de ligne. Par exemple, `a.b` correspond à "aab", "axb" mais pas à "a\nb"
2. `*` (astérisque): correspond à zéro ou plusieurs occurrences du motif précédent. Par exemple, `ab*c` correspond à "ac", "abc", "abbc" etc.
3. `+` (plus): correspond à un ou plusieurs occurrences du motif précendent. Par exemple, `ab+c` correspond à "ac", "abc", "abbc" etc.
<!-- Mon addresse mail est : abc@gmail.com
johndoe@gmail.com -->

/*
 <!-- [a-zA-Z]+@gmail.com  pour selectionner les trois premiers mail-->
 <!-- [a-zA-Z0-9]+@gmail.com pour sélectionner les quatres premiers mail -->
  email: johndoe@gmail.com
  email: JohnDoe@gmail.com
  email: johnDoe@gmail.com
  email: ahoumenou1@gmail.com 
  <!-- [a-zA-Z0-9-_]+@gmail.com -->
  email: ahoum_emil1@gmail.com 
  email: ahoume-nou1@gmail.com 
  email: ahoumenou1@outlook.com
  email: ahoumenou1@yahoo.com 
  email: ahoumenou1@test.com 
  email: ahoume.nou1@3wa.io */
  <!-- [a-zA-Z0-9-_.]+@[0-9a-zA-Z]+\.[a-z]+ pour tout sélectionner  -->*/

4. `?` (point d'interrogation): correspond à zéro ou une occurence du motif précédent. Par exemple, `ab?c` correspond à "abc" mais pas à "ac".
<!-- \+?[0-9]+ pour sélectionner les deux numéro. Le ? veut dire que c'est optionnel -->
+22967514821
22967514821

5. `\` (antislash): permet d'échapper un métacaractère;

http://highfive.bj
https://highfive.bj
http://w3schools.com
https://devdocs.io

6. `|` (barre verticale): correspond à l'opérateur "OU". Par exemple, "a|b" correspond à "a" ou "b"
7. `^` (circonflexe): correspond au début d'une ligne. Par exemple, "^abc" correspond à "abc" seulement s'il est situé au début d'une ligne.
8. `$` (dollar): correspond à la fin d'une ligne. Par exemple, "abc$" correspond à "abc" seulement s'il est sitèé à la fin d'une ligne.
<!-- ^salut.+monde$ pour sélectionner salut tout le monde -->
salut tout le monde
salut à tous
je vous salut tout le monde

1. `()` (parenthèses): crée un groupe de capture qui permet d'extraire des sous-partie du motif correspondant.
2.  `\b` (limite de mot, en: boundary): correspond à une limite d'un mot. Par exemple, "\bword\b" correspond à "word" en tant que mot complet et non partie d'un mot plus long.
    <!-- \bbon\b pour selectionner seulement bon et non bon qui se trouve aussi dans un autre mot -->
bonjour
le sport est bon pour la santé

## Autres métacarctères
- `\w`: correspond aux caractères alphanumériques en plus du "_" (tiret de 8). [a-z-A-Z0-9_]
- `\W`: contraire de \w. 
- `\s`: correspond à un espace.
- `\S`: contraire de \s.
- `\d`: correspond à un chiffre. [0-9]


### Quantificateur

Les quantificateurs en regex sont des métacaractères qui spéficient le nombre d'occurrences d'un élément à rechercher. Ils permettent de définir la quantité de carctères ou de groupes de caractères qu'ne expression régulière doit correpondre pour être considérée comme une correspondance. En voici quelques uns:
1. * (astérique)
2. + (plus)
3. ? (point d'interrogation)
4. {n}: correspond à exactement "n" occurences du motif précédent. Par exemple, a{3} correspond à "aaa"
5. {n,}: correspond à au moins "n" occurences du motif précédent. Par exemple, a{2,} correspond à "aa", "aaa", "aaaa", ... 
6. {n,m}: correspond à entre "n" et "m" occurrences du motif précédent. Par exemple, a {2,4} correspond à "aa", "aaa", "aaaa".

## Groupes de captures

Les groupes de capture en Regexp sont des parenthèses "()" utilisées pour définir des sous-parties d'une expression régulière.