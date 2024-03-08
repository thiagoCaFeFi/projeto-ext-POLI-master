import logoupe from '../assets/logoupe.png';
import '../components/header2.css'
import { Link } from 'react-router-dom';



function Header2() {
    return(
        <header>
            <div className='Fundoheader2'>
            <div>
                <Link to = "/">
              <img className='Logo2'src={logoupe} alt="logoupe" />  
              </Link>
            </div>
            </div>
        </header>
    )
} export default Header2