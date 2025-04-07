# 📦 Backend – ReviewWatcherApp

API responsável por gerenciar usuários, negócios, palavras-chave e avaliações no sistema **ReviewWatcherApp**. Ela também realiza o monitoramento automático de novas avaliações e envia alertas em tempo real via Telegram.

---

## 🚀 Funcionalidades

- Registro e autenticação de usuários com JWT
- Cadastro de negócios para monitoramento
- Associação de palavras-chave a negócios
- Monitoramento automático de avaliações
- Integração com bot do Telegram para envio de alertas
- Sistema de notificações
- Proteção com rate limiter, logs e middlewares de segurança

---

## 🛠️ Tecnologias Utilizadas

- **Node.js** + **Express**
- **MongoDB** + **Mongoose**
- **JWT** para autenticação
- **bcryptjs** para hash de senhas
- **dotenv**, **helmet**, **morgan**, **winston**
- **Telegraf** para integração com o Telegram
- **node-cron** para agendamento de tarefas
- **Swagger** (documentação de rotas)

---

## 📂 Estrutura de Pastas

```
src/
│   app.js
│   server.js
│   swagger.json
│
├── config/         # Configurações de DB, autenticação, cronjobs, etc
├── controllers/    # Lógica das rotas
├── middleware/     # Middlewares (auth, rate limiter, etc)
├── models/         # Modelos do MongoDB (User, Business, etc)
├── routes/         # Rotas organizadas por domínio
└── services/       # Lógica de negócio e integração externa
```

---

## ⚙️ Como Rodar

### 1. Clonar o repositório

```bash
git clone https://github.com/Gaabriel22/ReviewWatcherApp
cd backend
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Criar o arquivo `.env`

Crie um arquivo `.env na raiz do projeto com as variáveis:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/reviewwatcher
JWT_SECRET=sua_chave_secreta
TELEGRAM_BOT_TOKEN=seu_token_aqui
```

### 4. Rodar o servidor em modo desenvolvimento

```bash
npm run dev
```

---

## 📬 Rotas Principais

| Método | Rota                  | Descrição                          |
| ------ | --------------------- | ---------------------------------- |
| POST   | /api/auth/register    | Registrar novo usuário             |
| POST   | /api/auth/login       | Login do usuário                   |
| GET    | /api/reviews          | Listar avaliações (com token)      |
| POST   | /api/business         | Cadastrar novo negócio             |
| POST   | /api/keywords         | Adicionar palavra-chave ao negócio |
| POST   | /api/telegram/webhook | Receber mensagens do bot           |

> 🔐 As rotas privadas exigem token JWT no header Authorization.

---

## 📌 Observações

- Os cronjobs são definidos em `config/cronJobs.js` e são executados automaticamente para verificar novas avaliações.
- A integração com Telegram está em `config/telegram.js` e `services/telegramService.js`.

---

## 📄 Licença

Este projeto está licenciado sob a [ISC License](LICENSE).
