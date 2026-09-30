import ProjectCard from "./ProjectCard";
import projects from "../../data/projects";
import styles from "./Projects.module.css";

function Projects() {
    return(
        <section id="projects" className={styles.projects}>
            <h2>Projetos</h2>

            <div className={styles.projectGrid}>
                {/* Percorre os projetos e cria um card para cada item */}
                {projects.map((project) => (
                    <ProjectCard
                        key={project.title} 
                        title={project.title}
                        date={project.date}
                        description={project.description}
                        technologies={project.technologies}
                        image={project.image}
                        screenshot={project.screenshot}
                        github={project.github}
                        demo={project.demo}
                    />
                ))}
            </div>
    
        </section>
    )
}

export default Projects