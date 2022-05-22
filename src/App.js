
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Components/Pages/Blogs';
import Contact from './Components/Pages/Contact';
import Home from './Components/Pages/Home/Home';
import Products from './Components/Pages/Products';
import Purchase from './Components/Pages/Purchase';
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
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
      </Routes>


    </>
  );
}

export default App;
