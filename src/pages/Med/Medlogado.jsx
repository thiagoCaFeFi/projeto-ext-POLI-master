import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Medlogado.css'; // Importe o arquivo CSS aqui
import Header2 from '../../components/header2';

function Medlogado() {
  const [file, setFile] = useState(null);
  const [cpf, setCPF] = useState('');
  const [senha, setSenha] = useState('');
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    // Carrega os dados do arquivo data.json ao iniciar o componente
    async function fetchData() {
      try {
        const response = await fetch('data.json');
        if (!response.ok) {
          throw new Error('Erro ao carregar os dados.');
        }
        const data = await response.json();
        setUsersData(data);
      } catch (error) {
        console.error('Erro:', error);
      }
    }
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Adiciona o novo usuário aos dados existentes
    const newUser = { cpf, senha };
    const newData = [...usersData, newUser];

    try {
      // Atualiza o arquivo data.json com os novos dados
      const response = await fetch('../../../data.json', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar os dados.');
      }

      console.log('Dados enviados com sucesso!');
      // Limpa os campos após o envio
      setCPF('');
      setSenha('');
    } catch (error) {
      console.error('Erro:', error);
      alert('Ocorreu um erro ao enviar os dados. Por favor, tente novamente.');
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      console.log('Nenhum arquivo selecionado');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', file);

      await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Arquivo enviado com sucesso');
    } catch (error) {
      console.error('Erro ao enviar arquivo:', error);
    }
  };

  return (
    <div>
      <Header2/>
    <div className="medlogado-container">
      <div className="section-title">Enviar Arquivo de Exame</div> {/* Adicionando título para a seção de envio de arquivo */}
      <input type="file" onChange={handleFileChange} />
      <button className="upload-button" onClick={handleUpload}>Enviar</button>
      <form onSubmit={handleSubmit}>
        <div className="register-title">Registrar paciente:</div>
        <div>
          <label htmlFor="cpf">CPF do paciente:</label>
          <input
            className="input-field"
            type="text"
            id="cpf"
            value={cpf}
            onChange={(e) => setCPF(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="senha">Senha:</label>
          <input
            className="input-field"
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>
        <button className="submit-button" type="submit">Enviar</button>
      </form>
    </div>
    </div>
  );
}

export default Medlogado;
