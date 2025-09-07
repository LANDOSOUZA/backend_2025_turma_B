const {
  fetchPersonagens,
  fetchPersonagem,
  fetchMultiplosPersonagens
} = require('../services/rickAndMortyAPI');

const getHome = (req, res) => {
  res.send('Bem-vindo à API Rick and Morty!');
};

const getPersonagens = async (req, res) => {
  try {
    const page = req.query.page || 1;
    const data = await fetchPersonagens(page);
    res.json(data);
  } catch (error) {
    res.status(error.response?.status || 500).json({
      error: error.response?.data?.error || 'Erro ao buscar personagens'
    });
  }
};

const getPersonagemById = async (req, res) => {
  try {
    const data = await fetchPersonagem(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(error.response?.status || 500).json({
      error: error.response?.data?.error || 'Erro ao buscar personagem'
    });
  }
};

const getMultiplosPersonagens = async (req, res) => {
  try {
    const data = await fetchMultiplosPersonagens(req.params.ids);
    res.json(data);
  } catch (error) {
    res.status(error.response?.status || 500).json({
      error: error.response?.data?.error || 'Erro ao buscar múltiplos personagens'
    });
  }
};

module.exports = {
  getHome,
  getPersonagens,
  getPersonagemById,
  getMultiplosPersonagens
};
