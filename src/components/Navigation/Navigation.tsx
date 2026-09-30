import styles from "./Navigation.module.css";

function Navigation() {
    return (
        <nav className={styles.navigation}>
            {/* Separa a identidade profissional da navegação principal */}
            <div className={styles.identity}>
                <h1>Isabelle Landini</h1>
                <p>Desenvolvedora Backend Python Júnior | Full Stack</p>
            </div>

            <div className={styles.links}>
                <a href="#about">Sobre Mim</a>
                <a href="#projects">Projetos</a>
                <a href="#skills">Habilidades</a>
                <a href="#contact">Contato</a>
            </div>
        </nav>
    )
}

export default Navigation