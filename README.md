# 📊 ReviewWatcherApp

O **ReviewWatcherApp** é uma plataforma completa para monitoramento automatizado de avaliações online, voltada especialmente para negócios locais. Ele oferece um painel web moderno e uma API robusta, com alertas em tempo real via Telegram.

---

## 📁 Estrutura do Projeto

```
/
├── backend/     # API RESTful com Node.js e MongoDB
└── frontend/    # Interface web desenvolvida com React e Vite
```

Cada diretório possui seu próprio README detalhado com instruções específicas de instalação e uso.

---

## 🔧 Funcionalidades Gerais

- Registro e login com autenticação JWT
- Monitoramento de avaliações e palavras-chave
- Alertas automáticos via Telegram
- Dashboard com últimas avaliações e gestão de negócios
- Design responsivo com modo escuro pronto para ativação futura
- Segurança com rate limiting, middlewares e hash de senhas

---

## 🚀 Tecnologias Utilizadas

### Backend
- Node.js + Express
- MongoDB + Mongoose
- JWT, bcryptjs, Telegraf, Swagger

### Frontend
- React + Vite
- Tailwind CSS
- React Router v7, Zustand, Axios

---

## ▶️ Como Executar Localmente

### 1. Clonar o repositório

```bash
git clone https://github.com/Gaabriel22/ReviewWatcherApp
```

### 2. Instalar e rodar o Backend

```bash
cd backend
npm install
# criar o arquivo .env conforme o exemplo no README do backend
npm run dev
```

### 3. Instalar e rodar o Frontend

```bash
cd ../frontend
npm install
npm run dev
```

---

## 📬 Contato

Desenvolvido por **Gabriel**  
🔗 [LinkedIn](https://www.linkedin.com/in/seu-perfil)  
💻 [GitHub](https://github.com/Gaabriel22)
