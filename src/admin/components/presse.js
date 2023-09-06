import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux"
import { deletePre } from "../../projet/presRed";
function PresseAdmin() {
    const bd=useSelector(st=>st.presses.presse)
    const dispatch=useDispatch();
    const del=(e)=>{
        if( window.confirm("are you sure") ){
             dispatch(deletePre(e))
         alert("suppression avec succes")}
 
     }
    return ( 
        <div>
            <div className="row ms-4 mt-5 nav2">
                <ul id="ul-nb2">
                    <li>Annonces Presse</li>            
                </ul>
            </div>  

            <div className="row">
                <div className="col"></div>
                {/* ---------------------------------------------------- */}

                <div className="col-8 ">
                       <div className="row my-4">
                            <h3>Liste des offres en ligne</h3>
                       </div>
                       <div className="row my-4">
                            <div className="col-4">creation d'une nouvelle annonce</div>
                            <div className="col-2 p-0"><button><Link  style={{textDecoration:"none",color:"black",padding:"20px"}} to="/admin/presse/create">Creer</Link></button></div>
                       </div>

                       {bd.map((e,i)=>
                       <div className="row my-4 " key={i}>
                                <div className="col-3  p-0 m-0" >
                                    <img src={e.img} height="150px" width="90%" />
                                </div>
                                <div className="col-6 " style={{textAlign:"justify"}}>
                                    <h5>{e.titre}</h5>
                                    {e.description}<Link> Lire la suite</Link>
                                </div>
                                <div className="col-3 my-5">
                                    <button><Link  style={{textDecoration:"none",color:"black",padding:"20px"}} to={"/admin/presse/edit/"+e.id}>Editer</Link></button><br/><br/>
                                    <button  style={{padding:"0px 10px"}} onClick={()=>del(e.id)}>Supprimer</button>
                                </div>
                        
                        </div>
                        )}
                </div>

                {/* -------------------------------------------- */}
                <div className="col"></div>
            </div>      
        </div>
     );
}

export default PresseAdmin;