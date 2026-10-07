// Centraliza os dados dos projetos utilizados nos cards e no modal.
const projects = [
    {
        title: "Portal Viagens",
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
        title: "Diário de Bordo",
        date: "Set 2026",
        description: "Aplicação para registrar, organizar e consultar atividades do dia a dia.",
        details: "Aplicação web desenvolvida como uma PWA (Progressive Web App) para registrar e consultar atividades do dia a dia. A aplicação funciona offline e utiliza o armazenamento local do navegador para manter as entradas salvas.",
        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "PWA",
            "Service Worker",
            "Web App Manifest",
            "LocalStorage"
        ],
        features: [
            "Adição de novas entradas com título, descrição e data.",
            "Listagem e remoção das entradas cadastradas.",
            "Persistência dos dados utilizando LocalStorage.",
            "Funcionamento offline por meio de Service Worker.",
            "Instalação da aplicação como PWA.",
            "Interface responsiva para diferentes tamanhos de tela.",
            "Configuração do Web App Manifest e ícones para instalação."
        ],
        image: "/images/projects/diario-de-bordo.jpg",
        screenshot: "/images/projects/diario-de-bordo-screenshot.png",
        github: "https://github.com/IsabelleLandini/diario-de-bordo"
    },
    {
        title: "Catálogo de Livros",
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
    {
        title: "Pokémon API",
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
    }
]

export default projects