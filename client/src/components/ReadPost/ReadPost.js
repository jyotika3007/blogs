import React from 'react';
import './readPost.css';

function ReadPost({post}) {

	console.log(post)
	
	return (
		<div className="mostReadPost__container">
			<div className="mostReadPost__imageDiv">
				<img src="/images/post1.webp" alt="Post Image" className="mostReadPost__image" />
			</div>
			<div className="mostReadPost__info">
				{post ? 
				<>
				<ul>
					<li className={`course__name ${post.category}`}><span>{post.category}</span></li>
					<li className='post__date'>{new Date(post.created_at).toDateString()}</li>
				</ul>
				<br/>
				</>
				:
				<>
				</>
				}
				<h4>{post?post.title:''}</h4>
				<p>{post?post.description:''}</p>
			</div>
		</div>
		)
}

export default ReadPost;