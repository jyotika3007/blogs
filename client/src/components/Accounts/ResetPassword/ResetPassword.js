import React from 'react';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import './resetPassword.css';

export default function ResetPassword() {
    return (
        <div className='addPost__container'>
            <div className="addPost__body">
                <h2>Reset Password</h2>
                
                <div className='addPost__form'>
                    <form>
                        <div className='form__div'>
                            <label>Current Password</label>
                            <input type="password" />
                        </div>

                        <div className='form__div'>
                            <label>New Password</label>
                            <input type="password" readOnly="readonly" />
                        </div>

                        <div className='form__div'>
                            <label>Confim New Password</label>
                            <input type="password" readOnly="readonly" />
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
