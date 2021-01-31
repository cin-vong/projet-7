const express = require('express');
const bodyParser = require('body-parser');
const helmet = require("helmet");
const app = express();
const cors = require('cors');
const path = require('path');

const connection = require('./mysql/connexion');

const userRoutes = require('./routes/user.js');
const postRoutes = require('./routes/post.js');

//Connexion DB

connection.connect( function(err){
  if (err){
    console.log("Erreur de connection à la BDD " + err)
  }
  else {
      console.log("Connection BDD réussie")
  }
});

//Résolution erreur CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

//Parser les corps des requête + forcer parse d'objets inclus dans d'autres objets
app.use(bodyParser.json());


//Securité des données
app.use(cors())
app.use(helmet());

//Middleware
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);


module.exports = app;