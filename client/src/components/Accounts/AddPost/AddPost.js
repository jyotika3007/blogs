import React from 'react';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import './addPost.css';

export default function Profile() {
    return (
        <div className='addPost__container'>
            <div className="addPost__body">
                <h2>Add New Post</h2>
                <div className='addPost__pic'>
                    <img src="/images/post1.webp" alt="Profile Pic" />
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
                    <form>
                        <div className='form__div'>
                            <label>Title</label>
                            <input type="text" placeholder='Enter Post Title Here ...' />
                        </div>
                        <div className='form__div'>
                            <label>#Tags</label>
                            <input type="text" readOnly="readonly" placeholder='Use comma (,) as a separator ...' />
                        </div>
                        <div className='form__div'>
                            <label>Description</label>
                            <textarea rows="6" placeholder='Enter Post Description Here ...'></textarea>
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
