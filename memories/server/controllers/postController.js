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

