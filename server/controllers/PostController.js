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
        res.status(500).json(error)
    }
}

export const getRecentPosts = async (req,res) => {
    console.log(req.body)
    try{
        let css_posts = await Post.find({category: 'css'});
        let js_posts = await Post.find({category: 'javascript'});
        let jq_posts = await Post.find({category: 'jquery'});
        let wd_posts = await Post.find({category: 'web_design'});

        let css_count = await Post.find({category: 'css'}).count();
        let js_count = await Post.find({category: 'javascript'}).count();
        let jq_count = await Post.find({category: 'jquery'}).count();
        let wd_count = await Post.find({category: 'web_design'}).count();

        let result = {'css': css_posts, 'js': js_posts, jq: jq_posts, wd: wd_posts}
        
        console.log(result)
        
        res.status(200).json({
            status: 200,
            response:'success',
            data: result,
            total_css_posts: css_count,
            total_js_posts: js_count,
            total_jq_posts: jq_count,
            total_wd_posts: wd_count
        });
    } catch(error){
        res.status(500).json(error)
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
        res.status(500).json(error)
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
        res.status(500).json(error)
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
        res.status(500).json(error)
    }
}

