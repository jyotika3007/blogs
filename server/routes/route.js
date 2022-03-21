import  express from "express";
import { createPost, getFeaturedPosts, getRecentPosts, getMostReadPosts, getUsersPosts } from '../controllers/PostController.js';

const router = express.Router();


router.post('/create_post', createPost);
router.post('/get_recent_posts', getRecentPosts);
router.post('/get_featured_posts', getFeaturedPosts);
router.post('/get_most_read_posts', getMostReadPosts);
router.post('/get_users_posts', getUsersPosts);


export default router;