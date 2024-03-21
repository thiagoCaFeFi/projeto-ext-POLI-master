import React, { useState } from 'react';
import axios from 'axios';

function Medlogado() {
  const [file, setFile] = useState(null);

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
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Enviar</button>
    </div>
  );
}

export default Medlogado;