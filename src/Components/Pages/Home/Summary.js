import React from 'react';

const Summary = () => {
    return (

        <div className='bg-secondary py-10'>
      
            <div className=" grid row-auto stats stats-vertical lg:stats-horizontal shadow text-center bg-secondary text-white mx-5">
                <div className="stat" data-aos="fade-up" data-aos-duration="1000">
                    <div className="stat-value text-accent text-4xl font-bold">Delivery</div>
                    <div className="stat-value">31K</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat" data-aos="fade-up" data-aos-duration="2000">
                    <div className="stat-value text-orange-500 text-4xl font-bold">Served</div>
                    <div className="stat-value">120 Countries</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>
                

                <div className="stat" data-aos="fade-up" data-aos-duration="2000">
                    <div className="stat-figure text-white">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src="https://api.lorem.space/image/face?w=128&h=128" />
                            </div>
                        </div>
                    </div>
                    <div className="stat-value text-orange-500 text-4xl font-bold">86%</div>
                    <div className="stat-value">Faster Service</div>
                    <div className="stat-title">Tasks done</div>
                    <div className="stat-desc text-secondary">31 tasks remaining</div>
                </div>
                <div className="stat" data-aos="fade-up" data-aos-duration="1000">
                    <div className="stat-value text-accent text-4xl font-bold">Clients</div>
                    <div className="stat-value">4,200</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

            </div>

        </div>

    );
};

export default Summary;