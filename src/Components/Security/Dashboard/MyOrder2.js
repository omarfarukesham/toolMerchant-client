import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const MyOrder2 = () => {
    const [orders, setOrders] = useState([])
    const [user] = useAuthState(auth);
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:4000/order?userEmail=${user?.email}`)
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        navigate('/')
                        signOut(auth);
                        localStorage.removeItem('accessToken')
                    }
                    return res.json()
                })
                .then(data => setOrders(data));
        }
    }, [])



    return (
        <div class="overflow-x-auto">
            <table class="table w-full">

                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>ProductName</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((a, index) => <tr key={a._id}>
                            <th>{index + 1}</th>
                            <td>{a.name}</td>
                            <td>{a.product}</td>
                            <td>${a.price}</td>
                            <td>{a.orderQty}</td>
                            <td>
                                    {(a.price && !a.paid) && 
                                    <>
                                    <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success'>pay</button></Link> or <button className='btn btn-xs  btn-error'>Cancel</button>
                                    </>
                                    
                                    
                                    }
                                    {(a.price && a.paid) && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                        {/* <p>Transaction id: <span className='text-success'>{a.transactionId}</span></p> */}
                                    </div>}
                                </td>
                        </tr>)
                    }





                </tbody>
            </table>
        </div>
    );
};

export default MyOrder2;