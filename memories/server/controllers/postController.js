const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const PostMessage = require('../models/postModel');

export const getPosts = async (req, res) => {
    try {
        const posts = await PostMessage.find();
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getPost = async (req, res) => {
    try {
        const post = await PostMessage.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const createPost = async (req, res) => {
    const {title, message, selectedFile, creator, tags} = req.body;
    const newPostMessage = new PostMessage({
        title,
        message,
        selectedFile,
        creator,
        tags
    });
    try {
        await newPostMessage.save();
        res.status(201).json(newPostMessage);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const {title, message, selectedFile, creator, tags} = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send({message: 'Invalid ID'});
    const updatedPostMessage = {
        title,
        message,
        selectedFile,
        creator,
        tags
    };
    try {
        const post = await PostMessage.findByIdAndUpdate(id, updatedPostMessage, {new: true});
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const deletePost = async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send({message: 'Invalid ID'});
    try {
        const post = await PostMessage.findByIdAndRemove(id);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const likePost = async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send({message: 'Invalid ID'});
    try {
        const post = await PostMessage.findById(id);
        post.likeCount++;
        await post.save();
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = router;