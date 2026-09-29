import skills from "../../data/skills";

function Skills() {
    return (
        <section id="skills">
            <h2>Habilidades</h2>

            <div>
                <h3>Habilidades</h3>
                {/* Percorre cada categoria de habilidades e exibe seus itens na interface */}
                {skills.habilidades.map((skill) => (
                    <span key={skill}>{skill}</span>
                ))}
            </div>

            <div>
                <h3>Conhecimentos</h3>

                {skills.conhecimentos.map((skill) => (
                    <span key={skill}>{skill}</span>
                ))}
            </div>

            <div>
                <h3>Noções</h3>

                {skills.nocoes.map((skill) => (
                    <span key={skill}>{skill}</span>
                ))}
            </div>
        </section>
    )
}

export default Skills