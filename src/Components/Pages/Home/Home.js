import React from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from '../../Shared/Footer';
import Products from '../Products';
import Banner from './Banner';
import Csr from './Csr';
import Policy from './Policy';
import Review from './Review';
import Services from './Services';
import Summary from './Summary';


const Home = () => {
    return (
        <>
        <Helmet>
        <title>Home</title>
      </Helmet>
        <Banner></Banner>
        <Services></Services>
        <Summary></Summary>
        <Policy></Policy>
        <Csr></Csr>
        
        <Review></Review>
        <Footer></Footer>
        </>
    );
};

export default Home;