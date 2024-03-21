import '../components/loginmed.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Loginmed() {
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate(); // Função de navegação

    const handleSubmit = async (event) => {
        event.preventDefault();

        const datamed = { cpf, senha };

        try {
            const response = await fetch('http://localhost:3000/loginmed', {
                
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datamed)
            });

            if (response.ok) {
                // Redireciona para a página de logado
                navigate('/medlogado');
            } else {
                console.error('Falha no login');
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
        }
    };

    return (
        <div className="login-container">
            <h1 className='login-text'>Login</h1>
            <div className="login-box">
                <form onSubmit={handleSubmit} action="/login" method="post">
                    <label className='login-text2' htmlFor="cpf">CPF:</label>
                    <input
                        type='text'
                        id="cpf"
                        name="cpf"
                        value={cpf}
                        onChange={(event) => setCpf(event.target.value)}
                    /><br />
                    
                    <label className='login-text2' htmlFor="senha">Senha:</label>
                    <input
                        type='password'
                        id="senha"
                        name="senha"
                        value={senha}
                        onChange={(event) => setSenha(event.target.value)}
                    /><br />
                    
                    <input type="submit" value="Enviar" />
                </form>
            </div>
        </div>
    );
}

export default Loginmed;
