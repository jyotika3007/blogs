import React from 'react';
import './account.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import RecentPost from '../../components/RecentPost/RecentPost';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Profile from '../../components/Accounts/Profile/Profile';
import AddPost from '../../components/Accounts/AddPost/AddPost';

export default function Account() {
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
              <Tab>Add Post</Tab>
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


            <TabPanel>
              <AddPost />
            </TabPanel>


            <TabPanel>
              <h2>Any content 4</h2>
            </TabPanel>


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
