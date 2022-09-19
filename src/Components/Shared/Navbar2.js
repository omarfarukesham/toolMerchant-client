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
    <>

      <div className="navbar bg-gray-800 z-10 sticky top-0">
        <div className="navbar-start text-white">
          <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-800 rounded-box w-52 text-white">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/Blogs">Blogs</Link> </li>
              <li><Link to="/Profile">Profile</Link> </li>
              <li><Link to="/Login">Login</Link></li>
              <li tabIndex="0">
                <a>
                  Products
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                </a>
                <ul className="p-2 bg-gray-800 text-white ">
                  <li className='hover:bg-base-300 '><Link to="/HealthCare">Health & Personal Care</Link></li>
                  <li className='hover:bg-base-300 '><Link to="/eProd">Electric</Link></li>
                  <li className='hover:bg-base-300 '><Link to="/mProd">Man's Accessories</Link></li>
                  <li className='hover:bg-base-300 '><Link to="/HealthCare">Cosmetics</Link></li>
                </ul>
              </li>


              <li><Link to="/profile">Contact</Link> </li>
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-xl  font-bold text-white ">BigBazar</Link>
        </div>

        <div className="navbar-center hidden lg:flex text-white">
          {/* <div className="form-control">
            <div className="input-group">
              <input type="text" placeholder="Search…" className="input input-bordered text-gray-800" />
              <button className="btn btn-square">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>
            </div>
          </div> */}
          <ul className="menu menu-horizontal p-0">

            <li><Link to="/"><span className='badge badge-primary font-bold text-red-500'> HOT</span></Link></li>
            <li><Link to="/">Home</Link></li>

            <li><Link to="/Blogs">Blogs</Link> </li>
            {/* <li><Link to="/profile">Profile</Link> </li> */}
            <li tabIndex="0">
              <a>
                Products
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
              </a>
              <ul className="p-2 bg-gray-800 text-white ">
                <li className='hover:bg-base-300 '><Link to="/HealthCare">Health & Personal Care</Link></li>
                <li className='hover:bg-base-300 '><Link to="/eProd">Electric</Link></li>
                <li className='hover:bg-base-300 '><Link to="/mProd">Man's Accessories</Link></li>
                <li className='hover:bg-base-300 '><Link to="/HealthCare">Cosmetics</Link></li>
              </ul>
            </li>


            <li><Link to="/contact">Contact</Link> </li>

            {
              user ?
                <>
                  <li><Link to="/Dashboard">Dashboard</Link></li>

                  <button onClick={logout} className="btn btn-primary">
                    <div class="avatar online p-2">
                      <div class="w-8 rounded-full">
                        {
                          user?.reloadUserInfo?.photoUrl ? <img src={user?.reloadUserInfo?.photoUrl} alt="User" /> : <img src="https://api.lorem.space/image/face?hash=28212" />
                        }

                      </div>
                    </div>
                    SignOut
                  </button>

                </> : <li><Link to="/login">Login</Link></li>
            }
          </ul>
        </div>

      </div>


    </>
  );
};

export default Navbar2;