## Communication HTTP client-serveur

Lorsqu'un serveur communique avec un client, plusieurs en-têtes sont souvent échangés pour communiquer des infos supplémentaires. Voici quelques-uns des en-têtes couranmment envoyés par un serveur PHP.

1. Location: Utilisé pour rediriiger le navigateur vers une autre page.

ex: L'en-tête ` Location: https://example.com` provoquera une redirection vers le site Web https://example.com

2. Set-Cookie: Utilisé pour définir des cookies dans le navigateur.
ex: `Set-Cookie: username=john` definit un cookie nommé "username" avec la "valeur" john

3. Content-Disposition: Utilisé pour indiquer au navigateur de traiter le contenu.
ex: ` Content-Disposition: attachment; filename=le_code.pdf` 
peut être utilisé pour forcer le téléchargement d'un fichier avec le nom "le_code.pdf"

4. Content-Type: Définit le contenu de la réponse.
ex ` Content-Type: text/html` indique la réponse est du code HTML. D'autres valeurs courantes incluent : application/json, image/jpeg

5. Content-Length: Indique la taille de la réponse en octets.

6. Expires: Indique la dte et l'heure d'expiration de la réponse