import React from 'react';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import './addPost.css';

export default function Profile() {
  return (
    <div className='addPost__container'>
        <div className="addPost__body">
                <h2>Add New Post</h2>
        <div className='addPost__pic'>
                <img src="/images/post1.webp" alt="Profile Pic"/>
                <br />
                <div className='prodicle__picUpdate'>
                <PhotoCameraIcon /> 
                <h3>Change Profile Pic</h3>
                </div>

            </div>
            <div className='addPost__form'>
                <div className='form__div'>
                    <label>Username</label>
                    <input type="text" />
                </div>
                <div className='form__div'>
                    <label>Email</label>
                    <input type="email" readOnly="readonly" />
                </div>
                <div className='form__div'>
                    <label>Description</label>
                    <textarea rows="6"></textarea>
                </div>
                <div className='form__div'>
                    <button type="submit" className='primary-button'>Update</button>
                </div>
            </div>
            

        </div>
    </div>
  )
}
