import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home/Home';
import Agendamentos from './pages/Agendamentos/Agendamentos';
import Resultados from './pages/resultados/Resultados';
import Logado from '../src/pages/Logado/Logado';
import Loginmed from './components/loginmed';
import Medlogado from './pages/Med/Medlogado';



function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/agendamentos" element={<Agendamentos />} />
                <Route path="/resultados" element={<Resultados />} />
                <Route path="/logado" element={<Logado />} />
                <Route path="/med" element={<Loginmed/>} />
                <Route path="/Medlogado" element={<Medlogado />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
