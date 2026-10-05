import styles from "./ProjectCard.module.css";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
    title: string
    date: string
    description: string
    technologies: string[]
    image: string
    github: string
    onViewDetails: () => void
}

function ProjectCard({
    title,
    date,
    description,
    technologies,
    image,
    github,
    onViewDetails
}: ProjectCardProps) {
    const visibleTechnologies = technologies.slice(0, 5);
    const remainingTechnologies = technologies.length - visibleTechnologies.length;

    return (
        <article className={styles.card}>
            {/* Organiza as informações principais do projeto em um card vertical */}
            <div className={styles.projectInfo}>
                <img 
                    src={image} 
                    alt={`Capa do projeto ${title}`}
                    className={styles.coverImage}
                />

                <div className={styles.projectContent}>
                        
                    <div className={styles.projectHeader}>
                        <h3>{title}</h3>   
                        <p className={styles.date}>{date}</p> 
                    </div>

                    <p>{description}</p>

                    <div className={styles.technologies}>
                        {visibleTechnologies.map((technology) => (
                                <span
                                    key={technology}
                                    className={styles.technology}
                                >
                                    {technology}
                                </span>
                        ))}

                        {remainingTechnologies > 0 && (
                            <span className={styles.technology}>
                                +{remainingTechnologies}
                            </span>
                        )}
                    </div>

                    <div className={styles.links}>

                        <button onClick={onViewDetails}>
                            Detalhes
                        </button>

                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub />
                            GitHub
                        </a>
                    </div>
                </div>
            </div>

        </article>
    );
}

export default ProjectCard