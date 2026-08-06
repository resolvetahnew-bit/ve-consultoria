# Visão Empreendedora — Site Institucional

Site institucional para consultoria financeira, construído com React + Vite + Tailwind CSS.
É um site 100% estático (sem backend) — o formulário de contato envia direto para o
[Web3Forms](https://web3forms.com) pelo navegador.

## Rodando localmente

Requisitos: Node.js 20+ instalado.

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
