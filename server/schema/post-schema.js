import mongoose from 'mongoose';

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    blog_image: {
        type: String,
        required: false
    },
    user_id: {
        type: String,
        required: true
    },
    tags: {
        type: String,
        required: false
    },
    category: {
        type: String,
        required: true
    },
    created_at: {
        type: String,
        required: Date()
    }
});

const post = mongoose.model('post', PostSchema);

export default post;

