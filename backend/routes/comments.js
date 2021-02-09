const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const userCtrl = require('../controllers/comments');

//Commentaires
router.get('/:id/comments', auth, userCtrl.getAllComments);
router.post('/:id/comment/', auth, userCtrl.newComment);
router.delete('/comment/:id', auth, userCtrl.deleteComment);

module.exports = router;