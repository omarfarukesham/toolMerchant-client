import React from 'react';
import banner from '../../../assets/images/hBanner2.png'
const Banner = () => {
    return (
        <div class='hero h-screen lg:h-[70vh] relative py-5 '>
        <div class='hero-content flex-col lg:flex-row'>
          <div className='text-secondary ms:text-xl'>
            <p
              data-aos='fade-right'
              data-aos-duration='1000'
              data-aos-delay='200'
              className='text-xl'
            >
              Best Quality
            </p>
            <h1
              data-aos='fade-right'
              data-aos-delay='400'
              data-aos-duration='1000'
              class='text-4xl font-bold '
            >
              Watch
              For  Elitism
            </h1>
            <p
              data-aos='fade-right'
              data-aos-delay='600'
              data-aos-duration='2000'
              class='py-6 max-w-xl sm:max-w-lg'
            >
              Simple we believe business Ethics, so No compromised with the right sourcing 
            </p>
            <button
            
              className='btn btn-secondary text-white'
            >
            Visit Sourcing
            </button>
          </div>
          <div className='h-[60vh] shrink-0' data-aos="fade-in" data-aos-duration="2000">
            <img src={banner} class='h-full rounded-xl' alt='' />
          </div>
        </div>
      </div>
    );
};

export default Banner;