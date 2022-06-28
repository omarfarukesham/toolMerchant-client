import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Helmet } from 'react-helmet-async';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../Hooks/useAdmin';
// import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <>
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col">
                    {/* <!-- Page content here --> */}
                    <h1 className='text-2xl text-purple-500 text-bold'>Dashboard - </h1>
                    <Outlet></Outlet>
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content mb-2">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to="/Dashboard">MyOrder</Link></li>
                        <li><Link to='/Dashboard/MyReview'>MyReview</Link></li>
                        <li><Link to='/Dashboard/Profile'>Profile</Link></li>


                        {admin && <>
                            <li className='bg-secondary text-white my-2 rounded-lg' ><Link to='/Dashboard/Users'>MakeAdmin</Link></li>
                            <li className='bg-secondary text-white my-2 rounded-lg' ><Link to='/Dashboard/addProduct'>AddProduct</Link></li>
                            <li className='bg-secondary text-white my-2 rounded-lg' ><Link to='/Dashboard/manageOrder'>ManageOrder</Link></li>
                        </>}
                    </ul>

                </div>
            </div>
        </>
    );
};

export default Dashboard;