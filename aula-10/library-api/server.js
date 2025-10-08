const express = require('express');
const mongoose = require('mongoose');

const bookRoutes = require('./routes/books');

const app = express();
const PORT = 4000;

//middleware para insterpretar JSON
app.use(express.json());



// Conecta ao MongoDB
mongoose.connect('mongodb://localhost:27017/library', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Conectado ao MongoDB')).catch(err => console.error('Erro ao conectar:', err));

// Usando as rotas de livros
app.use('/books', bookRoutes);

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});