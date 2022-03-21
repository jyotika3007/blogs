import React, { useEffect, useState } from 'react';
import './account.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import RecentPost from '../../components/RecentPost/RecentPost';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Profile from '../../components/Accounts/Profile/Profile';
import AddPost from '../../components/Accounts/AddPost/AddPost';
import ResetPassword from '../../components/Accounts/ResetPassword/ResetPassword';
import {getUsersPosts} from '../../service/api.js';

export default function Account() {

  const [myPosts, setMyPosts] = useState([]);

  useEffect(()=>{
    const fetchMyPosts = async() => {
      let fetchData = getUsersPosts();
      let data = fetchData.data.data;
      console.log(data)
      setMyPosts(data);  
    }

    fetchMyPosts();
  }, [])
  return (
    <div className='account'>
      <Header />

      <div className='account__div'>
        <BreadCrumb page="Account" />
        <div className='account__divBody'>

          {/* <AccountMenu /> */}
          {/* <AccountBody /> */}

          <Tabs>
            <TabList>
              <Tab>Profile</Tab>
              <Tab>All Posts</Tab>
              <Tab>Create Post</Tab>
              <Tab>Reset Pasword</Tab>
              <Tab>Logout</Tab>
            </TabList>


            {/* Author Profile */}
            <TabPanel>
              <Profile />
            </TabPanel>


            {/* Author's Post */}
            <TabPanel>
              <h2>All Posts</h2>
              <div className='users__post'>
                <RecentPost course="css"/>
                <RecentPost course="jquery"/>
                <RecentPost course="javascript"/>
              </div>
              <div className='users__post'>
                <RecentPost course="javascript"/>
                <RecentPost course="css" />
                <RecentPost course="jquery"/>
              </div>
            </TabPanel>


            {/* Add New Post */}
            <TabPanel>
              <AddPost />
            </TabPanel>


            {/* Reset User's Password */}
            <TabPanel>
              <ResetPassword />
            </TabPanel>


            {/* Logout */}
            <TabPanel>
              <h2>Any content 5</h2>
            </TabPanel>

          </Tabs>

        </div>
      </div>

      <Footer />
    </div>
  )
}
