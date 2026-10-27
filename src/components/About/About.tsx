import styles from "./About.module.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function About() {
    return (
        <section id="about">
            {/* Agrupa a foto e o conteúdo para organizar o layout da seção */}
            <div className={styles.aboutContainer}>
                <div className={styles.aboutImage}>
                    {/* Carrega a foto de perfil diretamente da pasta pública do projeto */}
                    <img 
                        src="/images/profile/isabelle.jpeg" 
                        alt="Foto de Isabelle Landini" 
                        className={styles.profileImage}
                    />
                </div>

                <div className={styles.aboutContent}>
                    <h2>Sobre Mim</h2>

                    <p>
                       Sou desenvolvedora com foco em Backend Python, com formação na área 
                       e experiência prática em projetos utilizando Python, FastAPI, SQLAlchemy 
                       e bancos de dados SQL. Desenvolvo APIs REST, implementando operações CRUD, 
                       validação de dados, autenticação e integração com serviços externos.
                    </p>

                    <p>
                        Ao longo dos meus estudos, desenvolvi projetos que envolvem persistência
                        de dados, testes automatizados e ferramentas como Git, GitHub e Docker. 
                        Também possuo conhecimentos em React, TypeScript e Next.js, que complementam 
                        minha atuação e ampliam minha compreensão do desenvolvimento Full Stack.  
                    </p>

                    <p>
                        Estou em transição de carreira para a área de tecnologia. Sou formada em Publicidade 
                        e Propaganda, tenho pós-graduação em Administração de Marketing e também cursei Administração. 
                        Essa trajetória contribuiu para desenvolver habilidades de comunicação, organização e resolução 
                        de problemas. Atualmente, busco minha primeira oportunidade como Desenvolvedora 
                        Backend Python Júnior, unindo minha experiência anterior aos conhecimentos adquiridos em tecnologia.
                    </p>

                    <div className={styles.contactLinks}>
                        <a
                            href="https://www.linkedin.com/in/isabellelandini/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Linkedin"
                        >
                            <FaLinkedin />
                        </a>

                        <a
                            href="https://github.com/IsabelleLandini"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="mailto:isa_landini@hotmail.com"
                            aria-label="E-mail"
                        >
                            <FaEnvelope />
                        </a>
                    </div>
                </div>
            </div>
        </section>         
    )
}

export default About
