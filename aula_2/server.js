// Cria variável para armazenar o express
const express = require("express");

// Cia uma instância do express
const app = express();

// Define aporta que vai rodar a api
const porta = 3000;

// Lista os dados para armazenar o dados cadastrados

//Middleware para processar a respots a no formato json.
app.use(express.json);

// Cria a rota na raiz da api

app.get(`/`,(req,res)=>{
    res.send("Api funcionando");
});

//Inicia o servidor e a porta

app.listen(porta,()=>{
    console.log(`API executando na porta ${porta}`);
})