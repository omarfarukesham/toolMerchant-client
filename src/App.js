
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
          {/* <Route path='payment/:id' element={<Payment></Payment>}></Route> */}
          <Route path='Users' element={<Users></Users>}></Route>
          <Route path='addDoctor' element={<RequireAdmin><AddAdmin></AddAdmin></RequireAdmin>}></Route>

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
