// Centraliza os dados dos projetos utilizados nos cards e no modal.
const projects = [
    {
        title: "Pokémon API",
        category: "backend",
        date: "Jun 2026",
        description: "API para gerenciamento de dados de Pokémon, com operações de criação, edição e consulta." ,
        details: "API RESTful desenvolvida com Python e FastAPI como projeto final de Backend, integrando a PokeAPI para consumo de dados externos e SQLAlchemy para persistência local. A aplicação possui arquitetura em camadas, autenticação via API Key, cache com Redis, testes automatizados, Docker, CI/CD e deploy no Render.",
        technologies: [
            "Python",
            "FastAPI",
            "SQLAlchemy",
            "Redis",
            "HTTPX",
            "Pytest",
            "Pytest-Cov",
            "Ruff",
            "Docker",
            "Docker Compose",
            "GitHub Actions",
            "Render"
        ],
        features: [
            "CRUD completo de Pokémons com persistência em banco de dados.",
            "Integração com a PokeAPI para consumo de dados externos.",
            "Paginação e busca de Pokémon por nome.",
            "Cache de dados utilizando Redis.",
            "Autenticação dos endpoints por API Key.",
            "Arquitetura em camadas com separação entre Router, Service e DB Service.",
            "Middleware de logging e tratamento global de exceções.",
            "Documentação automática da API com Swagger.",
            "Testes automatizados com cobertura de 95%.",
            "Containerização com Docker e Docker Compose.",
            "Pipeline de CI/CD com GitHub Actions e deploy automatizado no Render."
        ],
        image: "/images/projects/pokemon-api.jpg",
        screenshot: "/images/projects/pokemon-api-screenshot.png",
        github: "https://github.com/IsabelleLandini/pokemon-api",
        demo: "https://pokemon-api-u9so.onrender.com/docs"
    },
    {
        title: "Books API",
        category: "backend",
        date: "Mai 2026",
        description: "API REST para gerenciamento de livros, com cache, autenticação e processamento assíncrono.",
        details: "API REST desenvolvida com Python e FastAPI para gerenciamento de livros, utilizando SQLAlchemy para persistência, autenticação HTTP Basic, Redis para cache, Celery para execução de tarefas assíncronas e Kafka para mensageria. O projeto explora separação de responsabilidades, invalidação de cache e execução de serviços em contêineres.",
        technologies: [
            "Python",
            "FastAPI",
            "SQLAlchemy",
            "Redis",
            "Celery",
            "Kafka",
            "Docker",
            "Podman",
            "SQLite"
        ],
        features: [
            "CRUD completo de livros com persistência em banco de dados.",
            "Autenticação HTTP Basic.",
            "Cache de consultas utilizando Redis.",
            "Invalidação automática do cache após alterações nos livros.",
            "Processamento assíncrono de tarefas utilizando Celery.",
            "Execução de cálculos de soma e fatorial em background.",
            "Consulta de status das tarefas assíncronas.",
            "Integração com Kafka para mensageria.",
            "Monitoramento de mensagens utilizando Kafka UI.",
            "Execução dos serviços em contêineres Docker ou Podman.",
            "Documentação interativa dos endpoints com Swagger."
        ],
        image: "/images/projects/books-api.png",
        screenshot: "/images/projects/books-api-screenshot.png",
        github: "https://github.com/IsabelleLandini/books-api-fastapi"
    },
    {
        title: "API de Foco e Produtividade",
        category: "backend",
        date: "Mai 2026",
        description: "API para registrar sessões de foco e gerar diagnósticos de produtividade.",
        details: "API REST desenvolvida com Python e FastAPI para registrar sessões de foco e analisar métricas de produtividade. Utiliza SQLAlchemy e SQLite para persistência, Pydantic para validação e uma camada de serviços para implementar os cálculos e as regras de negócio do diagnóstico automático.",
        technologies: [
            "Python",
            "FastAPI",
            "SQLAlchemy",
            "SQLite",
            "Pydantic",
            "Pytest",
            "Poetry"
        ],
        features: [
            "Registro de sessões de foco com nível, duração e comentários.",
            "Persistência dos registros utilizando SQLite.",
            "Validação dos dados de entrada com Pydantic.",
            "Cálculo da média dos níveis de foco.",
            "Cálculo do tempo total de produtividade.",
            "Geração automática de feedback baseado em regras de negócio.",
            "Separação de responsabilidades entre rotas, serviços e acesso aos dados.",
            "Padronização das respostas com response_model.",
            "Testes automatizados de endpoints e validações com Pytest.",
            "Documentação automática da API com Swagger e ReDoc."
        ],
        image: "/images/projects/foco-produtividade-api.png",
        screenshot: "/images/projects/api-foco-produtividade-screenshot.png",
        github: "https://github.com/IsabelleLandini/api-foco-produtividade"
    },
    {
        title: "API de Tarefas",
        category: "backend",
        date: "Abr 2026",
        description: "API REST para gerenciamento de tarefas com autenticação e persistência de dados.",
        details: "API REST desenvolvida com Python e FastAPI para gerenciamento de tarefas. Utiliza SQLAlchemy e SQLite para persistência, Pydantic para validação, autenticação HTTP Basic e Docker Compose para execução em contêineres. As dependências são gerenciadas com Poetry.",
        technologies: [
            "Python",
            "FastAPI",
            "SQLAlchemy",
            "Pydantic",
            "SQLite",
            "Poetry",
            "Docker",
            "Docker Compose",
            "Podman"
        ],
        features: [
            "Cadastro, listagem, atualização e exclusão de tarefas.",
            "Persistência de dados com SQLAlchemy e SQLite.",
            "Autenticação HTTP Basic.",
            "Validação dos dados utilizando Pydantic.",
            "Documentação interativa com Swagger.",
            "Gerenciamento de dependências utilizando Poetry.",
            "Containerização utilizando Docker ou Podman.",
            "Orquestração dos serviços com Docker Compose.",
            "Persistência do banco de dados por meio de volumes."
        ],
        image: "/images/projects/api-tarefas.png",
        screenshot: "/images/projects/api-tarefas-screenshot.png",
        github: "https://github.com/IsabelleLandini/api-tarefas-fastapi"
    },
    {
        title: "Portal Viagens",
        category: "frontend",
        date: "Jun 2026",
        description: "Portal para explorar destinos turísticos e conhecer diferentes opções de viagem.",
        details: "Portal de viagens desenvolvido com Next.js, React e TypeScript, simulando uma plataforma de destinos turísticos. A aplicação utiliza rotas estáticas e dinâmicas, componentização, organização de dados, CSS Modules e recursos nativos do Next.js para otimização de imagens.",
        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "CSS Modules",
            "Jest",
            "Testing Library",
            "GitHub Actions",
            "Vercel"
        ],
        features: [
            "Página inicial com Hero Section e chamada para ação.",
            "Listagem de destinos turísticos com cards reutilizáveis.",
            "Rotas dinâmicas para exibição dos detalhes de cada destino.",
            "Organização dos dados dos destinos em arquivo separado.",
            "Layout reutilizável com Header e Footer.",
            "Interface responsiva.",
            "Otimização de imagens com o componente Image do Next.js.",
            "Pipeline de CI/CD com GitHub Actions, incluindo lint, testes, build e deploy."
        ],
        image: "/images/projects/portal-viagens.jpg",
        screenshot: "/images/projects/portal-viagens-screenshot.png",
        github: "https://github.com/IsabelleLandini/portal-viagens-nextjs",
        demo: "https://portal-viagens-nextjs.vercel.app/"
    },
    {
        title: "Catálogo de Livros",
        category: "frontend",
        date: "Mai 2026",
        description: "Aplicação para organizar e gerenciar uma coleção de livros de forma simples.",
        details: "Aplicação frontend desenvolvida com React e TypeScript para gerenciamento de um catálogo de livros, integrada à API do CrudCrud para persistência dos dados. O projeto aplica componentização, tipagem com TypeScript, gerenciamento de estado, integração com API e organização da aplicação em componentes, hooks, serviços e tipos.",
        technologies: [
            "React",
            "TypeScript",
            "Vite",
            "CSS3",
            "CrudCrud"
        ],
        features: [
            "Cadastro e listagem de livros.",
            "Atualização do status dos livros.",
            "Exclusão de livros cadastrados.",
            "Integração com API REST utilizando operações GET, POST, PUT e DELETE.",
            "Gerenciamento das operações por meio de um hook personalizado.",
            "Componentização da interface em formulário, lista e item de livro.",
            "Tipagem dos dados utilizando TypeScript.",
            "Interface responsiva."
        ],
        image: "/images/projects/catalogo-livros.jpg",
        screenshot: "/images/projects/catalogo-livros-screenshot.png",
        github: "https://github.com/IsabelleLandini/catalogo-livros-typescript"
    },
    
]

export default projects