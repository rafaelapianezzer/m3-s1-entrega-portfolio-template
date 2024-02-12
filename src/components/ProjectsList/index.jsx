import { projects } from "../../data/projects";
import IconImage from "../../assets/git-icon.png"

function ProjectsList() {
    return (
        <ul className={"projectsList"}>
            {projects.map(pro => (
                <ul key={pro.name}>
                    <div className={"projectsCard"}>
                        <div  className={"cardContent"}>
                        <li className={"title3"}>{pro.name}</li>
                        <li className={"paragraph"}>{pro.description}</li>
                        <a className={"link"}>Saiba mais</a>
                        </div>
                        <div>
                        <img src={IconImage}></img>
                        </div>
                    </div>
                    
                </ul>
            ))}
        </ul>
        

    );
}

export default ProjectsList;






