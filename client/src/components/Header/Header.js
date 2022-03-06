import React, {useState, useEffect} from 'react';
import './header.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

function Header(argument) {

	const [isShowSearch,setSearchbar] = useState(false);

	const handleSearchBar = () => {
		setSearchbar(!isShowSearch);
	}

	return (
		<div className="header">
		
			<div className="header__container">
				<div className="header__name">
					<p>WEB<strong>MAG</strong></p>
				</div>

				<div className="header__navbar">
					<ul>
						<li>News</li>
						<li>Popular</li>
						<li className="web__design_underline">Web Desgin</li>
						<li className="javascript_underline">JavaScript</li>
						<li className="css_underline">Css</li>
						<li className="jquery_underline">JQuery</li>
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