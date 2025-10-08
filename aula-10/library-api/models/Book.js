const mongoose = require('mongoose');

// Cria a estrutura (schema) para o documento Book
const BookSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    titulo: { type: String, required: true },
    ano: { type: Number, required: true }
})

// Exporta o modelo "Book"
module.exports = mongoose.model('Book', BookSchema);