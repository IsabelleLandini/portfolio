import styles from "./About.module.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function About() {
    return (
        <section id="about">
            {/* Agrupa a foto e o conteúdo para organizar o layout da seção */}
            <div className={styles.aboutContainer}>
                <div className={styles.aboutImage}>
                    <img 
                        src="/images/profile/isabelle.jpeg" 
                        alt="Foto de Isabelle Landini" 
                        className={styles.profileImage}
                    />
                </div>

                <div className={styles.aboutContent}>
                    <h2>Sobre Mim</h2>

                    <p>
                        Estou em transição de carreira para a área de tecnologia,
                        iniciando uma nova etapa da minha trajetória profissional.
                        Sou formada em Publicidade e Propaganda, pós-graduada em
                        Administração de Marketing e também cursei Administração.
                        Ao longo da minha formação e experiência, desenvolvi diferentes
                        conhecimentos que agora levo comigo para esse novo caminho.
                    </p>

                    <p>
                        Há pouco mais de um ano, comecei a me dedicar aos estudos
                        em tecnologia e encontrei no desenvolvimento de software
                        uma área na qual quero construir minha carreira. Atualmente,
                        estou me formando em Full Stack Python pela EBAC e venho
                        colocando o aprendizado em prática por meio de projetos,
                        explorando tecnologias como Python, FastAPI, APIs, bancos
                        de dados, React, TypeScript e Next.js, além de ferramentas
                        como Git e Docker.
                    </p>

                    <p>
                        Minha transição está sendo construída de forma prática e
                        contínua: estudo, desenvolvo projetos, enfrento novos desafios
                        e busco evoluir a cada etapa. Meu objetivo é transformar essa
                        nova formação em uma carreira na tecnologia, unindo os conhecimentos
                        que já construí ao longo da minha trajetória às novas habilidades
                        que venho desenvolvendo em programação.
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
