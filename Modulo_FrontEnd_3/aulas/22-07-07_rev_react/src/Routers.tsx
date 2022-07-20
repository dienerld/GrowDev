import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import Revisao from './pages/Revisao';
import Atividade from './pages/Atividade';

export default function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/revisao' element={<Revisao/>} />
                <Route path='/atividade' element={<Atividade/>} />
            </Routes>
        </BrowserRouter>
    );
}