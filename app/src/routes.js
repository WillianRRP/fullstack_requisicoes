import{ BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './Pages/Home';
import Sobre from './Pages/Sobre';
import Contato from './Pages/Contato';
import Produto from './Pages/Produto';
import Erro from './Pages/Erro';


import Header from "./components/Header";



function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/> } />
            <Route path='/sobre' element={<Sobre/> } />
            <Route path='/Contato' element={<Contato/> } />
            <Route path='/Produto/:id' element={<Produto/> } />

            <Route path='*' element={<Erro/> } />
        </Routes>
        </BrowserRouter>
    )

}

export default RoutesApp