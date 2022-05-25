import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';

const Review = () => {
    const [user, loading, error] = useAuthState(auth);
    //using react query for loading appointment data..................................
    const { data, isLoading } = useQuery('available', () => fetch('http://localhost:4000/review').then(res => res.json())
    )

    //react need loading time here is the loader...................................
    if (isLoading) {
        return <Loading></Loading>
    }

    console.log(user)

    return (
        <div className='bg-primary py-10'>
            <h1 className='text-center text-5xl font-bold text-secondary my-8'>Customer Reviews</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 bg-white mb-20 mx-10'>

                {
                    data.map(review => <>
                        <div class="card w-96 bg-base-100 shadow-xl">
                            <div class="card-body">
                                <div class="avatar">
                                    <div class="w-24 mask mask-hexagon">
                                        {
                                            review?.photoURL ? <img src={review?.photoURL}  alt="userImg" /> : <img src="https://api.lorem.space/image/face?hash=55350" alt='fakeImage' />
                                        }

                                    </div>
                                </div>
                                <h2 class="card-title">{review.name}</h2>
                                <div class="rating">
                                    <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                                    <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" checked />
                                    <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                                    <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                                    <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                                </div>
                                <p>{review.details}</p>
                                <small className='text-green-500 font-bold'>Follow Me</small>
                                <div class="md:place-self-center md:justify-self-end">
                                    <div class="grid grid-flow-col gap-4">
                                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </>)
                }
            </div>
           


        </div>
    );
};

export default Review;