import React from 'react';
import './footer.css';
import SendIcon from '@mui/icons-material/Send';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { Link } from 'react-router-dom';

function Footer(argument) {
	return (
		<div className="footer">

			<div className="footer__logo">
				<p className='footer__logoName'>WEB<strong>MAG</strong></p>
				<ul>
					<li>Privacy Policy</li>
					<li>Advertisement</li>
				</ul>

				<br />
				<p className="footer__copyright">@copyright  @2022 All Rights Reserved</p>
			</div>

			<div className="footer__aboutUs">
				<h3>About Us</h3>
				<ul>	
					<li><Link to="/about-us">About Us</Link></li>
					<li>Join Us</li>
					<li><Link to="/contact-us">Contact Us</Link></li>
				</ul>
			</div>

			<div className="footer__categories">
				<h3>Categories</h3>
				<ul>
					<li><Link to="/category">Web Design</Link></li>
					<li><Link to="/category">Javascript</Link></li>
					<li><Link to="/category">CSS</Link></li>
					<li><Link to="/category">JQuery</Link></li>
				</ul>
			</div>

			<div className="footer__newsletter">
				<h3>Join Our Newsletter</h3>
				<div className='footer__newletterInput'>
				<input type="email" placeholder='Enter your email ... ' />
				<SendIcon className='footer__paperPlane'/>
				</div>
				<ul className='footer__icons'>
					<li><FacebookIcon /></li>
					<li><TwitterIcon /></li>
					<li><GoogleIcon /></li>
					<li><PinterestIcon /></li>
				</ul>
			</div>


		</div>
	)
}

export default Footer;