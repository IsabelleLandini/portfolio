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
    FaBook,
    FaCode,
    FaDatabase,
    FaDesktop,
    FaCloud,
    FaVial,
    FaTools
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

import styles from "./Skills.module.css"

// Associa cada habilidade ao ícone correspondente para facilitar a renderização dinâmica.
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
        {title: "Linguagens", skills: skills.linguagens, icon: FaCode},
        {title: "Backend & Banco de Dados", skills: skills.backend, icon: FaDatabase},
        {title: "Frontend", skills: skills.frontend, icon: FaDesktop},
        {title: "Cloud & DevOps", skills: skills.cloudDevOps, icon: FaCloud},
        {title: "Testes & Qualidade", skills: skills.testesQualidade, icon: FaVial},
        {title: "Ferramentas & Plataformas", skills: skills.ferramentas, icon: FaTools},
        {title: "Soft Skills", skills: skills.softSkills, icon: FaUsers}
    ];

    return (
        <section id="skills" className={styles.skillsSection}>
            <h2>Habilidades</h2>

            {/* Organiza as categorias para que possam ser renderizadas de forma reutilizável */}
            {categories.map((category) => {
                const CategoryIcon = category.icon;

                return (
                    <div key={category.title} className={styles.category}>
                        <h3>
                            <CategoryIcon />
                            {category.title}
                        </h3>

                        <div className={styles.skills}>
                            {category.skills.map((skill) => {
                                // Busca o ícone correspondente à habilidade e renderiza apenas quando ele estiver cadastrado.
                                const Icon = skillIcons[skill];

                                return (
                                    <span key={skill} className={styles.skill}>
                                        {Icon && <Icon />}
                                        {skill}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </section>
    );
}

export default Skills