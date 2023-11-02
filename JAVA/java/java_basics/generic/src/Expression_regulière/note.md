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
Mon addresse mail est : abc@gmail.com