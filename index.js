const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Bem-vindo à API Rick and Morty!');
});

app.get('/personagens', async (req, res) => {
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/character');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar personagens' });
  }
});

app.get('/personagem/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar personagem' });
  }
});

app.get('/multiplospersonagens/:ids', async (req, res) => {
  const { ids } = req.params;
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${ids}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar múltiplos personagens' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
