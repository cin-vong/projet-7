module.exports = (mysql, DataTypes) => {
    const User = mysql.define('User', {
      email: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      isAdmin: DataTypes.BOOLEAN
    }, {});
    User.associate = function(models) {
      // associations can be defined here
      models.User.hasMany(models.Post)
    };
    return User;
  };

  const mysql = require('../mysql');
  
  const userSchema = mysql.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

module.exports = mysql.model('User', userSchema);