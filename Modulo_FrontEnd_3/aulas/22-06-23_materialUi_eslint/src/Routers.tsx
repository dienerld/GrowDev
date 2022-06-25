import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
<<<<<<< HEAD
=======
import { Landing } from './pages/Landing';
import { Login } from './pages/Login';
>>>>>>> 0a2cd793b0a751fd7590993f32d06954e5264f85

export function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
<<<<<<< HEAD
=======
      <Route path="/login" element={<Login/>}/>
      <Route path="/landing" element={<Landing/>}/>

>>>>>>> 0a2cd793b0a751fd7590993f32d06954e5264f85
    </Routes>
  );
}
