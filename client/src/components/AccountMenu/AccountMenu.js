import React from 'react';
import './accountMenu.css';

export default function AccountMenu() {
  return (
    <div className='account__menu'>
        <ul>
            <li className='active1'>Profile</li>
            <li>All Posts</li>
            <li className='active'>Add Post</li>
            <li>Reset Pasword</li>    
        </ul>   
    </div>
  )
}
