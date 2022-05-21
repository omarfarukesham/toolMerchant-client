
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Components/Pages/Contact';
import Home from './Components/Pages/Home/Home';
// import Home from './Components/Pages/Home/Home';
import Protfolio from './Components/Pages/Protfolio';
import Teams from './Components/Pages/Teams';
import Login from './Components/Security/Login';
import Navbar from './Components/Shared/Navbar';

function App() {
  return (
    <>
      <Navbar>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/protfolio' element={<Protfolio />}></Route>
          <Route path='/teams' element={<Teams />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>

      </Navbar>
    </>
  );
}

export default App;
