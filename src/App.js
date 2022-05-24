
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Blogs from './Components/Pages/Blogs';
import Contact from './Components/Pages/Contact';
import Home from './Components/Pages/Home/Home';
import MyOrder from './Components/Pages/MyOrder';
import Products from './Components/Pages/Products';
import Purchase from './Components/Pages/Purchase';
import AddAdmin from './Components/Security/Dashboard/AddAdmin';
import Dashboard from './Components/Security/Dashboard/Dashboard';
import MyOrder2 from './Components/Security/Dashboard/MyOrder2'
import Users from './Components/Security/Dashboard/Users';
import MyReview from './Components/Security/Dashboard/MyReview';
import RequireAdmin from './Components/Security/RequireAdmin'
// import Home from './Components/Pages/Home/Home';

import Login from './Components/Security/Login';
import RequireAuth from './Components/Security/RequireAuth';
import SignUp from './Components/Security/SignUp';
import Navbar from './Components/Shared/Navbar';
import Navbar2 from './Components/Shared/Navbar2';
import AddProduct from './Components/Security/Dashboard/AddProduct';
import Profile from './Components/Security/Dashboard/Profile';
import ManageOrder from './Components/Security/Dashboard/ManageOrder';
import UpdateProfile from './Components/Security/Dashboard/UpdateProfile';
import Payment from './Components/Security/Dashboard/Payment';

function App() {
  return (
    <>
      <Navbar2> </Navbar2>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={
          <RequireAuth>
            <Products />
          </RequireAuth>
        }></Route>
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        }></Route>

      <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>

        }>
          <Route index element={<MyOrder2></MyOrder2>}></Route>
          <Route path='MyReview' element={<MyReview></MyReview>}></Route>
          <Route path='profile' element={<Profile></Profile>}></Route>
          <Route path='updateProfile' element={<UpdateProfile></UpdateProfile>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
         
          <Route path='addProduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path='Users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path='manageOrder' element={<RequireAdmin><ManageOrder></ManageOrder></RequireAdmin>}></Route>

        </Route>

        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/myOrder' element={<MyOrder />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
      </Routes>
      <ToastContainer></ToastContainer>

    </>
  );
}

export default App;
