import ProjectCard from "./ProjectCard";
import projects from "../../data/projects";
import styles from "./Projects.module.css";
import { useState } from "react";
import ProjectModal from "./ProjectModal/ProjectModal"

function Projects() {
    const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);
    
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
                        github={project.github}
                        onViewDetails={() => setSelectedProject(project)}
                    />
                ))}
            </div>

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
    
        </section>
    )
}

export default Projects;