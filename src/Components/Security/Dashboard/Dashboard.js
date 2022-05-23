import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../Hooks/useAdmin';
// import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">
                {/* <!-- Page content here --> */}
                <h1 className='text-2xl text-purple-500 text-bold'>Welcome to my Dashboard</h1>
                <Outlet></Outlet>
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content mb-2">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/Dashboard">My Order</Link></li>
                    <li><Link to='/Dashboard/MyReview'>My Review</Link></li>
                    <li><Link to='/Dashboard/Users'>Users</Link></li>

                    {admin && <>
                        <li><Link to='/Dashboard/Users'>Users</Link></li>
                        <li><Link to='/Dashboard/addUser'>Add a user</Link></li>
                        <li><Link to='/Dashboard/AddAdmin'>Manage Admin</Link></li>
                    </>}
                </ul>

            </div>
        </div>

    );
};

export default Dashboard;