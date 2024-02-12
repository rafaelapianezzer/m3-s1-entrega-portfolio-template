import BannerImage from "../../assets/banner-img.png"

function BannerSection () {
    return (
    <>
    <div className="content">
    <div className={"text"}>
    <p className={"label"}>Josedasilva</p>
    <h1 className={"title1"}>Bem vindo ao meu portfólio</h1> 
    <p className={"paragraph"}>Uma frase interessante sobre mim</p>
    <button className="btn">Saiba mais</button>
    </div>
    <div>
        <img src={BannerImage}/>
    </div>
    </div>


    </>
    )
}

export default BannerSection;