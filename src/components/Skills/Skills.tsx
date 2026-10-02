import skills from "../../data/skills";

import { 
    FaPython, 
    FaReact, 
    FaJs, 
    FaHtml5,
    FaComments,
    FaUsers,
    FaClipboardList,
    FaSyncAlt,
    FaPuzzlePiece,
    FaSearch,
    FaBook
} from "react-icons/fa";

import { 
    SiTypescript, 
    SiMysql,
    SiFastapi,
    SiSqlalchemy,
    SiPydantic,
    SiRedis,
    SiNextdotjs,
    SiVite,
    SiAxios,
    SiSqlite,
    SiCelery,
    SiApachekafka,
    SiDocker,
    SiGithubactions,
    SiPytest,
    SiJest,
    SiTestinglibrary,
    SiRuff,
    SiGit,
    SiGithub,
    SiPostman,
    SiInsomnia,
    SiSwagger,
    SiVercel,
    SiRender    
} from "react-icons/si";

import type { IconType } from "react-icons";

const skillIcons: Record<string, IconType> = {
    Python: FaPython,
    JavaScript: FaJs,
    TypeScript: SiTypescript,
    "HTML/CSS": FaHtml5,
    SQL: SiMysql,
    FastAPI: SiFastapi,
    SQLAlchemy: SiSqlalchemy,
    Pydantic: SiPydantic,
    Redis: SiRedis,
    React: FaReact,
    "Next.js": SiNextdotjs,
    Vite: SiVite,
    Axios: SiAxios,
    SQLite: SiSqlite,
    Celery: SiCelery,
    "Apache Kafka": SiApachekafka,
    Docker: SiDocker,
    "GitHub Actions": SiGithubactions,
    Pytest: SiPytest,
    Jest: SiJest,
    "Testing Library": SiTestinglibrary,
    Ruff: SiRuff,
    Git: SiGit,
    GitHub: SiGithub,
    Postman: SiPostman,
    Insomnia: SiInsomnia,
    "Swagger / OpenAPI": SiSwagger,
    Vercel: SiVercel,
    Render: SiRender,
    Comunicação: FaComments,
    "Trabalho em equipe": FaUsers,
    Organização: FaClipboardList,
    Adaptabilidade: FaSyncAlt,
    "Resolução de problemas": FaPuzzlePiece,
    "Pensamento analítico": FaSearch,
    "Aprendizado contínuo": FaBook,
};

function Skills() {
    const categories = [
        {title: "Linguagens", skills: skills.linguagens},
        {title: "Backend & Banco de Dados", skills: skills.backend},
        {title: "Frontend", skills: skills.frontend},
        {title: "Cloud & DevOps", skills: skills.cloudDevOps},
        {title: "Testes & Qualidade", skills: skills.testesQualidade},
        {title: "Ferramentas & Plataformas", skills: skills.ferramentas},
        {title: "Soft Skills", skills: skills.softSkills}
    ];

    return (
        <section id="skills">
            <h2>Habilidades</h2>

            {/* Organiza as categorias para que possam ser renderizadas de forma reutilizável */}
            {categories.map((category) => (
                <div key={category.title}  >
                    <h3>{category.title}</h3>

                    {category.skills.map((skill) => {
                        // Busca o ícone correspondente à habilidade e renderiza apenas quando ele estiver cadastrado.
                        const Icon = skillIcons[skill];

                        return (
                            <span key={skill}>
                                {Icon && <Icon />}
                                {skill}
                            </span>
                        )

                    })}
                </div>
            ))}
 
        </section>
    )
}

export default Skills