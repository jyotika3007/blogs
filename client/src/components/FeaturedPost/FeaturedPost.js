import React from 'react';
import './featuredPost.css';

function FeaturedPost(argument) {
	return (
		<div className="featuredPost__container">
			<div className="featuredPost__imageDiv">
				<img src="/images/post1.webp" alt="Post Image" className="featuredPost__image" />
			</div>
			<div className="featuredPost__info">
				<h4>Tell-A-Tool: Guide To Web Design And Development Tools</h4>
			</div>
		</div>
		)
}

export default FeaturedPost;