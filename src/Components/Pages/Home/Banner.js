import React from 'react';
import banner from '../../../assets/images/hBanner2.png'
const Banner = () => {
  return (
    <>
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
            <label htmlFor="my-modal-5" className="btn btn-secondary modal-button text-white">Visit Sourcing</label>
          </div>
          <div className='h-[60vh] shrink-0' data-aos="fade-in" data-aos-duration="2000">
            <img src={banner} class='h-full rounded-xl' alt='' />
          </div>
        </div>
      </div>

      <div>
        <input type="checkbox" id="my-modal-5" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
          <div class="modal-box">
            <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKmUa2psdNkO98soENzu_nnc8jPre5prRAmw&usqp=CAU" alt="Amazon" /></figure>
            <br></br>
            <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd_pQDaisSaASM2KJ29WMmDA7akILc8kRnEg&usqp=CAU" alt="Alibaba" /></figure>
            <br></br>
            <figure><img src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i_jL1RjI.qH4/v0/1200x800.jpg" alt="eBay" /></figure>


            <div class="modal-action">
              <label for="my-modal-5" class="btn btn-secondary text-white">Close!</label>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Banner;