import './Institucional.css'
import cisam from '../../assets/cisam.jpg'

function Institucional(){
    return(
        <div className='container-inst'>
            <h1 className="text">Instuticional</h1>
            <span >
            Criado em 2012, através da Resolução CONSUN nº 18, o Complexo Hospitalar é subordinado à Reitoria e composto pelo Conselho de Administração do Complexo Hospitalar, Superintendência e Unidades Hospitalares (CISAM, HUOC e PROCAPE). Sua finalidade é potencializar os Hospitais Universitários do Campus Santo Amaro da Universidade de Pernambuco (UPE) enquanto centro articulado de formação profissional e polo assistencial inserido na Rede Estadual de Saúde.
            </span>
            <img className='cisam'src={cisam} alt="logoupe" />
            < br />< br />< br />< br />< br />< br />< br />< br />
        </div>
    )
}

export default Institucional