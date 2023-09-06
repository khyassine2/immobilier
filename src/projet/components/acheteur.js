import { useEffect, useMemo, useState } from "react";
import {Link,NavLink} from "react-router-dom"
import {  useSelector } from "react-redux";
import {useDispatch} from "react-redux"
import {searchBien} from '../imobS'


function Acheteur() {
    const bd=useSelector(st=>st.imobs.imob)
    const [cpt,setCpt] = useState(true)
    const [cpt1,setCpt1] = useState(false)
    const [ct,setct]=useState(1)

 
    /********************************** */
    const [selectedIndex,setselectedIndex]=useState(0)
    const pages=Math.ceil(bd.length/3)
    let state = useSelector(state => state.imobs);
    const dispatch = useDispatch()
   
    let values = {type:new RegExp(state.bienSearch.type,'gi')}
    let list = state.bienSearch.type? bd.filter(item => item.Type.match(values.type) || 
    (item.Surface >= Number(state.bienSearch.surfaceMin) && item.Surface <= Number(state.bienSearch.surfaceMax))
    ||(item.Prix >= Number(state.bienSearch.prixMin) && item.Prix <= Number(state.bienSearch.prixMax)) || item.Nombre_de_pieces === Number(state.bienSearch.nb_piece)):bd
    const seletedData =useMemo(()=>
    list.slice(selectedIndex*3,(selectedIndex*3)+3)
    )
 
    const handlclickS = ()=>{
         setselectedIndex(prev=>prev+1)
            setCpt(false)
            setct(ct+1);
            console.log(ct)
        if (ct==pages-1) {
            setCpt1(true)
        }
        
        
    }
    const handlclickP = ()=>{
        setselectedIndex(prev=>prev-1)
        setct(ct-1);
        console.log(ct)
        if(ct==2)
            setCpt(true)
            setCpt1(false)
    }
    const handleSearch = (e)=>{
        e.preventDefault()
        
        const {type,minS,maxS,prixMin,prixMax,nbr} = document.forms[0];
        let obj = {type:type.value,surfaceMin:minS.value,surfaceMax:maxS.value,prixMin:prixMin.value,prixMax:prixMax.value,nb_piece:nbr.value};
       console.log(obj);
        dispatch(searchBien(obj))
        // console.log(obj);

    }

    return ( <>
    <div className="img">
         <img src="http://localhost:3000/images/dar.PNG" />
    </div>
        <div className="row ms-0 me-0" >
                <div className="col-6 ps-4 pt-5 dv1" id='ff' >
                    <p>
                        <font size="5" color="82817c"><b> Vous êtes acheteur</b></font><br/>
                        Conscient que chaque acheteur est unique , ID.OM Immobilier répond à chacun de vos besoins par le biais de<br/>
                        <font color="82817c">deux services:</font>
                     </p>
                   
                </div>
               
                <div className="col-6 ps-4  dv1" style={{borderLeft:"1px 82817c solid"}} >
                    <p>
                        Annonces immobilières<br/><font size="2">
                        Vous souhaitez acheter un appartement ou une maison . Nous vous invitons à consulter nos annonces immobilières . N'hésitez pas à nous contacter pour organiser des visites des biens sélectionnés .</font><br/> <br/><font color="82817c">Chasseur immobilier</font><br/><font size="2" >Vous avez déjà défini , d'une part , vos critères de recherche , et d'autre part , identifié tous vos besoins , mais le temps vous manque pour passer à l'action . Confiez votre recherche à notre service chasseur immobilier . Notre équipe interviendra de façon réactive pour sélectionner et vous présenter les meilleures opportunités .</font>
                     </p>
  
                </div>
        </div>
        <div className="nav2">
            <ul id="ul-nb2">
                <NavLink to="/acheteur" ><li className="act">Annonces immobilieres</li></NavLink>
                <NavLink to="/acheteur/new" ><li>Chasseur immobilier</li></NavLink>
               
            </ul>
        </div>

                   
        <div className="row w-50 mt-4 ms-0 h2">
                <h2>une selection d'offre exclusives</h2>
            </div>
            <div className="row  ms-0  ">
                <div className="col-md-8 col m-0">
                    {
                        seletedData.map((e,i)=>
                        
                          <div className="row my-4 " key={i}>
                                <div className="col-3  p-0 m-0" >
                                    <img src={e.img} height="150px" width="90%" />
                                </div>
                                <div className="col-8 ">
                                    <h5>{e.titre}</h5>
                                    {e.description}<Link to={"/acheteur/"+e.id}> Lire la suite</Link>
                                </div>
                                <div className="col"> </div>
                        
                            </div>
                        
                        )
                    }
                  <div className="row my-4">
                        <div className="col-3   p-0 m-0">
                            <button onClick={()=>handlclickP()} disabled={cpt}>Precedent</button>
                        </div>
                        <div className="col-8 ">
                            <button style={{marginLeft:"80%"}} onClick={()=>handlclickS()} disabled={cpt1}>Suivant</button>
                        </div>
                        <div className="col"> </div>
                    </div>
                    
                </div>
                <form className="col-md-4 col">
                
                    <div className="row my-4">
                        <div className="col ">
                            <img src="images/img_trouvez_un_bien.jpg" width="100%"/>
                        </div>
                    </div>
                    
                    <div className="row my-4">
                        <div className="col ">
                            
                            <h5>Localisation</h5>
                            <input type="text" disabled name="localisation" style={{width:"100%",background:"#f0f0ee",border:"1px solid"}}/>

                            <h5>Type de bien</h5>
                            <select name="type" style={{width:"100%",background:"#f0f0ee"}}>
                            <option value="Type"></option>
                                {
                                    bd.map((typ)=><option value={typ.Type}>{typ.Type}</option>)
                                }
                            </select>
                        </div>
                    </div>
                    <div className="row my-4">
                        <div className="col ">
                            <h5>Surface</h5>
                            <select name="minS" style={{width:"48%",background:"#f0f0ee"}}>
                                <option value="Min m²">Min m²1</option>
                                <option value="50">50 m²</option>
                                <option value="60">60 m²</option>
                                <option value="70">70 m²</option>
                                <option value="80">80 m²</option>
                                <option value="90">90 m²</option>
                                <option value="100">100 m²</option>
                            </select>&nbsp;&nbsp;
                            <select name="maxS" style={{width:"48%",background:"#f0f0ee"}}>
                                <option value="Max m²">Max m²</option>
                                <option value="50">50 m²</option>
                                <option value="60">60 m²</option>
                                <option value="70">70 m²</option>
                                <option value="80">80 m²</option>
                                <option value="90">90 m²</option>
                                <option value="100">100 m²</option>
                            </select>
                            <h5>Nombre de pieces</h5>
                            <input type="number" name="nbr" style={{width:"48%",background:"#f0f0ee"}} min="0" />
                        </div>
                    </div>
                    <div className="row my-4">
                        <div className="col ">
                            <h5>Prix</h5>
                            <select name="prixMax" style={{width:"48%",background:"#f0f0ee"}}>
                                <option value="Max $">Max $</option>
                                <option value="100000">100000 DH</option>
                                <option value="200000">200000 DH</option>
                                <option value="300000">300000 DH</option>
                                <option value="400000">400000 DH</option>
                                <option value="500000">500000 DH</option>
                            </select>&nbsp;&nbsp;
                            <select name="prixMin" style={{width:"48%",background:"#f0f0ee"}}>
                                <option value="Min $">Min $</option>
                                <option value="100000">100000 DH</option>
                                <option value="200000">200000 DH</option>
                                <option value="300000">300000 DH</option>
                                <option value="400000">400000 DH</option>
                                <option value="500000">500000 DH</option>
                            </select><br/><br/>
                            <button style={{width:"60%",background:"#f0f0ee"}} onClick={handleSearch}>Lancer la recherche</button>
                        </div>
                    </div>
               
                </form>
            </div>
        </>)
}

export default Acheteur;