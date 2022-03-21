import { response } from 'express';
import Post from '../schema/post-schema.js';


export const createPost = async (req,res) => {
    console.log(req.body)
    try{
        const post = await new Post(req.body);
        post.save();

        res.status(200).json({
            status: 200,
            response:'blog saved succesfully'
        });
    } catch(error){
        res.status(500).jsn(error)
    }
}

export const getRecentPosts = async (req,res) => {
    console.log(req.body)
    try{
        let posts = await Post.find({});

        res.status(200).json({
            status: 200,
            response:'success',
            data: posts
        });
    } catch(error){
        res.status(500).jsn(error)
    }
}

export const getFeaturedPosts = async (req,res) => {
    console.log(req.body)
    try{
        let posts = await Post.find({});

        res.status(200).json({
            status: 200,
            response:'success',
            data: posts
        });
    } catch(error){
        res.status(500).jsn(error)
    }
}

export const getMostReadPosts = async (req,res) => {
    console.log(req.body)
    try{
        let posts = await Post.find({});

        res.status(200).json({
            status: 200,
            response:'success',
            data: posts
        });
    } catch(error){
        res.status(500).jsn(error)
    }
}

// for Users
export const getUsersPosts = async (req,res) => {
    console.log(req.body)
    try{
        let posts = await Post.find({});

        res.status(200).json({
            status: 200,
            response:'success',
            data: posts
        });
    } catch(error){
        res.status(500).jsn(error)
    }
}

