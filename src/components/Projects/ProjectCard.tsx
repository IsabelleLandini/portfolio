import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
    title: string
    date: string
    description: string
    technologies: string[]
    image: string
    screenshot: string
    github: string
    demo?: string
}

function ProjectCard({
    title,
    date,
    description,
    technologies,
    image,
    screenshot,
    github,
    demo
}: ProjectCardProps) {
    return(
        <article className={styles.card}>
            {/* Organiza as informações principais do projeto em um card vertical */}
            <div className={styles.projectInfo}>
                <img 
                    src={image} 
                    alt={title}
                    className={styles.coverImage}
                />

                <div className={styles.projectContent}>
                        
                    <div className={styles.projectHeader}>
                        <h3>{title}</h3>   
                        <p className={styles.date}>{date}</p> 
                    </div>

                    <p>{description}</p>

                    <div className={styles.technologies}>
                        {technologies.map((technology) => (
                                <span
                                    key={technology}
                                    className={styles.technology}
                                >
                                    {technology}
                                </span>
                        ))}
                    </div>

                    <div className={styles.links}>

                        <a href="#">Ver Detalhes</a>
                    </div>
                </div>
            </div>

        </article>
    )
}

export default ProjectCard