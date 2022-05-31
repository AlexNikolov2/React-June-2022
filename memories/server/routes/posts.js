const express = require('express');

const { getPosts, getPost, createPost, updatePost, likePost, deletePost } = require('../controllers/postController');

const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.patch('/:id/likePost', likePost);
router.delete('/:id', deletePost);

module.exports = router;
