import { BrowserRouter } from 'react-router-dom';
import { Menu } from './components/Menu';
import { Routers } from './config/Routers';

export function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routers></Routers>
    </BrowserRouter>
  );
}
