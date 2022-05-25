import React from 'react';

const Summary = () => {
    return (

        <div className='bg-primary py-10'>
            <h1 className='my-10 text-center text-5xl font-bold text-secondary'>Summary</h1>

            <div class=" grid row-auto stats stats-vertical lg:stats-horizontal shadow text-center bg-primary">
                <div class="stat">
                    <div class="stat-title text-purple-500 text-4xl font-bold">Delivery</div>
                    <div class="stat-value">31K</div>
                    <div class="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div class="stat">
                    <div class="stat-title text-orange-500 text-4xl font-bold">Served</div>
                    <div class="stat-value">120 Countries</div>
                    <div class="stat-desc">↗︎ 400 (22%)</div>
                </div>
                

                <div class="stat">
                    <div class="stat-figure text-secondary">
                        <div class="avatar online">
                            <div class="w-16 rounded-full">
                                <img src="https://api.lorem.space/image/face?w=128&h=128" />
                            </div>
                        </div>
                    </div>
                    <div class="stat-value text-orange-500 text-4xl font-bold">86%</div>
                    <div class="stat-title">Tasks done</div>
                    <div class="stat-desc text-secondary">31 tasks remaining</div>
                </div>
                <div class="stat">
                    <div class="stat-title text-purple-500 text-4xl font-bold">Clients</div>
                    <div class="stat-value">4,200</div>
                    <div class="stat-desc">↗︎ 400 (22%)</div>
                </div>

            </div>

        </div>

    );
};

export default Summary;