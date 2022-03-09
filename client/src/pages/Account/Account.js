import React from 'react';
import './account.css';
import AccountMenu from '../../components/AccountMenu/AccountMenu';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

export default function Account() {
  return (
    <div className='account'>
        <Header />

        <div className='account__div'>
        <BreadCrumb page="Account"/>
        <AccountMenu />
        
        </div>

        <Footer      />
    </div>
  )
}
