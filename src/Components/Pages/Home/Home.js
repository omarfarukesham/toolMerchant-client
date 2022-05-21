import React from 'react';
import Footer from '../../Shared/Footer';
import Products from '../Products';
import Banner from './Banner';
import Services from './Services';
import Summary from './Summary';


const Home = () => {
    return (
        <>
        <Banner></Banner>
        <Services></Services>
        <Summary></Summary>
        <Footer></Footer>
        </>
    );
};

export default Home;