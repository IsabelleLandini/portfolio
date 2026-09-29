import { useEffect, useState } from "react";

function VoltarAoTopo() {
    const [estaVisivel, setEstaVisivel] = useState(false);

    useEffect(() => {
        function lidarComRolagem() {
            setEstaVisivel(window.scrollY > 300);
        }

        window.addEventListener("scroll", lidarComRolagem);

        // Remove o evento de rolagem quando o componente é desmontado.
        return () => {
            window.removeEventListener("scroll", lidarComRolagem);
        };
    }, []);

    function VoltarAoTopo() {
        window.scrollTo({
            top:0,
            behavior: "smooth"
        });
    }

    if (!estaVisivel) {
        return null;
    }

    return (
        <button onClick={VoltarAoTopo}>
            ↑ Voltar ao topo
        </button>
    );
}

export default VoltarAoTopo;
