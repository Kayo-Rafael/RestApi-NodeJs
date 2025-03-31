# 🎬 API de Filmes (CRUD RESTful)

Uma API simples para gerenciar uma lista de filmes, desenvolvida com **Node.js + Express** e integrada ao **PostgreSQL**. Ideal para estudos ou como base para projetos mais complexos.

---

## 📦 Recursos

✅ CRUD completo (Create, Read, Update, Delete)  
✅ Integração com PostgreSQL  
✅ Validação de dados  
✅ CORS habilitado  
✅ JSON como formato de comunicação  
✅ Variáveis de ambiente via `.env`  

---

## 🚀 Rotas

| Método  | Rota         | Descrição                    | Exemplo de Body (JSON) |
|---------|-------------|------------------------------|-------------------------|
| **GET**    | `/filmes`       | Lista todos os filmes           | - |
| **GET**    | `/filmes/:id`   | Retorna um filme específico     | - |
| **POST**   | `/filmes`       | Adiciona um novo filme          | `{ "nome": "Vingadores" }` |
| **PUT**    | `/filmes/:id`   | Atualiza um filme existente     | `{ "nome": "Novo Nome" }` |
| **DELETE** | `/filmes/:id`   | Remove um filme                | - |

---

## 💻 Pré-requisitos

- **Node.js** (v18+)
- **PostgreSQL** instalado e configurado
- **npm** ou **yarn**

---

## 🔧 Instalação

```sh
# Clone o repositório
git clone https://github.com/Kayo-Rafael/RestApi-NodeJs.git
cd RestApi-NodeJs

# Instale as dependências
npm install
