import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import styles from "./BackToTop.module.css";

function VoltarAoTopo() {
    const [estaVisivel, setEstaVisivel] = useState(false);

    useEffect(() => {
        function lidarComRolagem() {
            // Exibe o botão somente após o usuário rolar mais de 300 pixels.
            setEstaVisivel(window.scrollY > 300);
        }

        window.addEventListener("scroll", lidarComRolagem);

        // Remove o evento de rolagem quando o componente é desmontado.
        return () => {
            window.removeEventListener("scroll", lidarComRolagem);
        };
    }, []);

    function rolarParaOTopo() {
        window.scrollTo({
            top:0,
            // Retorna ao topo da página com rolagem suave.
            behavior: "smooth"
        });
    }

    if (!estaVisivel) {
        return null;
    }

    return (
        <button 
            onClick={rolarParaOTopo}
            className={styles.backToTop}
            aria-label="Voltar ao topo"
        >
            <FaArrowUp />
        </button>
    );
}

export default VoltarAoTopo;
