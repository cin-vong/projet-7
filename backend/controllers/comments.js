// New comment
exports.newComment = (req, res, next) => {
    con.connect(function(err) {
        if (err) throw err;
           con.query("SELECT * FROM comments", function (err, result, fields) {
         if (err) throw err;
             console.log(result);
             });
        });
    };
// Get all comments
exports.getAllComments = (req, res, next) => {
    con.connect(function(err) {
        if (err) throw err;
           con.query("SELECT * FROM comments", function (err, result, fields) {
         if (err) throw err;
             console.log(result);
             return res.status(201).json({ result })
             });
        });
    };

//Delete comment
exports.deleteComment = (req, res, next) => {
    con.connect(function(err) {
        if (err) throw err;
        const sql = "DELETE FROM comments WHERE ID'";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Number of comment deleted: " + result.affectedRows);
        });
      });
    };