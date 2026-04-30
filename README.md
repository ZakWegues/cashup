# CashUp 🍰

Landing page premium para **CashUp** — sistema de pedidos via WhatsApp para docerias, boleiras e confeitarias.

## Stack

- React 18 + Vite 5
- Framer Motion (animações leves)
- CSS puro com design tokens (variáveis CSS)
- Mobile-first, responsivo

## Estrutura

```
src/
├── components/        # Reutilizáveis (Navbar, PhoneMockup, Reveal, Loader, etc.)
├── sections/          # Seções da landing (Hero, Problem, Solution, Demo, Plans, LeadForm, ...)
├── styles/global.css  # Design system completo (tokens, layout, componentes)
├── config.js          # WhatsApp number e helpers
├── App.jsx
└── main.jsx
```

## Como rodar

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # build de produção em /dist
npm run preview      # preview do build
```

## Configuração

### Número do WhatsApp

Edite [src/config.js](src/config.js):

```js
export const WHATSAPP_NUMBER = '5511999999999'; // formato internacional, só dígitos
```

Todos os botões de WhatsApp da página passam a apontar pra esse número.

### Captura de leads

- **Por padrão**: leads ficam salvos em `localStorage` na chave `cashup_leads`.
- **Integração futura**: defina `VITE_LEADS_ENDPOINT` em `.env` apontando pra um endpoint POST. O form envia JSON `{ name, business, whatsapp, type, createdAt }`.

```bash
cp .env.example .env
# edite VITE_LEADS_ENDPOINT
```

Para ver leads salvos no navegador:

```js
JSON.parse(localStorage.getItem('cashup_leads'))
```

## Deploy

Build estático puro — funciona em qualquer host:

- **Vercel**: `vercel` (detecta Vite automaticamente)
- **Netlify**: build command `npm run build`, publish dir `dist`
- **GitHub Pages / Cloudflare Pages**: idem

## Identidade visual

| Token            | Valor      | Uso             |
|------------------|------------|-----------------|
| `--color-bg`     | `#F5EDE6`  | Fundo principal |
| `--color-accent` | `#F28C82`  | Botões/destaques|
| `--color-text`   | `#3A2E2A`  | Textos          |
| `--color-white`  | `#FFFFFF`  | Cards           |

Tipografia: **Pacifico** (display) + **Inter** (body), ambas via Google Fonts.

## Próximos passos sugeridos

- [ ] Integrar endpoint real de leads (CRM, Zapier, Make, n8n)
- [ ] Adicionar Google Analytics / Meta Pixel
- [ ] A/B testar copy do Hero
- [ ] Substituir mockup por screenshot real de cliente
