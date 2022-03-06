import React from 'react';
import './categoriesList.css';

function CategoriesList(argument) {
	return (
		<div className="categories__container">
			<ul className="categories__count">
				<li>Web Design <span className="web__design">230</span></li>
				<li>Javascript <span className="javascript">54</span></li>
				<li>Css <span className="css">35</span></li>
				<li>JQuery <span className="jquery">200</span></li>
			</ul>

			<ul className="categories__list">
				<li>Chrome</li>
				<li>Tutorial</li>
				<li>CSS</li>
				<li>Backend</li>
				<li>JQuery</li>
				<li>Design</li>
				<li>Development</li>
				<li>JavaScript</li>
				<li>Website</li>
			</ul>
		</div>
		)
}

export default CategoriesList;