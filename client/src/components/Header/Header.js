import React, {useState, useEffect} from 'react';
import './header.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import {Link} from 'react-router-dom';

function Header(argument) {

	const [isShowSearch,setSearchbar] = useState(false);
	const [user,setUser] = useState('');

	const handleSearchBar = () => {
		setSearchbar(!isShowSearch);
	}

	return (
		<div className="header">
		
			<div className="header__container">
				<div className="header__name">
					<Link to="/">
					<p>WEB<strong>MAG</strong></p>
					</Link>
				</div>

				<div className="header__navbar">
					<ul>
						{/* <li>News</li> */}
						{/* <li>Popular</li> */}
						<li className="web__design_underline"><Link to="/category/web design">Web Desgin</Link></li>
						<li className="javascript_underline"><Link to="/category/javascript">JavaScript</Link></li>
						<li className="css_underline"><Link to="/category/css">Css</Link></li>
						<li className="jquery_underline"><Link to="/category/jquery">JQuery</Link></li>
						{!user ? 
						<>
						<li><Link to="/login">Login</Link></li>
						<li><Link to="/register">Register</Link></li>
						</>
						:
						<React.Fragment>
						<li><Link to="/account">Account</Link></li>
						<li>Logout</li>
						</React.Fragment>
						}
					</ul>
				</div>

				<div className="header__icons">
					<MenuIcon />
					<SearchIcon onClick={handleSearchBar} />
				</div>
			</div>

			{isShowSearch == true ?
			<div className="header__container">
				<div className="header__searchBar">
					<input type="search" className="header__searchInput" placeholder="Enter Your Seach ..." />
					<CloseIcon onClick={handleSearchBar} />
				</div>
			</div>
			:
			<></>
			}

		</div>
		)
}

export default Header;