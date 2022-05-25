import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar2 = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
  };


  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Blogs">Blogs</Link> </li>
            <li><Link to="/Profile">Profile</Link> </li>
            <li><Link to="/Login">Login</Link></li>
            

          </ul>
        </div>
        <Link to='/' className="btn btn-ghost normal-case text-xl text-secondary font-bold ">ToolMerchant</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Blogs">Blogs</Link> </li>
          <li><Link to="/profile">Profile</Link> </li>

          {
            user ?
              <>
                <li><Link to="/Dashboard">Dashboard</Link></li>
                <button onClick={logout} className='btn btn-secondary btn-sm mt-2'>SignOut</button>
              </> : <li><Link to="/login">Login</Link></li>
          }
        </ul>
      </div>

    </div>
  );
};

export default Navbar2;