require("dotenv").config();
const cors = require("cors");
const express = require("express");
const pool = require("./database");
const { error } = require("console");
const { json } = require("body-parser");

const server = express();

server.use(express.json());
server.use(cors());

// Retornar todos os filmes
server.get("/filmes", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM filmes");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar filme" });
  }
});

// Atraves do ID Verifica se um filme é existente
server.get("/filmes/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query("SELECT * FROM filmes");
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Filme não encontrado" });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar filme" });
  }
});

// Adicionar Filmes
server.post("/filmes", async (req, res) => {
  const { nome } = req.body;
  // Validação antes de adicionar o filme
  if (!nome || typeof nome !== "string" || nome.trim() === "") {
    return res.status(400).json({ error: "O Nome tem que ser uma string" });
  }

  try {
    const result = await pool.query(
      "INSERT INTO filmes (nome) VALUES ($1) RETURNING *",
      [nome]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao adicionar filme" });
  }
});

// Atualizar Filmes
server.put("/filmes/:id", async (req, res) => {
  const { id } = req.params;
  const { nome } = req.body;

  const idNumber = parseInt(id);


  try {
    const result = await pool.query(
      "UPDATE filmes SET nome = $1 WHERE id = $2 RETURNING *",
      [nome, idNumber]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Filme não encontrado" });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao atualizar filme" });
  }
});

// Deletar Filmes
server.delete("/filmes/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      "DELETE FROM filmes WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rows.length === 0) {
      res.json(404).json({ error: "Filme Não Encontrado" });
    }

    res.json({ message: "Filme deletado com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao deletar filme" });
  }
});

server.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
