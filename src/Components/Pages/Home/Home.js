import React from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from '../../Shared/Footer';
import Products from '../Products';
import Banner from './Banner';
import HotSales from './HotSales';
import NewCollection from './NewCollection';
import NewProduct from './NewProduct';

import Policy from './NewProduct';
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
        <Summary></Summary>
        <Services></Services>
    
        <NewCollection></NewCollection>
        <NewProduct></NewProduct>
        <HotSales></HotSales>
        <Review></Review>
        <Footer></Footer>
        </>
    );
};

export default Home;