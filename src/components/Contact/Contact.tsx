import styles from "./Contact.module.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Contact() {
    return (
        <section id="contact">
            <h2 className={styles.title}>Contato</h2>

            <div className={styles.contactCards}>
               <a 
                href="mailto:isa_landini@hotmail.com"
                className={styles.contactCard}
                >
                    <FaEnvelope />
                    E-mail
                </a>

                <a 
                    href="https://www.linkedin.com/in/isabellelandini/" 
                    className={styles.contactCard}
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <FaLinkedin />
                    LinkedIn
                </a>

                <a 
                    href="https://github.com/IsabelleLandini" 
                    className={styles.contactCard}
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <FaGithub />
                    GitHub
                </a>
            </div>

            <footer className={styles.footerInfo}>
                {/* Atualiza automaticamente o ano exibido no rodapé */}
                <p>© {new Date().getFullYear()} Isabelle Landini</p>
                <p>Desenvolvedora Backend Python Júnior | Full Stack</p>
            </footer>
        </section>
    )
}

export default Contact