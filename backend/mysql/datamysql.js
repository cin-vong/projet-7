const mysql = require('mysql');


// connecter à votre base MySQL
const db = mysql.createConnection({
    host: "localhost",
    user: "nom_utilisateur",
    password: "mot_de_passe_utilisateur",
    database: "mydb"
 
  });


//Erreur
  db.connect(function(err) {
    if (err) throw err;
 
    console.log("Connected!");
 
  });

//Création de basede données
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE mydb", function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });
  });