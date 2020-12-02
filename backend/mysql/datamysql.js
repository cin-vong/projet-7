const mysql = require('mysql');


// connecter à votre base MySQL
const db = mysql.createConnection({
    host: "localhost",
    user: "nom_utilisateur",
    password: "mot_de_passe_utilisateur"
 
  });


//Erreur
  db.connect(function(err) {
    if (err) throw err;
 
    console.log("Connecté à la base de données MySQL!");
 
  });