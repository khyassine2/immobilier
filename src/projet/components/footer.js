import { Link } from "react-router-dom";

function Footer() {
    return ( <>
    <div className="nav1">
        <ul id="ul-nb1">
            <Link end to="/"><li>ACCUEIL</li></Link>
            <Link to="/vendeur"><li>VENDEURS</li></Link>
            <Link to="/acheteur"><li>ACHATEURS</li></Link>
            <Link to="/presse"><li>REVUE DE PRESSE</li></Link>
            <Link to="/credit"><li>CALCUL DE CREDIT</li></Link>
            <Link to="/contact"><li>CONTACT</li></Link>
            <Link href="/plan"><li>PLAN DU SITE</li></Link>
            <Link href="/partenariat"><li>PARTENAIRES</li></Link>
            <Link href="/condition"><li>CONDITIONS GENERALES</li></Link>
        </ul>
    </div>
    <p align="center">CopyRight © BY DomHS-2023</p></> );
}

export default Footer;