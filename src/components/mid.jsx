import '../components/mid.css'
import { Link } from 'react-router-dom';

function Mid() {
    return(
        <div className='Midcontainer'>
            <button className='Ins'>Institucional</button>
            <button className='Estrutura'>Estrutura</button>
            <Link to = "/med"><button className='Area'>Área Médica</button> </Link>
            <button className='Contato'>Contato</button>
        </div>
    )
}
export default Mid