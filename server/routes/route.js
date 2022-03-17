import  express from "express";
import { createPost, getAllPosts } from '../controllers/PostController.js';

const router = express.Router();


router.post('/create_post', createPost);
router.post('/get_posts', getAllPosts);


export default router;