import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CategoryPost from '../../components/CategoryPost/CategoryPost';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import ReadPost from '../../components/ReadPost/ReadPost';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import './category.css';
import { getMostReadPosts } from '../../service/api.js'

function Category(argument) {

    const [mostReadPosts, setMostReadPost] = useState([])
    const [categoryPosts, setCategoryPost] = useState([])

    useEffect(()=>{

        const fetchCategoryPosts = async() => {
            let fetchData = await getMostReadPosts();
            // console.log(fetchData)
            let data = fetchData.data.data
            setMostReadPost(data)
        }

        const fetchMostReadPosts = async() => {
            let fetchData = await getMostReadPosts();
            // console.log(fetchData)
            let data = fetchData.data.data
            setMostReadPost(data)
        }
        fetchMostReadPosts();
    },[])
    return (
        <div className="category">
            <Header />

            <div className="category__container">
                <BreadCrumb page="Javascript"/>
                <div className='category__row'>

                    <div className="category__posts">
                        <CategoryPost />

                        <div className='category__post'>
                            {
                                mostReadPosts.map(post => (
                                    <React.Fragment>
                                    <ReadPost post={post} />
                                    </React.Fragment>

                                ))
                            }

 
                        </div>
                        <div className='category_loadMore'>
                            <button className='primary-button'>Load More </button>
                        </div>
                    </div>

                    <div className="category__adds">
                        <div className="category__mostRead">
                            <div className="category__postHeading">
                                <h2>Most Read Posts</h2>
                            </div>
                            {
                                mostReadPosts.map(post => (
                                    <React.Fragment>
                                    <ReadPost post={post} />
                                    </React.Fragment>

                                ))
                            }

 
                        </div>

                        <div className="category__categories">
                            <div className="category__postHeading">
                                <h2>Categories</h2>
                            </div>
                            <CategoriesList />
                        </div>

                        <div className="category__archieve">
                            <div className="category__postHeading">
                                <h2>Archieve</h2>
                            </div>
                            <ul>
                                <li>Jan 2018</li>
                                <li>Jan 2019</li>
                                <li>Jan 2020</li>
                                <li>Jan 2021</li>
                            </ul>
                        </div>
                    </div>


                </div>



            </div>

            <Footer />

        </div>
    )
}

export default Category;