const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');


const app = express();
const PORT = 5000;
app.use(cors());

app.use((req, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    next();
});

// permitir o parsing de JSON no corpo das requisições
app.use(express.json());

// arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));



// app.get('/login', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'login.html'));
// });
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
})

// lidar com o login
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