import React from 'react';
import './post.css';

function Post(argument) {
	return (
		<div className="post__container">
			<div className="post__info">
			
				<ul>
					<li className="post__course">Javascript</li>
					<li>March 27,2022</li>
				</ul>
				<br/>
				<h1>Chrome Extension Protects Against JavaScript-Based CPU Side-Channel Attacks</h1>

			</div>
		</div>
		)
}

export default Post;