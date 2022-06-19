import { Routes, Route } from 'react-router-dom';
import { BadRequest } from './pages/BadRequest';
import { Home } from './pages/Home';

export function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/*" element={<BadRequest/>}/>
    </Routes>
  );
}
