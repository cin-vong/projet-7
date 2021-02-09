const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//Inscription
      exports.signup = (req, res, next) => {
        const user = req.body
          bcrypt.hash(user.password, 10)
            .then((hash) => {
            user.password = hash;
          connection.query('SELECT * FROM user Where email=?', user.email, function (err, result) {
             if (err){
                console.log(err)
              return res.status(400).json("Error !")
          }
                if(result.lenght >= 1){
                  return res.status(400).json({ message: "Adresse déjà utilisé !" })
      }else{
                connection.query('INSERT INTO user SET ?', user, (err, result))
                if (err) {
                console.log(err)
                  return res.status(400).json("Error !")
          }
                return res.status(201).json ({ message: " Compte bien crée !"});
          }
      });
   });
}
    
//Connexion
exports.login = (req, res, next) => {
    const user = req.body
    if (user.email && user.password){
      connection.query('SELECT * FROM user Where email = ?', user.email, function (err, result){
        if (err) {
          console.log(err)
          return res.status(400).json("Error !")
        }
        if (result.lenght <= 0){
          return res.status(400).json({ message: "Email inconnu"})
        }else{
          bcrypt.compare(user.password, results[0].password)
          .then(valid => {
            if (!valid) {
              return res.status(401).json({ error: 'Mot de passe incorrect !' });
            }
            res.status(200).json({
              userId: user._id,
              token: jwt.sign(
                { userId: user._id },
                'RANDOM_TOKEN_SECRET',
                { expiresIn: '24h' }
              )
            });
          })
          .catch(error => res.status(500).json({ error }));
        }
      })
    }
  }


// Delete User
exports.deleteUser = (req, res, next) => {
  connection.query('SELECT * FROM user Where email=?', user.email, function (err, result) {
      if (err) throw err;
      console.log("Compte effacé avec succés ! " + result.affectedRows);
    });
    if (result.lenght <= 0){
      return res.status(400).json({ message: "Compte déjà effacé"})
  }
}
    