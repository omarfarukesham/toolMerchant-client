import React from 'react';
import service1 from '../../../assets/masonary.jpg'
import service2 from '../../../assets/mixing.jpg'
import service3 from '../../../assets/powersow2.jpg'

const Services = () => {
    return (
        <>
            <div className='mx-auto bg-base-200 shadow-lg p-10 w-full'>
                <h1 className='text-4xl mb-5 text-secondary text-center text-bold'>Our World Class Tools</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
                    <div class="card bg-base-100 shadow-xl">
                        <figure class="px-10 pt-10">
                            <img src={service1} alt="Shoes" class="rounded-xl" />
                        </figure>
                        <h3 className='text-bold text-secondary text-center mt-5'> Price $90</h3>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">Anti Age Face Treatment</h2>
                            <p>We craft stunning and amazing anti age treatment, to
                                Remove the ageing agent, we will help you..
                            </p>

                            <div class="card-actions">
                                <button class="btn btn-secondary text-white">Booking Now</button>
                            </div>
                        </div>
                    </div>
                    <div class="card bg-base-100 shadow-xl">
                        <figure class="px-10 pt-10">
                            <img src={service2} alt="Shoes" class="rounded-xl" />
                        </figure>
                        <h3 className='text-bold text-secondary text-center mt-5'> Price $90</h3>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">Hair Color & Styleing</h2>
                            <p>We craft stunning and amazing anti age treatment, to
                                Remove the ageing agent, we will help you..
                            </p>

                            <div class="card-actions">
                                <button class="btn btn-secondary text-white">Booking Now</button>
                            </div>
                        </div>
                    </div>
                    <div class="card bg-base-100 shadow-xl">
                        <figure class="px-10 pt-10">
                            <img src={service3} alt="Shoes" class="rounded-xl" />
                        </figure>
                        <h3 className='text-bold text-secondary text-center mt-5'> Price $90</h3>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">Skin Care Treatment</h2>
                            <p>We craft stunning and amazing anti age treatment, to
                                Remove the ageing agent, we will help you..
                            </p>

                            <div class="card-actions">
                                <button class="btn btn-secondary text-white">Booking Now</button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
};

export default Services;