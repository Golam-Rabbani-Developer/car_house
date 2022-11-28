
//external imports
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import About from './pages/About';
import Home from './pages/Home';

//internal imports
import Login from './pages/Login';
import Notfound from './pages/Notfound';
import Signup from './pages/Signup';
import SingleType from './pages/SingleType';



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' elment={<About />} />
        <Route path='/products/:id' element={<SingleType />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
