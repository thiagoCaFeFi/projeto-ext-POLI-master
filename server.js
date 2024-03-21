const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const multer = require('multer');
const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'upload/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });

app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'Nenhum arquivo foi enviado' });
    }

    // Processar o arquivo conforme necessário
    console.log('Arquivo recebido:', req.file);

    // Responder ao cliente com uma mensagem de sucesso
    res.status(200).json({ message: 'Arquivo recebido com sucesso' });
});
// Endpoint para listar arquivos disponíveis
app.get('/files', (req, res) => {
    const uploadDir = path.join(__dirname, 'upload');

    // Lê o conteúdo do diretório /upload
    fs.readdir(uploadDir, (err, files) => {
        if (err) {
            console.error('Erro ao listar arquivos:', err);
            return res.status(500).json({ error: 'Erro ao listar arquivos' });
        }

        // Retorna os nomes dos arquivos
        res.status(200).json({ files });
    });
});

// Endpoint para download de arquivos
app.get('/download/:filename', (req, res) => {
    const filename = req.params.filename;
    const uploadDir = path.join(__dirname, 'upload');
    const filePath = path.join(uploadDir, filename);

    if (fs.existsSync(filePath)) {
        res.download(filePath, filename, (err) => {
            if (err) {
                console.error('Erro ao baixar arquivo:', err);
                res.status(500).send('Erro ao baixar arquivo');
            }
        });
    } else {
        res.status(404).send('Arquivo não encontrado');
    }
});

// Endpoint para login de médico
app.post('/loginmed', (req, res) => {
    const { id, senhamed } = req.body;
    
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Erro ao ler os dados.');
            return;
        }

        const users = JSON.parse(data);
        const user = users.find(user => user.id === id && user.senhamed === senhamed);

        if (user) {
            res.status(200).json({ message: 'Login bem-sucedido' });
        } else {
            res.status(401).json({ message: 'CPF ou senha incorretos' });
        }
    });
});

// Endpoint para login
app.post('/login', (req, res) => {
    const { cpf, senha } = req.body;
    
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Erro ao ler os dados.');
            return;
        }

        const users = JSON.parse(data);
        const user = users.find(user => user.cpf === cpf && user.senha === senha);

        if (user) {
            res.status(200).json({ message: 'Login bem-sucedido' });
        } else {
            res.status(401).json({ message: 'CPF ou senha incorretos' });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});