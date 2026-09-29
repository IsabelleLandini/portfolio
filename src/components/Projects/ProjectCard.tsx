
interface ProjectCardProps {
    title: string
    description: string
    technologies: string[]
    image: string
    screenshot: string
    github: string
    demo?: string
}

function ProjectCard({
    title,
    description,
    technologies,
    image,
    screenshot,
    github,
    demo
}: ProjectCardProps) {
    return(
        <article>
            <img 
                src={image} 
                alt={title}
                className="project-image" 
            />

            <h3>{title}</h3>

            <p>{description}</p>

            <img 
                src={screenshot} 
                alt={title} 
                className="project-image"
            />

            <p>{technologies.join(" • ")}</p>

            <a href={github}>Github</a>

            {demo && <a href={demo}>Ver Projeto</a>}
        </article>
    )
}

export default ProjectCard