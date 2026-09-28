import ProjectCard from "./ProjectCard";

function Projects() {
    return(
        <section id="projects">
            <h2>Projetos</h2>

            <ProjectCard 
                title= "Projeto 1"
                description="Descrição do projeto"
                technologies={["React", "TypeScript"]}
                image="/images/projeto1.jpg"
                github="https://github.com/IsabelleLandini"
            />
        </section>
    )
}

export default Projects