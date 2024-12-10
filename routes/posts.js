//common JS
// const express = require("express");

//ESJ
import express from "express";
import {
    getPosts, 
    getPost, 
    createPost, 
    updatePost,
    deletePost
} from '../controller/postController.js';
const router = express.Router();


router.get('/',getPosts);


router.get('/:id', getPost)


router.post('/', createPost);


//update posts
router.put('/:id', updatePost);


router.delete('/:id', deletePost);

export default router;