import { NavLink ,Link} from "react-router-dom";

function NavBar1() {
    return (
        <>
        <div>
        <img src="http://localhost:3000/images/logo_idom.jpg" /><Link to='/' className="btn btn-secondary" style={{marginLeft:"800px"}}>Log out</Link>
    </div>
    <div className="nav">
        <ul id="ul-nb">
            <li><NavLink className='x' end to="/admin/annonces">ANNONCES</NavLink></li>
            <li><NavLink className='x'  to="/admin/presse">PRESSE</NavLink></li>
        </ul>
    </div>
    
    </>
     )
}

export default NavBar1;