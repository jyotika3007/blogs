import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Post from '../../components/Post/Post';
import RecentPost from '../../components/RecentPost/RecentPost';
import ReadPost from '../../components/ReadPost/ReadPost';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import './home.css';
import { getRecentPosts, getFeaturedPosts, getMostReadPosts } from '../../service/api.js';

function Home(argument) {
const [recentPosts,setResentPosts] = useState([]);
const [featuredPosts,setFeaturedPosts] = useState([]);
const [mostReadPosts,setMostReadPosts] = useState([]);

useEffect(() => {
	const fetchRecentPostData = async()=>{
		let postData = await getRecentPosts();
		// console.log(postData.data.data);
		let data = postData.data.data
		setResentPosts(data);
	}
	const fetchFeaturedPostData = async()=>{
		let postData = await getFeaturedPosts();
		console.log(postData.data);
		let data = postData.data.data
		setFeaturedPosts(data);
	}
	const fetchMostReadPostData = async()=>{
		let postData = await getMostReadPosts();
		console.log(postData.data);
		let data = postData.data.data
		setMostReadPosts(data);
	}

	fetchRecentPostData();
	fetchFeaturedPostData();
	fetchMostReadPostData();

},[])

	return (
		<div className="home">
		<Header />

		<div className="home__container">
			<div className="home__posts">				
				<Post />
				<Post />
			</div>


			{/* Web Design Posts */}
			<div className="home__recentPost">
				<div className="home__postHeading">
					<h2>Web Design</h2>
				</div>
				<div className="home__posts">
				{recentPosts.map(post => (
					// console.log(post)
					<React.Fragment>
					<RecentPost post={post} key={post._id} />
					</React.Fragment>
				))}
				</div>				
			</div>


			{/* CSS Posts */}
			<div className="home__recentPost">
				<div className="home__postHeading">
					<h2>CSS</h2>
				</div>
				<div className="home__posts">
					{
						featuredPosts.map((post)=>(
							<React.Fragment>
								<RecentPost  post={post} key={post._id} />
							</React.Fragment>
						))
					}

				</div>
			</div>


			{/* Javascript Posts */}
			<div className="home__recentPost">
				<div className="home__postHeading">
					<h2>Javascript</h2>
				</div>
				<div className="home__posts">
					{
						featuredPosts.map((post)=>(
							<React.Fragment>
								<RecentPost  post={post} key={post._id} />
							</React.Fragment>
						))
					}

				</div>
			</div>


			{/* JQuery Posts */}
			<div className="home__recentPost">
				<div className="home__postHeading">
					<h2>JQuery</h2>
				</div>
				<div className="home__posts">
					{
						featuredPosts.map((post)=>(
							<React.Fragment>
								<RecentPost  post={post} key={post._id} />
							</React.Fragment>
						))
					}

				</div>
			</div>

			<div className="home__row">
				<div className="home__mostRead">
					<div className="home__postHeading">
					<h2>Most Read Posts</h2>
				</div>
				{
					mostReadPosts.map((post) => (
						<ReadPost post={post}/>
					))
				}
				</div>

				<div className="home__featured">
				<div className="home__postHeading">
					<h2>Featured Posts</h2>
				</div>
				{
					featuredPosts.map((post)=>(
						<ReadPost post={post} key={post._id} />
					))
				}
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