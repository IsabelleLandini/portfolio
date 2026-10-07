# Portfólio — Isabelle Landini

Portfólio desenvolvido para apresentar minha trajetória de aprendizado em tecnologia, meus principais projetos, habilidades e formas de contato profissional.

O projeto foi desenvolvido com React e TypeScript, utilizando uma estrutura de componentes reutilizáveis e estilização modular. A interface foi pensada para ser responsiva e facilitar a navegação entre as diferentes seções do portfólio.

## 🌐 Portfólio online

🔗 **[[Acesse o portfólio](https://isabellelandini-portfolio.vercel.app)]**


## Sobre o projeto

Este portfólio reúne projetos desenvolvidos ao longo da minha formação em tecnologia, com foco em desenvolvimento **Backend Python** e também em **Full Stack**.

A aplicação apresenta:

* Sobre Mim
* Projetos
* Habilidades
* Contato
* Navegação entre seções
* Detalhamento dos projetos em modal
* Links para GitHub e demonstrações dos projetos
* Layout responsivo para diferentes tamanhos de tela
* Botão para voltar ao topo da página

## Tecnologias utilizadas

* React
* TypeScript
* Vite
* CSS Modules
* React Icons
* Git
* GitHub

## Projetos apresentados

### Portal Viagens

Portal de viagens desenvolvido com Next.js, React e TypeScript, simulando uma plataforma de destinos turísticos.

**Principais recursos:**

* Rotas estáticas e dinâmicas
* Componentização
* Interface responsiva
* Otimização de imagens
* Testes automatizados
* Pipeline de CI/CD com GitHub Actions

🔗 [GitHub](https://github.com/IsabelleLandini/portal-viagens-nextjs)
🔗 [Demo](https://portal-viagens-nextjs.vercel.app/)

### Diário de Bordo

Aplicação web desenvolvida como uma PWA para registrar e consultar atividades do dia a dia.

**Principais recursos:**

* Cadastro de entradas
* Listagem e remoção
* Persistência com LocalStorage
* Funcionamento offline
* Service Worker
* Web App Manifest
* Interface responsiva

🔗 [GitHub](https://github.com/IsabelleLandini/diario-de-bordo)

### Catálogo de Livros

Aplicação frontend desenvolvida com React e TypeScript para gerenciamento de um catálogo de livros, integrada à API do CrudCrud.

**Principais recursos:**

* Cadastro e listagem de livros
* Atualização de status
* Exclusão de livros
* Integração com API REST
* Hook personalizado
* Componentização
* Tipagem com TypeScript
* Interface responsiva

🔗 [GitHub](https://github.com/IsabelleLandini/catalogo-livros-typescript)

### Pokémon API

API RESTful desenvolvida com Python e FastAPI como projeto final de Backend.

**Principais recursos:**

* CRUD de Pokémon
* Integração com a PokeAPI
* SQLAlchemy
* Redis
* Autenticação por API Key
* Testes automatizados
* Docker e Docker Compose
* GitHub Actions
* Deploy no Render
* Documentação automática com Swagger

🔗 [GitHub](https://github.com/IsabelleLandini/pokemon-api)
🔗 [API / Swagger](https://pokemon-api-u9so.onrender.com/docs)

## 📁 Estrutura do projeto

```text
src/
├── components/
│   ├── About/
│   ├── BackToTop/
│   ├── Contact/
│   ├── Navigation/
│   ├── Projects/
│   │   └── ProjectModal/
│   └── Skills/
├── data/
│   ├── projects.ts
│   └── skills.ts
├── App.css
├── App.tsx
└── main.tsx
```

A aplicação foi organizada por responsabilidade, mantendo componentes, estilos e dados separados. Os estilos dos componentes são organizados com **CSS Modules**, facilitando a manutenção e evitando conflitos entre estilos.


## Responsividade

O portfólio foi desenvolvido para se adaptar a diferentes tamanhos de tela, incluindo:

* Desktop
* Tablet
* Smartphones

A navegação, os cards de projetos, a seção de habilidades e o modal foram ajustados para diferentes resoluções.


## Como executar o projeto

### Pré-requisitos

Antes de começar, é necessário ter instalado:

* [Node.js](https://nodejs.org/)
* npm

### Instalação

Clone o repositório:

```bash
git clone https://github.com/IsabelleLandini/portfolio.git
```

Entre na pasta do projeto:

```bash
cd portfolio
```

Instale as dependências:

```bash
npm install
```

Execute o projeto em ambiente de desenvolvimento:

```bash
npm run dev
```

Depois, acesse a URL exibida pelo Vite no terminal.

## Build de produção

Para gerar a versão de produção:

```bash
npm run build
```

O projeto utiliza TypeScript e Vite para realizar a compilação e geração dos arquivos de produção.


## 👩🏻‍💻 Autora

**Isabelle Landini**

Desenvolvedora Backend Python Júnior | Full Stack

Profissional em transição de carreira para tecnologia, em formação em **Full Stack Python pela EBAC**. 

Tenho desenvolvido minha formação por meio de estudos e projetos práticos.

📧 [E-mail](mailto:isa_landini@hotmail.com)
💼 [LinkedIn](https://www.linkedin.com/in/isabellelandini/)
💻 [GitHub](https://github.com/IsabelleLandini)
