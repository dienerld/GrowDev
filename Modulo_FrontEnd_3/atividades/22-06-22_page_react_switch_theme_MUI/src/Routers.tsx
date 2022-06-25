import { Route, Routes } from 'react-router-dom';
import { Landing } from './pages/Landing';

export function Routers() {
  return (
    <Routes>
      <Route path="/landing" element={<Landing />} />

    </Routes>
  );
}
