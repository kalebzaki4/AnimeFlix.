import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Menu from './Components/Menu';
import Inicio from './Paginas/Inicio';
import PaginaDetalhes from './Paginas/PaginaDetalhes';
import Erro404 from './Components/Erro404';
import ResultadoAnimes from './Paginas/ResultadoAnimes';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/Detalhes/:id' element={<PaginaDetalhes />} />
        <Route path='/a' element={<ResultadoAnimes />} />
        <Route path='*' element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
