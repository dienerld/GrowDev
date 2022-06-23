import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Landing } from './pages/Landing';
import { Login } from './pages/Login';

export function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/landing" element={<Landing/>}/>

    </Routes>
  );
}
