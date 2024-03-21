import React, { useState, useEffect } from 'react';
import './login.css';
import Header2 from "../../components/header2.jsx";

function Logado() {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        // Função para buscar a lista de arquivos disponíveis
        const fetchFiles = async () => {
            try {
                const response = await fetch('http://localhost:5000/files');
                if (response.ok) {
                    const data = await response.json();
                    setFiles(data.files);
                } else {
                    console.error('Erro ao buscar arquivos:', response.statusText);
                }
            } catch (error) {
                console.error('Erro ao buscar arquivos:', error);
            }
        };

        // Chamando a função de busca de arquivos ao montar o componente
        fetchFiles();
    }, []);

    // Função para baixar o arquivo
    const downloadFile = async (filename) => {
        try {
            const response = await fetch(`http://localhost:5000/download/${filename}`);
            if (response.ok) {
                // Cria um link temporário e o dispara para iniciar o download
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = filename;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            } else {
                console.error('Erro ao baixar arquivo:', response.statusText);
            }
        } catch (error) {
            console.error('Erro ao baixar arquivo:', error);
        }
    };

    return (
        <div>
            <div>
                <Header2 />
            </div>
            <div className="title">
                <span>Resultados de exames mais recentes</span>
            </div>
            <div className='Exames-container'>
                {/* Mapeando e exibindo a lista de arquivos disponíveis */}
                {files.map((filename, index) => (
                    <div key={index}>
                        <span>{filename}</span>
                        {/* Botão para baixar o arquivo */}
                        <button onClick={() => downloadFile(filename)}>
                            Baixar Arquivo
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Logado;