// All post
exports.getAllPost = (req, res, next) => {
    con.connect(function(err) {
        if (err) throw err;
           con.query("SELECT * FROM post", function (err, result, fields) {
         if (err) throw err;
             console.log(result);
             return res.status(201).json({ result })
             });
        });
    }

// NewPost
exports.newPost = (req, res, next) => {
    con.connect(function(err) {
        if (err) throw err;
           con.query("SELECT * FROM post", function (err, result, fields) {
         if (err) throw err;
         return res.status(201).json({ result })
             });
        });
    }
// OnePost
exports.getOnePost = (req, res, next) => {
    con.connect(function(err) {
        if (err) throw err;
           con.query("SELECT * FROM post", function (err, result, fields) {
         if (err) throw err;
             console.log(result);
             return res.status(201).json({ result })
             });
        });
    }
// Delete OnePost
exports.deleteOnePost = (req, res, next) => {
    con.connect(function(err) {
        if (err) throw err;
        const sql = "DELETE FROM post WHERE author'";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Number of post deleted: " + result.affectedRows);
          return res.status(201).json({ result })
        });
      });
    }
// Modify OnePost
exports.modifyOnePost = (req, res, next) => {
    if (err) throw err;
  var sql = "UPDATE post SET name WHERE firstname";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
    return res.status(201).json({ result })
  });
}

