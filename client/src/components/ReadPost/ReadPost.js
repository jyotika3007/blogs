import React from 'react';
import './readPost.css';

function ReadPost({course,publish_date,desc}) {
	return (
		<div className="mostReadPost__container">
			<div className="mostReadPost__imageDiv">
				<img src="/images/post1.webp" alt="Post Image" className="mostReadPost__image" />
			</div>
			<div className="mostReadPost__info">
				{course ? 
				<>
				<ul>
					<li className={`course__name ${course}`}>{course}</li>
					<li>{publish_date}</li>
				</ul>
				<br/>
				</>
				:
				<>
				</>
				}
				<h4>Tell-A-Tool: Guide To Web Design And Development Tools</h4>
				<p>{desc}</p>
			</div>
		</div>
		)
}

export default ReadPost;