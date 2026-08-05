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

## Deploy no Cloudflare (Workers Builds, antigo "Pages")

A Cloudflare unificou "Pages" dentro de "Workers" — todo projeto novo (mesmo estático) passa
pelo Wrangler. O repositório já vem com um `wrangler.jsonc` configurado para isso.

1. Acesse o [dashboard da Cloudflare](https://dash.cloudflare.com) → **Workers & Pages** →
   **Create application** → **Connect to Git**.
2. Selecione o repositório que você subiu no GitHub.
3. Em **Settings → Build**, configure:
   - **Build command**: `npm run build`
   - **Deploy command**: `npx wrangler deploy --assets=dist --compatibility-date=2026-08-05 --name=visao-empreendedora`

   > Por que um comando de deploy explícito? O pipeline de build da Cloudflare às vezes
   > aplica automaticamente um "adapter" para projetos Vite que gera um `wrangler.json`
   > incompleto dentro de `dist/`, causando o erro
   > `The assets property in your configuration is missing the required directory property`.
   > Passar `--assets`, `--compatibility-date` e `--name` diretamente na linha de comando
   > evita depender desse arquivo gerado e resolve o problema. Se preferir tentar sem essas
   > flags primeiro, o comando padrão `npx wrangler deploy` (usando o `wrangler.jsonc` da
   > raiz) também funciona localmente — mas se dermos de cara com o mesmo erro no build da
   > Cloudflare, troque para o comando explícito acima.

4. Não é necessário configurar nenhuma variável de ambiente — o site não usa nenhuma.
5. Clique em **Save and Deploy**. A cada push na branch `main`, a Cloudflare publica automaticamente.

### Testando o deploy localmente antes de configurar no dashboard

```bash
npm run build
npx wrangler deploy --dry-run --assets=dist --compatibility-date=2026-08-05 --name=visao-empreendedora
```

Se aparecer `✨ Read N files from the assets directory ... --dry-run: exiting now.` sem erros,
está tudo certo.

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
