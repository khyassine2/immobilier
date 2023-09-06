import { NavLink ,Link} from "react-router-dom";

function NavBar() {
    return (
        <>
        <div>
        <img src="http://localhost:3000/images/logo_idom.jpg" /><Link to='/Login' className="btn btn-secondary" style={{marginLeft:"800px"}}>Login</Link>
    </div>
    <div className="nav">
        <ul id="ul-nb">
            <li><NavLink className='x' end to="/">ACCUEIL</NavLink></li>
            <li><NavLink className='x'  to="/vendeur">VENDEURS</NavLink></li>
            <li><NavLink className='x' to="/acheteur">ACHATEURS</NavLink></li>
            <li><NavLink className='x' to="/presse">REVUE DE PRESSE</NavLink></li>
            <li><NavLink className='x' to="/credit">CALCUL DE CREDIT</NavLink></li>
            <li><NavLink className='x' to="/contact">CONTACT</NavLink></li>
        </ul>
    </div>
    
    </>
     )
}

export default NavBar;