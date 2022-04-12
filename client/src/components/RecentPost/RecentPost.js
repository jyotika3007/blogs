import React from 'react';
import './recentPost.css';

function RecentPost({post}){

	// console.log(post)
	return(
		<div className="recentPost__container" key={post?post._id:'1'}>
			<div className="recentPost__images"></div>
			<div className="recentPost__info">
				<ul>
					<li className={`recentPost__course ${post?post.category:''}`}>{post?post.category:''}</li>
					<li>{post?new Date(post.created_at).toDateString():''}</li>	
				</ul>
				<br/>
				<h1>{post?post.title:''}</h1>
			</div>

		</div>
		)
}
 
export default RecentPost;