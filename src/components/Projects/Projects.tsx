import ProjectCard from "./ProjectCard";
import projects from "../../data/projects";

function Projects() {
    return(
        <section id="projects">
            <h2>Projetos</h2>

            {/* Percorre os projetos e cria um card para cada item */}
            {projects.map((project) => (
                <ProjectCard
                    key={project.title} 
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    image={project.image}
                    github={project.github}
                    demo={project.demo}
                />
            ))}
        </section>
    )
}

export default Projects