# Net7 Tecnologia - Website Frontend

Sistema web moderno para provedora de internet Net7 Tecnologia, desenvolvido em React 18 + TypeScript + Vite com design responsivo e suporte a temas dark/light.

## 📋 Índice

- [Tecnologias](#tecnologias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Configuração do Desenvolvimento](#configuração-do-desenvolvimento)
- [Arquitetura e Padrões](#arquitetura-e-padrões)
- [Páginas e Funcionalidades](#páginas-e-funcionalidades)
- [Componentes Principais](#componentes-principais)
- [Estilos e Design System](#estilos-e-design-system)
- [Roteamento](#roteamento)
- [SEO e Meta Tags](#seo-e-meta-tags)
- [Deploy](#deploy)
- [Contribuição](#contribuição)

## 🚀 Tecnologias

### Core

- **React 18.3.1** - Biblioteca principal com Strict Mode
- **TypeScript 5.5.4** - Tipagem estática
- **Vite 5.4.1** - Build tool e dev server
- **React Router 6.26.2** - Roteamento SPA com Data Router API

### UI e Estilização

- **Tailwind CSS 3.4.10** - Framework CSS utility-first
- **Framer Motion 11.2.13** - Animações e transições
- **React Helmet Async 2.0.5** - Gerenciamento de meta tags

### Desenvolvimento

- **ESLint 8.57.0** - Linting e qualidade de código
- **PostCSS 8.4.41** - Processamento CSS
- **Autoprefixer 10.4.20** - Prefixos CSS automáticos

## 📁 Estrutura do Projeto

```
frontend/
├── public/                     # Assets estáticos
│   ├── .htaccess              # Configuração Apache para SPA
│   ├── _redirects             # Configuração Netlify
│   ├── favicon.png            # Ícone do site
│   ├── robots.txt             # Instruções para crawlers
│   ├── sitemap.xml            # Mapa do site para SEO
│   ├── reviews/               # Imagens de avaliações
│   └── screens/               # Screenshots da aplicação
├── src/
│   ├── components/            # Componentes reutilizáveis
│   │   ├── Footer.tsx         # Rodapé com informações de contato
│   │   ├── HeroParticles.tsx  # Animação de partículas no hero
│   │   ├── Navbar.tsx         # Navegação principal
│   │   ├── RouteError.tsx     # Página de erro de roteamento
│   │   ├── SEO.tsx            # Componente para meta tags
│   │   └── ThemeToggle.tsx    # Alternador de tema dark/light
│   ├── contexts/              # React Contexts
│   │   └── ThemeContext.tsx   # Gerenciamento de estado do tema
│   ├── layouts/               # Layouts de página
│   │   └── RootLayout.tsx     # Layout raiz com Navbar/Footer
│   ├── pages/                 # Páginas da aplicação
│   │   ├── AppMinhaNet7.tsx   # Página do aplicativo
│   │   ├── FAQ.tsx            # Perguntas frequentes
│   │   ├── Home.tsx           # Página inicial
│   │   ├── IndiqueGanhe.tsx   # Programa de indicação
│   │   ├── Planos.tsx         # Planos de internet
│   │   └── Suporte.tsx        # Página de suporte
│   ├── styles/                # Estilos globais
│   │   ├── review-images.css  # Estilos para imagens de reviews
│   │   └── styles.css         # Utilitários Tailwind customizados
│   ├── types/                 # Definições TypeScript
│   │   └── images.d.ts        # Tipos para importação de imagens
│   ├── App.tsx                # Componente raiz da aplicação
│   ├── main.tsx               # Ponto de entrada da aplicação
│   └── router.tsx             # Configuração de rotas
├── .eslintrc.cjs              # Configuração ESLint
├── package.json               # Dependências e scripts
├── postcss.config.js          # Configuração PostCSS
├── tailwind.config.ts         # Configuração Tailwind CSS
├── tsconfig.json              # Configuração TypeScript
├── vercel.json                # Configuração Vercel
└── vite.config.ts             # Configuração Vite
```

## ⚙️ Configuração do Desenvolvimento

### Pré-requisitos

- Node.js 18+
- npm 9+

### Instalação

```bash
cd frontend
npm install
```

### Scripts Disponíveis

```bash
npm run dev       # Servidor de desenvolvimento (porta 5173)
npm run build     # Build para produção
npm run preview   # Preview do build
npm run lint      # Verificação de código
```

### Variáveis de Ambiente

O projeto não utiliza variáveis de ambiente atualmente, mas pode ser configurado:

```bash
# .env.local (se necessário)
VITE_API_URL=https://api.net7.com
```

## 🏗️ Arquitetura e Padrões

### Estrutura de Componentes

- **Páginas**: Componentes lazy-loaded em `src/pages/`
- **Layouts**: Estruturas de página em `src/layouts/`
- **Componentes**: Reutilizáveis em `src/components/`
- **Contextos**: Estado global em `src/contexts/`

### Padrões de Código

- **Functional Components** com hooks
- **TypeScript** para tipagem
- **Props interfaces** exportadas
- **Lazy loading** para páginas
- **Suspense boundaries** para loading states

### Convenções de Nomenclatura

- **Componentes**: PascalCase (`Navbar.tsx`)
- **Hooks**: camelCase com `use` prefix
- **Constantes**: UPPER_SNAKE_CASE
- **CSS classes**: Tailwind utilities

## 📱 Páginas e Funcionalidades

### Home (`/`)

- **Arquivo**: `src/pages/Home.tsx`
- **Funcionalidades**:
  - Hero section com partículas animadas
  - Widget de teste de velocidade
  - Seção "Por que escolher a Net7"
  - Mini seção "Indique e Ganhe" com palavras rotativas
  - Avaliações de clientes (estáticas)
  - Formulário de contato
- **Animações**: Framer Motion para scroll reveals

### Planos (`/planos`)

- **Arquivo**: `src/pages/Planos.tsx`
- **Funcionalidades**:
  - Cards de planos residenciais e empresariais
  - Comparativo de velocidades
  - CTAs para contratação

### Suporte (`/suporte`)

- **Arquivo**: `src/pages/Suporte.tsx`
- **Funcionalidades**:
  - Canais de atendimento
  - FAQ básico
  - Formulário de abertura de chamados

### Minha Net7 (`/minha-link`)

- **Arquivo**: `src/pages/AppMinhaNet7.tsx`
- **Funcionalidades**:
  - Apresentação do aplicativo
  - Carousel de screenshots
  - Links para download (App Store/Google Play)

### Indique e Ganhe (`/indique-ganhe`)

- **Arquivo**: `src/pages/IndiqueGanhe.tsx`
- **Funcionalidades**:
  - Explicação do programa
  - Passos para indicação
  - Benefícios e recompensas

### FAQ (`/faq`)

- **Arquivo**: `src/pages/FAQ.tsx`
- **Funcionalidades**:
  - Acordeão controlado (uma pergunta aberta por vez)
  - Perguntas frequentes organizadas
  - CTAs para contato direto

## 🧩 Componentes Principais

### Navbar (`src/components/Navbar.tsx`)

- **Responsabilidades**:
  - Navegação desktop e mobile
  - Logo e branding
  - Links para páginas
  - Instagram link
  - Theme toggle
  - Menu hamburger responsivo
- **Estado**: `isMenuOpen` para controle do menu mobile

### Footer (`src/components/Footer.tsx`)

- **Responsabilidades**:
  - Informações de contato
  - Endereço da empresa
  - Links úteis (FAQ, Planos, etc.)
  - Copyright

### HeroParticles (`src/components/HeroParticles.tsx`)

- **Responsabilidades**:
  - Canvas de partículas animadas
  - Responsivo ao tema (dark/light)
  - Performance otimizada com DPR scaling
- **Posicionamento**: `z-index: 0` atrás do conteúdo

### SEO (`src/components/SEO.tsx`)

- **Responsabilidades**:
  - Meta tags dinâmicas
  - Títulos de página
  - Descrições para SEO
- **Provider**: Requer `HelmetProvider` no root

### ThemeContext (`src/contexts/ThemeContext.tsx`)

- **Responsabilidades**:
  - Estado global do tema (light/dark)
  - Persistência no localStorage
  - Detecção de preferência do sistema
- **Hook**: `useTheme()` para consumo

## 🎨 Estilos e Design System

### Tailwind Configuration (`tailwind.config.ts`)

```typescript
// Cores principais
colors: {
  brand: {
    50: '#f0f9ff',
    500: '#0ea5e9',  // Cor primária
    600: '#0284c7',
    // ...
  }
}

// Utilitários customizados
.section {
  @apply py-12 md:py-16;  // Espaçamento padrão de seções
}

.container {
  @apply mx-auto max-w-6xl px-4 sm:px-6 lg:px-8;
}
```

### Classes Personalizadas (`src/styles/styles.css`)

- `.section`: Padding vertical padrão para seções
- `.container`: Container responsivo centralizado
- Utilitários para reviews e componentes específicos

### Tema Dark/Light

- **Implementação**: Tailwind `dark:` variants
- **Controle**: `ThemeContext` + `localStorage`
- **Classes**: `dark:bg-neutral-950`, `dark:text-white`, etc.

## 🛣️ Roteamento

### Configuração (`src/router.tsx`)

- **API**: `createBrowserRouter` (Data Router)
- **Layout**: `RootLayout` com `<Outlet />`
- **Error Boundary**: `RouteError` para páginas não encontradas
- **Lazy Loading**: Todas as páginas são lazy-loaded

### Rotas Disponíveis

```typescript
const routes = [
  { path: "/", element: <Home /> },
  { path: "/planos", element: <Planos /> },
  { path: "/suporte", element: <Suporte /> },
  { path: "/minha-link", element: <AppMinhaNet7 /> },
  { path: "/indique-ganhe", element: <IndiqueGanhe /> },
  { path: "/faq", element: <FAQ /> },
];
```

### SPA Configuration

- **Vercel**: `vercel.json` com rewrites
- **Apache/Hostinger**: `.htaccess` com fallback para `index.html`
- **Netlify**: `_redirects` configurado

## 🔍 SEO e Meta Tags

### Sitemap (`public/sitemap.xml`)

```xml
<urlset>
  <url><loc>/</loc></url>
  <url><loc>/planos</loc></url>
  <url><loc>/suporte</loc></url>
  <url><loc>/minha-link</loc></url>
  <url><loc>/indique-ganhe</loc></url>
  <url><loc>/faq</loc></url>
</urlset>
```

### Robots.txt (`public/robots.txt`)

```
User-agent: *
Allow: /
Sitemap: /sitemap.xml
```

### Meta Tags

- **Dinâmicas**: Via componente `SEO`
- **Estáticas**: `index.html` base
- **Open Graph**: Configurado para redes sociais

## 🚀 Deploy

### Vercel (Recomendado)

```json
// vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Hostinger/Apache

- Upload de `dist/` para `public_html/`
- `.htaccess` incluso para SPA routing
- Configurar domínio e SSL

### Build Artifacts

```
dist/
├── index.html           # Entry point
├── assets/
│   ├── index-[hash].js  # Bundle principal
│   ├── index-[hash].css # Estilos compilados
│   └── images/          # Assets otimizados
├── .htaccess           # Apache config
└── [outros assets]     # favicon, robots, etc.
```

## 🔧 Desenvolvimento

### Hot Reload

- **Vite**: Hot Module Replacement (HMR)
- **React Refresh**: Preserva estado entre reloads
- **Tailwind JIT**: Classes CSS on-demand

### TypeScript

- **Strict mode**: Tipagem rigorosa
- **Path mapping**: `@/` para `src/`, `@components/` etc.
- **Build check**: `tsc -b` antes do Vite build

### Performance

- **Bundle splitting**: Chunks por página
- **Lazy loading**: Componentes de página
- **Image optimization**: Assets otimizados
- **CSS purging**: Tailwind remove classes não utilizadas

### Browser Support

- **ES2020+**: Modern browsers
- **CSS Grid/Flexbox**: Layout responsivo
- **CSS Custom Properties**: Variáveis para temas

## 🤝 Contribuição

### Workflow

1. Clone o repositório
2. Crie uma branch: `git checkout -b feature/nova-funcionalidade`
3. Implemente as mudanças
4. Teste: `npm run build` e `npm run lint`
5. Commit: seguir [Conventional Commits](https://conventionalcommits.org/)
6. Push e abra um Pull Request

### Padrões de Commit

```
feat: adiciona nova página de contato
fix: corrige bug no menu mobile
docs: atualiza README com instruções
style: melhora espaçamento da navbar
refactor: reorganiza componentes de tema
```

### Code Review

- **TypeScript**: Sem erros de tipo
- **ESLint**: Código passa no linting
- **Performance**: Bundle size razoável
- **Accessibility**: Semântica HTML e ARIA
- **Responsive**: Funciona mobile/desktop

## 📞 Contato e Suporte

- **Developer**: [Jeferson/jefersonsdr@gmail.com]
- **Repositório**: [[Link do GitHub](https://github.com/ghutttyerrez)]
- **Documentação**: Este README + comentários no código
- **Issues**: Use GitHub Issues para bugs/features

---

**Última atualização**: 17 de agosto de 2025
**Versão**: 1.0.0
