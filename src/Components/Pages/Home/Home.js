import React from 'react';
import Footer from '../../Shared/Footer';
import Products from '../Products';
import Banner from './Banner';
import Csr from './Csr';
import Review from './Review';
import Services from './Services';
import Summary from './Summary';


const Home = () => {
    return (
        <>
        <Banner></Banner>
        <Services></Services>
        <Summary></Summary>
        <Csr></Csr>
        <Review></Review>
        <Footer></Footer>
        </>
    );
};

export default Home;