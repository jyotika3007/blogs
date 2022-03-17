import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Post from '../../components/Post/Post';
import RecentPost from '../../components/RecentPost/RecentPost';
import ReadPost from '../../components/ReadPost/ReadPost';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import './home.css';
import { getAllPosts } from '../../service/api.js';

function Home(argument) {
const [recentPosts,setResentPosts] = useState([]);
const [featuredPosts,setFeaturedPosts] = useState([]);

useEffect(() => {
	const fetchData = async()=>{
		let postData = await getAllPosts();
		// console.log(postData.data.data);
		let data = postData.data.data
		setResentPosts(data);
	}

	fetchData();

	// console.log(recentPosts);

},[])

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
				{recentPosts.map(post => (
					// console.log(post)
					<React.Fragment>
					<RecentPost course="javascript" post={post}/>
					</React.Fragment>
				))}
				</div>
				<div className="home__posts">
					<RecentPost course="css"/>
					<RecentPost course="jquery"/>
					<RecentPost course="web__design"/>					
				</div>
			</div>

			<div className="home__recentPost">
				<div className="home__postHeading">
					<h2>Featured Posts</h2>
				</div>
				<div className="home__posts">
					<RecentPost course="javascript"/>
					<RecentPost course="jquery"/>
					<RecentPost course="web__design"/>	
				</div>
				<div className="home__posts">
					<RecentPost course="css"/>
					<RecentPost course="javascript"/>
					<RecentPost course="jquery"/>
				</div>
			</div>

			<div className="home__row">
				<div className="home__mostRead">
					<div className="home__postHeading">
					<h2>Most Read Posts</h2>
				</div>
					<ReadPost />
					<ReadPost />
					<ReadPost />
					<ReadPost />
				</div>

				<div className="home__featured">
				<div className="home__postHeading">
					<h2>Featured Posts</h2>
				</div>
					<ReadPost />
					<ReadPost />
					<ReadPost />
					<ReadPost />
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