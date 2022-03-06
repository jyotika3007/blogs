import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Post from '../../components/Post/Post';
import RecentPost from '../../components/RecentPost/RecentPost';
import MostReadPost from '../../components/MostReadPost/MostReadPost';
import FeaturedPost from '../../components/FeaturedPost/FeaturedPost';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import './home.css';

function Home(argument) {
	return (
		<div className="home">
		<Header />


		<div className="home__container">
			<div className="home__posts">
				<Post />
				<Post />
			</div>

			<div className="home__recentPost">
				<div className="home__postHeading">
					<h2>Recent Posts</h2>
				</div>
				<div className="home__posts">
					<RecentPost />
					<RecentPost />
					<RecentPost />
				</div>
				<div className="home__posts">
					<RecentPost />
					<RecentPost />
					<RecentPost />
				</div>
			</div>

			<div className="home__row">
				<div className="home__mostRead">
					<div className="home__postHeading">
					<h2>Most Read Posts</h2>
				</div>
					<MostReadPost />
					<MostReadPost />
					<MostReadPost />
					<MostReadPost />
				</div>

				<div className="home__featured">
				<div className="home__postHeading">
					<h2>Featured Posts</h2>
				</div>
					<FeaturedPost />
					<FeaturedPost />
					<FeaturedPost />
					<FeaturedPost />
				</div>

				<div className="home__categories">
				<div className="home__postHeading">
					<h2>Categories</h2>
				</div>
					<CategoriesList />
				</div>
			</div>
		</div>

		<Footer />

		</div>
		)
}

export default Home;