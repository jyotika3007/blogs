import React, { useState } from 'react';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import './addPost.css';
import { createPost } from '../../../service/api';
import { useNavigate} from 'react-router-dom';

export default function Profile() {


    const navigate = useNavigate();
    const initialValues = {
        title: '',
        description: '',
        blog_image: '',
        user_id: '1',
        tags: '',
        category: 'All',
        created_at: new Date()
    } 

    const [post,setPost] = useState(initialValues);

    const handleChange = (e) => {
        // console.log(e);
        setPost({
            ...post, [e.target.name]: e.target.value
        });
    }

    const savePost = async(e) => {
        e.preventDefault();
        await createPost(post);
        navigate('/')
        return false
    }

    return (
        <div className='addPost__container'>
            <div className="addPost__body">
                <h2>Add New Post</h2>
                <div className='addPost__pic'>
                    <img src="/images/post1.webp" alt="Blog Pic" />
                    <br />
                    <div className='prodicle__picUpdate'>
                        <form>
                            <PhotoCameraIcon />
                            <input type="file" name="blog_image" />
                            <h3>Add Banner For Post</h3>
                        </form>
                    </div>
                </div>
                <div className='addPost__form'>
                    <form onSubmit={e=>savePost(e)}>
                        <div className='form__div'>
                            <label>Title</label>
                            <input type="text" name="title" onChange={e => handleChange(e)} placeholder='Enter Post Title Here ...' />
                        </div>
                        <div className='form__div'>
                            <label>Category</label>
                            <select name="category" onChange={e => handleChange(e)} required>
                                <option> -- Select Category -- </option>
                                <option value="css">CSS</option>
                                <option value="javascript">Javascript</option>
                                <option value="jquery">JQuery</option>
                                <option value="web_design">Web Design</option>
                            </select>
                        </div>
                        <div className='form__div'>
                            <label>#Tags</label>
                            <input type="text" name="tags" onChange={e => handleChange(e)} placeholder='Use comma (,) as a separator ...' />
                        </div>
                        <div className='form__div'>
                            <label>Description</label>
                            <textarea rows="6" name="description" onChange={e => handleChange(e)} placeholder='Enter Post Description Here ...'></textarea>
                        </div>
                        <div className='form__div'>
                            <button type="submit" className='primary-button'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
