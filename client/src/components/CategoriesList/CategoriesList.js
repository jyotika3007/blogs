import React from 'react';
import './categoriesList.css';
import { Link } from 'react-router-dom';

function CategoriesList(argument) {
	return (
		<div className="categories__container">
			<ul className="categories__count">
				<li><Link to="/category/web design">Web Design <span className="web__design">230</span></Link></li>
				<li><Link to="/category/javascript">Javascript <span className="javascript">54</span></Link></li>
				<li><Link to="/category/css">Css <span className="css">35</span></Link></li>
				<li><Link to="/category/jquery">JQuery <span className="jquery">200</span></Link></li>
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