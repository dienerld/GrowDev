import { Route, Routes } from 'react-router-dom';
import { Landing } from './pages/Landing';

export function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

    </Routes>
  );
}
