import { Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";


function ChildVendeur() {
    //*********************************** */
    const tblI=["../images/mandat-classique_photo_1.jpg","../images/mandat-classique_photo_2.jpg ","../images/mandat-classique_photo_1.jpg"]
    let i=0;
    const ch=()=>{
        document.getElementById("image").src=tblI[i]
        if(i<tblI.length-1)
          i++;
        else 
          i=0; 
        }
    const chmoin=()=>{
        document.getElementById("image").src=tblI[i]
        if(i==0)
           i=tblI.length-1;
        else 
           i--; 
        }
    /************************************ */
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current
      });
    return ( <>
    <div className="img">
         <img src="http://localhost:3000/images/dar.PNG" />
    </div>
    <div className="row ms-0 me-0" >
                <div className="col-6 ps-4 dv1" >
                    <p>
                        <font size="5" color="#82817c"><b> Vous etes Vendeur</b></font><br/>
                        En nous confiant la vente de votre bien immobilier , vous obtenez la garantie de réaliser une opération simple rapide , et répondant aux attentes que vous nous avez exprimées<br/><br/>
                        IDÔM immobilier vous propose de choisir <font color="#82817c">le mandat le mieux adapté à votre projet</font>
                     </p>
                   
                </div>
               
                <div className="col-6 ps-4 pt-3 dv1" style={{borderLeft:"1px #82817c solid" }}>
                    <p>
                        Le mandat home staging<br/><font size="3">
                        qui reste l'option la plus sûre pour une vente efficace de votre bien Sa mise en valeur permettra , à coup sur , une vente rapide à un prix avantageux</font><br/> <br/><font color="#82817c">Le mandat classique</font><br/><font size="3" color="#82817c">si celui - ci s'avère suffisant dans l'hypothèse où le facteur temps n'est pas une priorité pour vous , et que votre prix de vente se situe dans les prix raisonnables du marché</font>
                     </p>
                   
                     
                </div>
            </div>
        <div className="nav2">
            <ul id="ul-nb2">
                <Link to="/vendeur"><li>Le Home stanging</li></Link>
                <Link to=""><li className="act">Le mandat Classique</li></Link>
               
            </ul>
        </div>
        <div className="row">
            <div className="col-8">
                <div className="row mt-4 ms-0 h2" style={{width:"95%"}}>
                    <h2>Le Mandat Classique ?</h2>
                </div><br/>
                <div className="row  ms-4 " style={{width:"85%"}}>
                    <p ref={componentRef}>
                        <font size="3"> En confiant la vente de votre bien immobilier à IDôm immobilier , vous avez la garantie d'effectuer une transaction immobilière sécurisée , rapide , et au juste prix , répondant ainsi aux attentes que vous nous aurez exprimées 
                        <br/><br/>IDôm immobilier , c'est : <br/><br/>
                        <b>Une estimation précise et juste</b> de votre bien , fondée sur notre expérience ainsi que notre connaissance précise du marché immobilier<br/><br/>
                        <b>Une mise en relation avec un grand nombre d'acquéreurs potentiels</b> grâce à notre investissement dans la diffusion d'annonces sur différents supports : internet , presse papier , boites au lettre <br/><br/>
                        <b> Un gain de temps</b> , en ce sens que notre savoir - faire nous permet de sélectionner les candidats sérieux et solvables<br/><br/>
                        <b>Une simplification de la mise en vente</b> de votre bien puisque nous réalisons toutes les démarches à votre place<br/><br/>
                        <b>Un soutien actif lors de la négociation </b>du prix de vente du bien , étape qui n'est pas évidente à gérer lorsque l'on est vendeur<br/><br/>
                        <b>La couverture d'éventuels préjudices</b> dans la mesure où nous possédons l'ensemble des assurances couvrant les préjudices pouvant être subis par les acquéreurs potentiels . Ceci n'est d'ailleurs pas le cas lors d'une transaction entre des particuliers
                        </font>
                    </p>
                </div>
                <div className="row mt-4 ms-0" style={{width:"85%"}}>
                    <hr/>
                </div>
                <div className="row mt-4 ms-4 ">
                    <div className="col">
                            <p>
                                <b> En résumé</b> , notre intervention vous garantie une vente réalisable ,<br/> rapide , au juste prix et sans annulation de demière minute 
                            </p>
                    </div>
                   
                </div>
                <div className="row mt-4 ms-4" style={{width:"95%"}}>
                    <ul id="ul-nb11">
                        <Link to="/contact"><li>Envoyer</li></Link>
                        <Link to="" onClick={handlePrint}><li>Imprimer</li></Link>
                        <Link to="" onClick={()=>{document.body.scrollTop = 0;document.documentElement.scrollTop = 0;}}><li>Haut de page</li></Link>
                   
                    </ul>
                 </div>
            </div>
            
            <div className="col-4">
                <div className="row  p-0 m-0 "  >
                    <img src="../images/mandat-classique_photo_1.jpg " height="250px" width="99%" id="image"/>
                </div>
                <div className="row p-0 m-0 mt-3"  >
                    <img src="../images/mandat-classique_photo_2.jpg " height="250px" width="99%" />
                </div>
                <div className="row p-0 m-0 mt-3"  >
                    <div className="col-4">
                        <img src="../images/home_stanging_photo_2.jpg " height="70px" width="99%" />
                    </div>
                    <div className="col-4">
                        <img src="../images/home_stanging_photo_2.jpg " height="70px" width="99%" />
                    </div>
                    <div className="col-4">
                        <img src="../images/home_stanging_photo_2.jpg " height="70px" width="99%" />
                    </div>
                </div>
                <div className="row p-2 m-0 mt-3 border"  >
                    <div className="col-6">
                        <button onClick={chmoin}>Precedent</button>
                    </div>
                    <div className="col-6 ">
                        <button style={{marginLeft:"120px"}} onClick={ch}>Suivant</button>
                    </div>                   
                </div>
                
            </div>
        </div>        </> );
}

export default ChildVendeur;