import React from 'react';

const Review = () => {
    return (
        <>
            <h1 className='text-center text-5xl font-bold text-secondary my-20'>Customer Reviews</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 bg-white mb-20 mx-10'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <div class="avatar">
                            <div class="w-24 mask mask-hexagon">
                                <img src="https://api.lorem.space/image/face?hash=55350" />
                            </div>
                        </div>
                        <h2 class="card-title">Angelina Ducklowis!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <div class="avatar">
                            <div class="w-24 mask mask-hexagon">
                                <img src="https://api.lorem.space/image/face?hash=55350" />
                            </div>
                        </div>
                        <h2 class="card-title">Angelina Ducklowis!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <div class="avatar">
                            <div class="w-24 mask mask-hexagon">
                                <img src="https://api.lorem.space/image/face?hash=55350" />
                            </div>
                        </div>
                        <h2 class="card-title">Angelina Ducklowis!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Review;