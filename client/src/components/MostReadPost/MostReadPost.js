import React from 'react';
import './mostReadPost.css';

function MostReadPost(argument) {
	return (
		<div className="mostReadPost__container">
			<div className="mostReadPost__imageDiv">
				<img src="/images/post1.webp" alt="Post Image" className="mostReadPost__image" />
			</div>
			<div className="mostReadPost__info">
				<h4>Tell-A-Tool: Guide To Web Design And Development Tools</h4>
			</div>
		</div>
		)
}

export default MostReadPost;