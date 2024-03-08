import '../components/login.css';
import { useState } from 'react';

function Login() {
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = { cpf, senha };

        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                
                console.log('Login bem-sucedido');

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

export default Login;
