const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const userCtrl = require('../controllers/post');

//Posts
router.get('/', auth, userCtrl.getAllPost);
router.post('/', auth, userCtrl.newPost);
router.get('/:id', auth, userCtrl.getOnePost);
router.delete('/:id', auth, userCtrl.deleteOnePost);
router.put('/:id', auth, userCtrl.modifyOnePost);

module.exports = router;