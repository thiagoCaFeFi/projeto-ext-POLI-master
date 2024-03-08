import Home from '../src/pages/Home/Home'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Agendamentos from './pages/Agendamentos/Agendamentos'
import Resultados from './pages/resultados/Resultados'

function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path = '/' element = {<Home/>}>
            </Route>
            <Route path = '/agendamentos' element = {<Agendamentos/>}></Route>
            <Route path='/resultados' element= {<Resultados/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes