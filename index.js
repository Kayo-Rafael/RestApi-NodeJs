const cors = require("cors");
const express = require("express");
const server = express();

server.use(express.json());
server.use(cors());
// Criando
const filmes = ["Maze Runner", "Homem-aranha", "Harry Potter", "Batman"];

// retornar um filme
server.get("/filmes/:id", (req, res) => {
  const { id } = req.params;

  if (id < 0 || id >= filmes.length) {
    return res.status(404).json({ error: "filme Não encontrado" });
  }

  return res.json(filmes[id]);
});

// Retornar todos os filmes
server.get("/filmes", (req, res) => {
  return res.json(filmes);
});

// Adicionar Filmes
server.post("/filmes", (req, res) => {
  const { nome } = req.body;

  if (!nome || typeof nome !== "string" || nome.trim() === "") {
    return res.status(400).json({ error: "O Nome tem que ser uma string" });
  }

  filmes.push(nome);
  return res.status(201).json(filmes);
});

// Atualizar Filmes
server.put("/filmes/:id", (req, res) => {
  const { id } = req.params;
  if (id < 0 || id >= filmes.length) {
    return res.status(404).json({ error: "Filme não encontrado" });
  }

  const { nome } = req.body;

  if (typeof nome !== "string") {
    return res.status(400).json({ error: "O Nome tem que ser uma string" });
  }

  filmes[id] = nome;

  return res.json(filmes);
});

// Deletar Filmes
server.delete("/filmes/:id", (req, res) => {
  const { id } = req.params;
  if (id < 0 || id >= filmes.length) {
    return res.status(404).json({ error: "Filme não encontrado" });
  }
  filmes.splice(id, 1);

  return res.json(filmes);
});

server.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
