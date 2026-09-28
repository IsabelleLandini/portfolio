
interface ProjectCardProps {
    title: string
    description: string
    technologies: string[]
    image: string
    github: string
    demo?: string
}

function ProjectCard({
    title,
    description,
    technologies,
    image,
    github,
    demo
}: ProjectCardProps) {
    return(
        <article>
            <img src={image} alt={title} />

            <h3>{title}</h3>

            <p>{description}</p>

            <p>{technologies.join(" • ")}</p>

            <a href={github}>Github</a>

            {demo && <a href={demo}>Ver Projeto</a>}
        </article>
    )
}

export default ProjectCard