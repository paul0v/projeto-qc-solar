# Projeto de Gerenciamento de Usuários

Este repositório contém o frontend (em `public/`) e um backend orientado a objetos em Node.js/Express.

## Objetivo
Desenvolver uma aplicação completa com API backend conectada ao frontend existente. O sistema permite cadastrar usuários e listar os usuários já cadastrados. Os dados são persistidos em um arquivo JSON.

## Estrutura do backend

- `server.js` – ponto de entrada, configura o servidor Express e monta as rotas.
- `src/models/User.js` – classe que representa o usuário.
- `src/repositories/UserRepository.js` – camada de acesso a dados, lê e grava em `data/users.json`.
- `src/controllers/UserController.js` – lógica da API, manipulando requisições.
- `src/routes/userRoutes.js` – define os endpoints `/api/users`.
- `data/users.json` – armazenamento simples em formato JSON (criado automaticamente).

A arquitetura segue princípios de orientação a objetos: cada responsabilidade está em sua própria classe, facilitando manutenção e testes.

## Rodando localmente

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Inicie o servidor (porta 3000):
   ```bash
   npm start
   ```
   ou durante desenvolvimento:
   ```bash
   npm run dev
   ```

3. Abra o navegador no arquivo `public/index.html` (por exemplo usando Live Server ou apenas abrindo o caminho no Chrome). O formulário já está configurado para acessar `http://localhost:3000/api/users`.

4. Preencha o formulário para cadastrar usuários e veja a lista ser atualizada automaticamente.

## API disponível

| Método | Rota           | Descrição                       |
|--------|----------------|---------------------------------|
| GET    | /api/users     | Retorna todos os usuários       |
| POST   | /api/users     | Cria um novo usuário            |

### Exemplo de resposta GET
```json
{
  "data": [
    {"id":"...","name":"João","email":"joao@ex.com","age":25,...}
  ],
  "count": 1
}
```

### Exemplo de requisição POST
```json
POST /api/users
Content-Type: application/json
{
  "name": "Maria",
  "email": "maria@example.com",
  "age": 30
}
```

## Observações

* A persistência é feita em arquivo; reiniciar o servidor mantém os dados.
* O frontend já trata mensagens de sucesso/erro e recarrega automaticamente a lista.
* Para deploy ou integração com a URL solicitada (`https://engenhariadesoftware.lovable.app/`), adapte o `API_URL` em `public/script.js` ou hospede o backend na nuvem.

---

Pronto! O sistema está funcionando conforme os critérios de aceitação: usuário é salvo, listado e a API é orientada a objetos.
