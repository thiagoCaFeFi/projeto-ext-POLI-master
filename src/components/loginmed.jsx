import '../components/loginmed.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Loginmed() {
    const [id, setId] = useState('');
    const [senhamed, setSenhamed] = useState('');
    const navigate = useNavigate(); // Função de navegação

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = { id, senhamed };

        try {
            const response = await fetch('http://localhost:5000/loginmed', {
                
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
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
                    <label className='login-text2' htmlFor="id">id:</label>
                    <input
                        type='text'
                        id="id"
                        name="id"
                        value={id}
                        onChange={(event) => setId(event.target.value)}
                    /><br />
                    
                    <label className='login-text2' htmlFor="senha">Senha:</label>
                    <input
                        type='password'
                        id="senha"
                        name="senha"
                        value={senhamed}
                        onChange={(event) => setSenhamed(event.target.value)}
                    /><br />
                    
                    <input type="submit" value="Enviar" />
                </form>
            </div>
        </div>
    );
}

export default Loginmed;