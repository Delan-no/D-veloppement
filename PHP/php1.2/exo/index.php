<!DOCTYPE html>
<html lang="fr-FR">

<head>
  <meta charset="UTF-8">
  <title>Hey</title>
  <style>
    body {
      color: white;
      background-color: black;
      text-align: center;
    }

    input {
      padding-block: .5rem;
      border-radius: .5rem;
      padding-left: .5rem;
    }

    button {
      border-radius: .5rem;
      padding-block: .4rem;
    }
  </style>
</head>

<body>
  <h1>Salut !</h1>
  <?php require './date.php'; ?>

  <form method="POST">
    <input type="text" name="nickname" placeholder="Entrez votre pseudonyme" /> <br>
    <input type="password" name="password" placeholder="Entrez votre mot de passe" /> <br>
    <button type="submit">Valider</button>
  </form>

  <h2> <?= formF(); ?></h2>
  <?php
  function formF(){
    if (isset($_POST['nickname']) && isset($_POST['password'])) {
     return "Les informations entrées sont "." ". $_POST['nickname'] . " " . $_POST['password']; 
   }
  }
  ;
  ?>

</body>

</html>