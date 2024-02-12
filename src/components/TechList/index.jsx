import { technologies } from "../../data/technologies";

function TechList () {
    
    
    
    
    return (
        <ul className={"paragraph"} >
            {technologies.map(tech => (
                <li className={"techCard"} key={tech.name}
                >
                    <img className={"icon"}src={tech.img} alt={tech.name} />
                    <p>{tech.name}</p>
                    
                </li>
            ))}
        </ul>

    );
}

export default TechList;