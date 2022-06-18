import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import ListaMercado from './pages/ListaMercado';
import { NotFound } from './pages/NotFound';

export function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mercado" element={<ListaMercado />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
