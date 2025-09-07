const express = require('express');
const cors = require('cors');
const personagensRoutes = require('./routes/personagens.routes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Rotas
app.use('/', personagensRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
