const mysql = require('../mysql');

  const CommentsSchema = mysql.Schema({
    content: { type: DataTypes.STRING, required: true },
    attachement: { type: DataTypes.STRING, required: true },
  });
  
  module.exports = mysql.model('Comments', CommentsSchema);