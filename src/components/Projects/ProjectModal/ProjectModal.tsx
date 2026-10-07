import projects from "../../../data/projects";
import styles from "./ProjectModal.module.css";
import { FaTimes, FaGithub } from "react-icons/fa";
import { useEffect } from "react";

type Project = (typeof projects)[number];

interface ProjectModalProps {
    project: Project
    onClose: () => void
}

function ProjectModal({
    project,
    onClose
}: ProjectModalProps) {
    // Permite fechar o modal ao pressionar a tecla Esc.
    useEffect(() => {
        function lidarComTeclado(event: KeyboardEvent) {
            if (event.key === "Escape") {
                onClose();
            }
        }

        document.addEventListener("keydown", lidarComTeclado);

        // Remove o evento ao fechar o modal.
        return () => {
            document.removeEventListener("keydown", lidarComTeclado);
        };
    }, [onClose]);

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.modalHeader}>
                    <h2>{project.title}</h2>

                    <p className={styles.date}>{project.date}</p>
                </div>

                <img
                    src={project.screenshot}
                    alt={`Screenshot do projeto ${project.title}`}
                    className={styles.screenshot}
                />

                <p className={styles.description}>{project.details}</p>

                <h3>Tecnologias</h3>

                {/* Renderiza todas as tecnologias cadastradas para o projeto */}
                <div className={styles.technologies}>
                    {project.technologies.map((technology) => (
                        <span key={technology} className={styles.technology}>
                            {technology}
                        </span>
                    ))}
                </div>


                <h3>Funcionalidades</h3>
                {/* Exibe cada funcionalidade do projeto como um item da lista */}
                <ul className={styles.features}>
                    {project.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                    ))}
                </ul>

                <div className={styles.modalLinks}>
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                        GitHub
                    </a>

                    {/* Exibe o link da Demo apenas nos projetos que possuem uma URL cadastrada */}
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Demo
                        </a>
                    )}
                </div>

                <button 
                    className={styles.closeButton}
                    onClick={onClose}
                    aria-label="Fechar"
                >
                    <FaTimes />
                </button>
            </div>
        </div>
    )
}

export default ProjectModal;