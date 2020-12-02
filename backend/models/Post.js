const mysql = require('../mysql');

  const PostSchema = mysql.Schema({
    content: { type: DataTypes.STRING, required: true },
    attachement: { type: DataTypes.STRING, required: true },
  });
  
  module.exports = mysql.model('Post', PostSchema);