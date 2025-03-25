# 🎬 API de Filmes (CRUD RESTful)

Uma API simples para gerenciar uma lista de filmes, desenvolvida em Node.js + Express. Ideal para estudos ou como base para projetos mais complexos.

## 📦 Recursos

- ✅ CRUD completo (Create, Read, Update, Delete)
- ✅ Validação de dados
- ✅ CORS habilitado
- ✅ JSON como formato de comunicação

## 🚀 Rotas

| Método | Rota           | Descrição                     | Exemplo de Body (JSON)       |
|--------|----------------|-------------------------------|------------------------------|
| GET    | `/filmes`      | Lista todos os filmes         | -                            |
| GET    | `/filmes/:id`  | Retorna um filme específico   | -                            |
| POST   | `/filmes`      | Adiciona novo filme           | `{ "nome": "Interestelar" }` |
| PUT    | `/filmes/:id`  | Atualiza um filme existente   | `{ "nome": "Novo Nome" }`    |
| DELETE | `/filmes/:id`  | Remove um filme               | -                            |

## 💻 Pré-requisitos

- Node.js (v18+)
- npm ou yarn

## 🔧 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/api-filmes.git
cd api-filmes

# Instale as dependências
npm install

# Inicie o servidor
npm start
