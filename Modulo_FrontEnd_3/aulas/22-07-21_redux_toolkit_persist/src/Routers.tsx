import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';

export function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />

    </Routes>
  );
}
