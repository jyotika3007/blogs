import React from 'react';
import './footer.css';

function Footer(argument) {
	return (
		<div className="footer">

			<div className="footer__logo">
				<h1>WEBMAG</h1>
				Privacy Policy
				Advertisement

				@copyright  @2022 All Rights Reserved
			</div>

			<div className="footer__aboutUs">
				<h1>About Us</h1>
				<ul>
					<li>About Us</li>
					<li>Join Us</li>
					<li>Contact Us</li>
				</ul>
			</div>

			<div className="footer__categories">
				<h1>Categories</h1>
				<ul>
					<li>Web Design</li>
					<li>Javascript</li>
					<li>CSS</li>
					<li>JQuery</li>
				</ul>
			</div>

			<div className="footer__newsletter">
				4
			</div>


		</div>
		)	
}

export default Footer;