import React from 'react';
import './recentPost.css';

function RecentPost({course}){
	return(
		<div className="recentPost__container">
			<div className="recentPost__images"></div>
			<div className="recentPost__info">
				<ul>
					<li className={`recentPost__course ${course}`}>{course}</li>
					<li>March 27,2022</li>
				</ul>
				<br/>
				<h1>Chrome Extension Protects Against JavaScript-Based CPU Side-Channel Attacks</h1>
			</div>

		</div>
		)
}

export default RecentPost;