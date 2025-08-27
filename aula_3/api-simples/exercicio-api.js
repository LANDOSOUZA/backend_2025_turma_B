// Código api simples - exercício de 20/08/2025.

// 1 - importa o Express

const express = require('express');

// 2 Cria uma instância do Express

const app = express();

// 3 Define a porta onde a api vai rodar

const port = 3005;

// Adiciona uma lista para armazenar  os dados de forma temporaria
let bebidas = [];

// 4 Middleware para permitir que o servidor lide com requisições no formato JASON

app.use(express.json());

// 5 Criação da rota get na raiz(/), que responde com uma mensagem simples

// req - requisição

// res - resposta

app.get('/',(req, res)=>{
res.send(`Sistema Planta 4.0`);
});


// rota post chamada cadastro de produtos
app.post('/cadastro', (req, res) => {
    const { nomeProduto, qtde } = req.body;

    if (!nomeProduto || !qtde) {
        return res.status(400).json({ error: 'Informe nome do produto e quantidade' });
    }

    const novo = { nomeProduto, qtde };
    bebidas.push(novo);
    res.status(201).json({ message: 'Dados salvos com sucesso!', data: novo });
});

// Rota get para exibir os dados

app.get('/exibirProduto',(req,res)=>{
    res.json(bebidas);
});
// 6 Inicia o servidor e define que ele deve rodar na porta 3005
// app.listen inicia o servidor na porta desejada, declarada anteriormente

app.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`);
});

// Para rodar o código digite no terminal: node server.js
// Digite no navegador: http://localhost:3000/