import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';

export function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
