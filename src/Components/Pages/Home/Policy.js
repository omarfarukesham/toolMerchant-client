import React from 'react';

const Policy = () => {
    return (
        <div className='mx-auto bg-base-200 shadow-lg p-10 w-full'>
            <h1 className='text-5xl mb-5 text-secondary text-center font-bold'>Best Policy</h1>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5'>
                <div className='w-full bg-base-100 mp-5 rounded-xl'>
                    <ul class="steps steps-vertical">
                        <li class="step step-secondary">Register</li>
                        <li class="step step-secondary">Choose Product</li>
                        <li class="step step-secondary">Purchase</li>
                        <li class="step step-secondary">Receive Product</li>
                        <li class="step">FeedBack us</li>
                    </ul>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 '>
                    <div class="indicator">
                        <span class="indicator-item badge badge-secondary"></span>
                        <div class="grid w-48  bg-base-100 place-items-center text-center">Make sure your Address and booking Id</div>
                    </div>

                    <div class="indicator">
                        <span class="indicator-item badge badge-secondary"></span>
                        <div class="grid w-48 bg-base-100 place-items-center text-center">
                           
                            <address>
                            <h1>Our Office</h1>
                                Level-4, 34, Awal Centre, Banani, Dhaka
                                Official: web@programming-hero.com
                                Helpline : 01322810873
                            </address>


                        </div>
                    </div>

                    <div class="indicator">
                        <span class="indicator-item badge badge-secondary"></span>
                        <div class="grid w-48 bg-base-100 place-items-center text-center">
                            <h1>
                            Download Our Policy PDF.................................
                            <a href="/images/myw3schoolsimage.jpg" download className='btn btn-secondary' >Policy</a>
                            </h1>
                           
                        
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Policy;