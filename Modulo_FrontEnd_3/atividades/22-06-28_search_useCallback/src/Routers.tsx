import { Route, Routes } from 'react-router-dom';
import { Five } from './pages/Five';
import { Four } from './pages/Four';
import { Home } from './pages/Home';
import { Tree } from './pages/Tree';
import { Two } from './pages/Two';

export function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/two" element={<Two />} />
      <Route path="/tree" element={<Tree />} />
      <Route path="/tree" element={<Tree />} />
      <Route path="/four" element={<Four />} />
      <Route path="/five" element={<Five />} />
    </Routes>
  );
}
