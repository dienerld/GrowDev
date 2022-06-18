import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About } from './pages/About';
import { Home } from './pages/Home';

export function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/about" element={<About />} />;
      </Routes>
    </BrowserRouter>
  );
}
