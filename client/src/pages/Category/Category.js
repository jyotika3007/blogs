import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CategoryPost from '../../components/CategoryPost/CategoryPost';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import ReadPost from '../../components/ReadPost/ReadPost';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import './category.css';

function Category(argument) {
    return (
        <div className="category">
            <Header />


            <div className="category__container">
                <BreadCrumb page="Javascript"/>
                <div className='category__row'>

                    <div className="category__posts">
                        <CategoryPost />

                        <div className='category__post'>
                            <ReadPost course="javascript" publish_date="March 27, 2021" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
                            <ReadPost course="javascript" publish_date="March 27, 2021" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
                            <ReadPost course="javascript" publish_date="March 27, 2021" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
                            <ReadPost course="javascript" publish_date="March 27, 2021" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
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
                            <ReadPost />
                            <ReadPost />
                            <ReadPost />
                            <ReadPost />
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