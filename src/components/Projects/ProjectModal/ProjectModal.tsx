import projects from "../../../data/projects";
import styles from "./ProjectModal.module.css";
import { FaTimes, FaGithub } from "react-icons/fa";
import { useEffect, useRef } from "react";

type Project = (typeof projects)[number];

interface ProjectModalProps {
    project: Project
    onClose: () => void
}

function ProjectModal({
    project,
    onClose
}: ProjectModalProps) {
    const closeButtonRef = useRef<HTMLButtonElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);

    // Permite fechar o modal ao pressionar a tecla Esc.
    useEffect(() => {
        function lidarComTeclado(event: KeyboardEvent) {
            if (event.key === "Escape") {
                onClose();
                return;
            }

            if (event.key === "Tab") {
                const elementosFocaveis = modalRef.current?.querySelectorAll<HTMLElement>(
                    'button, a[href]'
                );

                if (!elementosFocaveis?.length) return;

                const primeiro = elementosFocaveis[0];
                const ultimo = elementosFocaveis[elementosFocaveis.length -1];

                if (event.shiftKey && document.activeElement === primeiro) {
                    event.preventDefault();
                    ultimo.focus();
                } else if (!event.shiftKey && document.activeElement === ultimo) {
                        event.preventDefault();
                    primeiro.focus();
                }
            }
        }

        document.addEventListener("keydown", lidarComTeclado);

        // Remove o evento ao fechar o modal.
        return () => {
            document.removeEventListener("keydown", lidarComTeclado);
        };
    }, [onClose]);

    // Direciona o foco para o botão Fechar quando o modal abrir.
    useEffect(() => {
        closeButtonRef.current?.focus();
    }, []);

    return (
        <div 
            className={styles.overlay}
            onClick={onClose}
        >
            <div 
                ref={modalRef}
                className={styles.modal}
                role="dialog"
                aria-modal="true"
                aria-labelledby="project-modal-title"
                onClick={(event) => event.stopPropagation()}
            >
                <div className={styles.modalHeader}>
                    <h2 id="project-modal-title">{project.title}</h2>

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
                    ref={closeButtonRef} 
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