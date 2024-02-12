import ProjectsList from "../ProjectsList"

function ProjectsSecion () {
    return (
        <div className={"projectsContainer"}> 
        <h2 className={"title2"}>Projetos</h2>
        <div>
        <ProjectsList/>
        </div>
        </div>
    )
}

export default ProjectsSecion