import logoupe from '../assets/logoupe.png';
import '../components/header.css'
import { Link } from 'react-router-dom';



function Header() {
    return(
        <header>
            <div className='Fundoheader'>
            <div>
                <Link to = "/">
              <img className='Logo'src={logoupe} alt="logoupe" />  
              </Link>
            </div>
                <div>
                    <Link to = "/agendamentos">
                    <button className='Consultas'>
                        Agendamentos
                    </button>
                    </Link>
                    <Link to = '/resultados'>
                    <button className='Resu'>Resultados</button>
                    </Link>
                <button className='Not'>Notícias</button>  
                </div>
            </div>
        </header>
    )
} export default Header