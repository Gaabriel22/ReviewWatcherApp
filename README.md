# ReviewWatcherApp

O **ReviewWatcherApp** é uma plataforma gratuita e intuitiva para monitoramento de avaliações online, focada em ajudar pequenos e médios empreendedores a protegerem sua reputação digital com rapidez e praticidade.

---

## 🚀 Funcionalidades Principais

- Monitoramento automático de avaliações
- Notificações em tempo real via Telegram
- Painel de controle com dados visuais
- Gestão de negócios e palavras-chave
- Interface amigável e responsiva

---

## 🌐 Tecnologias Utilizadas

### Backend (Node.js + Express)
- MongoDB + Mongoose
- Autenticação JWT
- Agenda de tarefas com `node-cron`
- Bot Telegram com `telegraf`
- Log com `winston`
- Documentação via Swagger

> Veja detalhes no [README do backend](https://github.com/Gaabriel22/ReviewWatcherApp/tree/main/backend#readme)

### Frontend (React + Vite)
- Roteamento com `react-router-dom`
- Estado global com `zustand`
- UI responsiva com Tailwind CSS
- Componentes reutilizáveis e minimalistas

> Veja detalhes no [README do frontend](https://github.com/Gaabriel22/ReviewWatcherApp/tree/main/frontend#readme)

---

## 🔧 Como Rodar Localmente

1. **Clone o repositório:**
```bash
git clone https://github.com/Gaabriel22/ReviewWatcherApp
cd reviewwatcherapp
```

2. **Configure o Backend:**
```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

3. **Configure o Frontend:**
```bash
cd frontend
npm install
npm run dev
```

---

## 📄 Estrutura do Projeto
```
ReviewWatcherApp/
├── backend/
│   ├── src/
│   └── README.md
├── frontend/
│   ├── src/
│   └── README.md
└── README.md (este arquivo)
```

---

## 🎨 Identidade da Marca

- **Personalidade:** Profissional, confiável, sempre alerta
- **Tom de voz:** Direto e prático, com toque amigável
- **Valores:** Transparência, confiabilidade, eficiência

> “O jeito mais simples e gratuito de acompanhar avaliações online e proteger a reputação do seu negócio.”

---

## 🚀 Futuras Funcionalidades
- Dashboard com gráficos em tempo real
- Cadastro e gestão de múltiplos negócios
- Notificações internas e por e-mail
- Exportação de relatórios (PDF/CSV)
- Modo escuro (Dark Mode)

---

## 📅 Status do Projeto

:rocket: MVP funcional concluído e pronto para testes e melhorias!

Sinta-se à vontade para clonar, usar e contribuir!

---

**Desenvolvido com ❤️ por Gabriel.**

