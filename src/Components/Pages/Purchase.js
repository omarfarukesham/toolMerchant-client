import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Purchase = () => {
    const[QtyErr, setQtyErr] = useState('')
    const { id } = useParams()
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()
    const { data, isLoading } = useQuery('available', () => fetch(`http://localhost:5000/products/${id}`).then(res => res.json())
    )

    // react need loading time here is the loader...................................
    if (isLoading) {
        return <Loading></Loading>
    }

    const orderSubmit = (event) => {
        event.preventDefault()
      const qty = event.target.Qty.value;

        if (qty > data.stock || qty < data.minOrderQty) {
            
            const msg = 'Sorry quantity, minOrder need balance , Ensure please';
            setQtyErr(msg)
            return
        }
    
        const orderInfo = {
            product:data.name,
            name: user.displayName,
            email: user.email,
            phone: event.target.phone.value,
            orderQty: qty
        }
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                // authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(orderInfo)

        })
            .then(res => res.json())
            .then(data => {
                if(data){
                    toast.success('Your Order has submitted successfully.')
                    navigate('/myOrder')
                }
            })
       
    }

    return (
        <>

            <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-8 mx-20 mt-10'>
                <div class="card  bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Name: {data?.name}!</h2>
                        <h2 class="card-title">Available :{data?.stock}</h2>
                        <h2 class="card-title text-purple-500">MinOrder :{data?.minOrderQty}</h2>
                        <h2 class="card-title font-bold text-orange-500">LodPrice :${data?.price}</h2>
                        <h2 class="card-title font-bold text-orange-500">Shipping :$15</h2>

                        <p>{data?.details}</p>
                    </div>
                    <figure><img src={data?.image} alt="Shoes" /></figure>
                </div>
                <div class="card bg-base-100 shadow-xl">
                <form onSubmit={orderSubmit} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" name='product' disabled value={data?.name} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                       <p className='text-red-500'> {QtyErr}</p>
                        <input type="text" name="Qty" placeholder="Quantity" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                    {/* <form onSubmit={orderSubmit}>
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="Name" value={user?.displayName} disabled class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input name='email' type="email" value={user?.email} disabled class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Address</span>
                                </label>
                                <input name='address' type="text" placeholder="Address" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Phone</span>
                                </label>
                                <input name='number' type="number" placeholder="Phone No" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Country</span>
                                </label>
                                <input name='country' type="text" placeholder="Country" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Order Qty</span>
                                </label>
                                <input name='orderQty' type="number" placeholder="Order Qty" class="input input-bordered" />
                            </div>
                            <div class="form-control mt-6">
                            <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                            </div>
                        </div>
                    </form> */}

                </div>



            </div>


        </>
    );
};

export default Purchase;