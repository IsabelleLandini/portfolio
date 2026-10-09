import ProjectCard from "./ProjectCard";
import projects from "../../data/projects";
import styles from "./Projects.module.css";
import { useState, useRef, useEffect } from "react";
import ProjectModal from "./ProjectModal/ProjectModal"

function Projects() {
    // Controla o projeto selecionado para exibir seus detalhes no modal
    const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);
    const botaoQueAbriuModal = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        if (selectedProject === null && botaoQueAbriuModal.current) {
            botaoQueAbriuModal.current.focus();
        }
    }, [selectedProject]);
    
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
                        onViewDetails={(button) => {
                            botaoQueAbriuModal.current = button;
                            setSelectedProject(project);
                        }}
                    />
                ))}
            </div>

            {/* Exibe o modal somente quando um projeto foi selecionado */}
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