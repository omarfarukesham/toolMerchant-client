import React from 'react';
import banner from '../../../assets/images/banner3.jpg'
const Banner = () => {
    return (
        <div class='hero h-screen lg:h-[70vh] bg-primary relative z-10 py-5 '>
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
              data-aos-duration='900'
              class='text-4xl font-bold '
            >
              Professional Tools
              For Each <br></br> MASONRY
            </h1>
            <p
              data-aos='fade-right'
              data-aos-delay='600'
              data-aos-duration='800'
              class='py-6 max-w-xl sm:max-w-lg'
            >
              Quality tools can make your professional work more efficient, and safe. We wish to be a best partner
              with our work, so lets explore..... 
            </p>
            <button
              data-aos='zoom-in'
              data-aos-delay='1300'
              class='btn btn-secondary'
            >
             Purchase Now
            </button>
          </div>
          <div className='h-[60vh] shrink-0'>
            <img src={banner} class='h-full rounded-xl' alt='' />
          </div>
        </div>
      </div>
    );
};

export default Banner;