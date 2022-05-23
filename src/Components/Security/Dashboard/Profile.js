import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const Profile = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    const updateProfile = (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const image = event.target.image.value;
        const email = event.target.email.value;
        const city = event.target.city.value;
        const phone = event.target.phone.value;
        const education = event.target.education.value;
        const profileInfo = {
            name: name,
            image: image,
            email: email,
            city: city,
            phone: phone,
            education: education

        }
        fetch(`http://localhost:4000/profile/${user?.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                // authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(profileInfo)

        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success('Your profile has updated successfully.')
                    event.target.reset()
                }
            })


    }

    const profileHandler = (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const image = event.target.image.value;
        const email = event.target.email.value;
        const city = event.target.city.value;
        const phone = event.target.phone.value;
        const education = event.target.education.value;
        const profileInfo = {
            name: name,
            image: image,
            email: email,
            city: city,
            phone: phone,
            education: education

        }
        console.log(profileInfo);
        fetch('http://localhost:4000/profile', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                // authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(profileInfo)

        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success('Your Profile has Saved on Database..')
                    event.target.reset()
                }
            })


    }
    return (
        <>
            <h1 className='text-4xl text-center font-bold text-purple-700 my-5'>My Profile</h1>
            <div className='grid lg:grid-cols-2 md:grid-cols-1 mx-10'>

                <div>
                    <div class="avatar">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://api.lorem.space/image/face?hash=3174" />
                        </div>

                    </div>
                    <div>
                        <h1 className='text-3xl font-bold text-secondary'>Name:{user?.displayName}</h1>
                        <p className='text-xl font-bold text-secondary'>Email:{user?.email}</p>
                        <label for="my-modal-6" class="btn btn-secondary">UpdateProfile</label>
                    </div>

                </div>

                <div class="card bg-base-100 shadow-xl">
                    <h1 className='text-center font-bold text-secondary text-3xl'>Make Your Profile....</h1>
                    <form onSubmit={profileHandler} className='grid grid-cols-1 gap-3 justify-items-center my-5'>
                        <input type="text" name='name' placeholder='Name' required className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="image" placeholder='Img url...' className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" placeholder='Email' required className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="city" placeholder='City' className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Phone Number" required className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="education" placeholder="Education" className="input input-bordered w-full max-w-xs" />

                        <input type="submit" value="Save Profile" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>

            </div>
            {/* MODAL CODE HERE..... */}
            <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                    <label for="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-center text-secondary">UpdateProfile......</h3>
                    <form onSubmit={updateProfile} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        
                        <input type="text" name="name" value={user?.displayName} disabled className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" value={user?.email} disabled className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="image" placeholder='Img url...' className="input input-bordered w-full max-w-xs" />
                        <input type="number" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="education" placeholder="education" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="city" placeholder="City" className="input input-bordered w-full max-w-xs" />

                        <input type="submit" value="Update" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>

        </div>
          
        </>
    );
};

export default Profile;