# Visão Empreendedora — Site Institucional

Site institucional para consultoria financeira, construído com React + Vite + Tailwind CSS.
É um site 100% estático (sem backend) — o formulário de contato envia direto para o
[Web3Forms](https://web3forms.com) pelo navegador.

## Rodando localmente

Requisitos: Node.js 20+ instalado.

```bash
npm install
npm run dev
```

Abre em `http://localhost:3000`.

## Build de produção

```bash
npm run build
```

Gera os arquivos finais em `dist/`. Para conferir o resultado localmente antes de publicar:

```bash
npm run preview
```

## Antes de publicar — pendências

1. **Imagens**: os arquivos em `client/public/images/` (`logo.png`, `hero-bg.jpg`,
   `about-photo.png`, `testimonials-bg.jpg`) são placeholders gerados automaticamente
   (gradientes nas cores do site). Substitua-os pelas imagens reais mantendo os mesmos
   nomes de arquivo — ou troque o caminho no componente correspondente
   (`Hero.tsx`, `About.tsx`, `Results.tsx`, `Navbar.tsx`, `Footer.tsx`).

2. **Formulário de contato**: em `client/src/components/Contact.tsx`, troque
   `WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE"` pela sua chave real, obtida
   gratuitamente em [web3forms.com](https://web3forms.com). Sem isso o formulário
   não envia e-mails.

## Deploy no GitHub

```bash
git init
git add .
git commit -m "Site institucional Visão Empreendedora"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
git push -u origin main
```

## Deploy no Cloudflare Pages

1. Acesse o [dashboard da Cloudflare](https://dash.cloudflare.com) → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
2. Selecione o repositório que você acabou de subir no GitHub.
3. Configure o build com estes valores:
   - **Framework preset**: Vite
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Não é necessário configurar nenhuma variável de ambiente — o site não usa nenhuma.
5. Clique em **Save and Deploy**. A cada push na branch `main`, a Cloudflare publica automaticamente.

## Estrutura do projeto

```
client/
  index.html          Ponto de entrada HTML
  public/images/       Imagens estáticas (logo, backgrounds)
  src/
    components/         Seções da página (Hero, About, Services, Results, Contact, Footer...)
    components/ui/       Componentes de UI reutilizáveis (shadcn/ui)
    contexts/            Contexto de tema (claro/escuro)
    hooks/                Hooks utilitários
    pages/                Páginas (Home, NotFound)
    App.tsx               Roteamento
    main.tsx              Bootstrap do React
```
