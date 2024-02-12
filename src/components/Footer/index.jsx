import wIcon from "../../assets/whatsapp-icon.png";
import inIcon from "../../assets/linkedin-icon.png";
import gitIcon from "../../assets/github-icon.png";


function Footer () {
    return (
        <div className={"footerContainer"}>
            <div>
                <h4 className={"title2"}>Contato</h4>
                    <img src={wIcon}/>
                    <img src={inIcon}/>
                    <img src={gitIcon}/>
            </div>
            <div>
                <p className={"paragraph"}>Todos os direitos reservados - José da Silva</p>
            </div>
        
        </div>
    );
}

export default Footer;