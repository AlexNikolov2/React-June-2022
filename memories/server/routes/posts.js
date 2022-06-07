const express = require('express');

const { getPosts, getPost, createPost, updatePost, likePost, deletePost } = require('../controllers/postController');

const router = express.Router();
const auth = require('../middlewares/auth');

router.get('/', getPosts);
router.post('/',auth, createPost);
router.patch('/:id', auth, updatePost);
router.patch('/:id/likePost', auth, likePost);
router.delete('/:id',auth, deletePost);

module.exports = router;
