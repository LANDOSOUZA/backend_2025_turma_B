const express = require('express');
const mongoose = require('mongoose');
const Book = require('../models/Book');

const router = express.Router();

// CREATE --> cria novo Book
router.post('/', async (req, res) => {
    try {
        const { nome, titulo, ano } = req.body;
        const novoLivro =  Book.create({ nome, titulo, ano });
        res.status(201).json(novoLivro);
    }   catch (error) {
        res.status(400).json({ error: err.message });
    }
});

// READ --> lista todos os Livros
router.get('/', async (req, res) => {
    try {
        const livros = await Book.find();
        res.json(livros);
    }   catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// READ ONE --> lista um Livro pelo ID
router.get('/:id', async (req, res) => {
    try {
        const livro = await Book.findById(req.params.id);
        if (!livro) return res.status(404).json({ mensagem: 'Livro não encontrado.' });
        res.json(livro);
    }   catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// UPDATE --> atualiza um Livro pelo ID
router.put('/:id', async (req, res) => {
    try {
        const { nome, titulo, ano } = req.body;
        const livroAtualizado = await Book.findByIdAndUpdate(
            req.params.id,
            { nome, titulo, ano },
            { new: true } // Retorna o documento atualizado
        );
        if (!livroAtualizado) return res.status(404).json({ mensagem: 'Livro não encontrado.' });
        res.json(livroAtualizado);
    }   catch (err) {
        res.status(400).json({ error: err.message });  
    }
});

// DELETE --> deleta um Livro pelo ID
router.delete('/:id', async (req, res) => {
    try {
        const livroDeletado = await Book.findByIdAndDelete(req.params.id);
        if (!livroDeletado) return res.status(404).json({ mensagem: 'Livro não encontrado;' });
        res.json({ mensagem: 'Livro deletado com sucesso.' });
    }   catch (err) {
        res.status(500).json({ error: err.message }); 
    }
});

module.exports = router;



           