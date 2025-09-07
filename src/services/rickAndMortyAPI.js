const axios = require('axios');
const BASE_URL = 'https://rickandmortyapi.com/api/character';

async function fetchPersonagens(page = 1) {
  const response = await axios.get(`${BASE_URL}?page=${page}`);
  return response.data;
}

async function fetchPersonagem(id) {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
}

async function fetchMultiplosPersonagens(ids) {
  const response = await axios.get(`${BASE_URL}/${ids}`);
  return response.data;
}

module.exports = {
  fetchPersonagens,
  fetchPersonagem,
  fetchMultiplosPersonagens
};
