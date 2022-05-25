import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';

const MyReview = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()

    const addReview = (event) => {
        event.preventDefault()

        const name = event.target.name.value
        const rating = event.target.rating.value
        const details = event.target.details.value
        const photoURL = event.target.photoURL.value
        const country = event.target.country.value
        const reviewInfo = {
            name:name,
            rating:rating,
            details:details,
            photoURL:photoURL,
            country:country
        }
        fetch('http://localhost:4000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                // authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(reviewInfo)

        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success("Thanks, we received your Review");
                    event.target.reset()
                    navigate('/')

                }
            })

    }

    if(loading){
        return <Loading></Loading>
    }

    return (
        <>
            <div className='flex justify-center'>
                <div class="avatar online">
                    <div class="w-24 rounded-full">
                        {
                            user?.photoURL ? <img src={user?.photoURL} alt="userImage" /> :<><img src="https://api.lorem.space/image/face?hash=28212" alt='unknownImages' /></>
                        }
                    </div>
                </div>
                <div>
                    
                </div>

            </div>
            <p className='text-center my-5 text-2xl font-bold text-secondary'>UserName : {user?.displayName}</p>

            <div className='grid lg:grid-cols-1 md:grid-cols-1 mx-10'>
                <div class="card bg-base-200 shadow-xl">
                    <h1 className='text-center font-bold text-secondary text-3xl'>Review</h1>
                    <form onSubmit={addReview} className='grid grid-cols-1 gap-3 justify-items-center my-5'>
                        <input type="text" name='name' value={user?.displayName} required disabled className="input input-bordered w-full max-w-xs" />
                        <select name="rating" required className="select select-bordered w-full max-w-xs">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>

                        </select>
                        <textarea type="text" name="details" placeholder='Review Comments....' required className=" input-bordered textarea w-full max-w-xs" />
                        <input type="text" name='photoURL' placeholder='Image URL...' className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="country" placeholder="Country" required className="input input-bordered w-full max-w-xs" />


                        <input type="submit" value="Save Review" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>

        </>
    );
};

export default MyReview;