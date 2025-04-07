# 🚀 Frontend – ReviewWatcherApp

Este é o **frontend** do projeto **ReviewWatcherApp**, uma aplicação web que permite a **monitoramento automatizado de avaliações online**, com foco em negócios locais. O frontend é desenvolvido com **React**, utilizando **Vite**, **React Router**, **TailwindCSS** e gerenciamento de estado com **Zustand**.

---

## 🖼️ Tecnologias Principais

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router v7](https://reactrouter.com/)
- [Zustand](https://github.com/pmndrs/zustand)
- [Axios](https://axios-http.com/)
- [Lucide React Icons](https://lucide.dev/)
- [JWT Decode](https://www.npmjs.com/package/jwt-decode)

---

## 📁 Estrutura de Pastas

```
/src
│
├── api/              # Requisições com Axios para autenticação, negócios, reviews etc.
├── components/       # Componentes reutilizáveis como Navbar, Sidebar, Modal etc.
├── context/          # Contexto global de autenticação (AuthContext)
├── hooks/            # Hooks customizados
├── pages/            # Páginas principais da aplicação (Dashboard, Home, Login etc.)
├── styles/           # Estilos globais e customizações de Tailwind
├── App.jsx           # Componente raiz com rotas
├── routes.jsx        # Configuração centralizada de rotas
├── main.jsx          # Ponto de entrada da aplicação
└── index.css         # CSS base
```

---

## 🔐 Funcionalidades de Autenticação

- Autenticação com JWT
- Proteção de rotas privadas via componente `PrivateRoute`
- Persistência de login via localStorage
- Redirecionamento automático para login caso token expire

---

## 📊 Funcionalidades Atuais

- **Login / Registro**
- **Dashboard com cards e últimas avaliações**
- **Monitoramento de palavras-chave**
- **Gerenciamento de negócios**
- **Configurações de conta**
- **Notificações via Telegram**
- Tema limpo, responsivo, com **modo escuro pronto para implementação futura**

---

## 🛠️ Scripts Disponíveis

- `npm run dev` – Inicia o ambiente de desenvolvimento com Vite
- `npm run build` – Gera o build de produção
- `npm run preview` – Visualiza o build de produção localmente

---

## 📦 Instalação Local

1. Clone o repositório principal:

   ```bash
   git clone https://github.com/Gaabriel22/ReviewWatcherApp
   cd frontend
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Execute em modo dev:

   ```bash
   npm run dev
   ```

---

## 🤝 Integração com o Backend

Certifique-se de que o backend (na pasta `/backend`) esteja rodando localmente para que as requisições funcionem corretamente.

---

## 📬 Contato

Feito por **Gabriel** – [LinkedIn](https://www.linkedin.com/in/gabrielamaral22/) | [GitHub](https://github.com/Gaabriel22)
