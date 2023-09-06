import { useRef } from "react";
import { Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

function Vendeur() {
    
    const tblI=["../images/home_stanging_photo_1.jpg ","../images/home_stanging_photo_2.jpg ","../images/home_stanging_photo_2.jpg ","../images/home_stanging_photo_1.jpg ","../images/home_stanging_photo_2.jpg "]
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
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
      });

    return ( 

    <>
    <div className="img">
         <img src="http://localhost:3000/images/dar.PNG" />
    </div>
     <div className="row ms-0 me-0" >
                <div className="col-6 ps-4 dv1" id='ff' >
                    <p>
                        <font size="5" color="82817c"><b> Vous etes Vendeur</b></font><br/>
                        En nous confiant la vente de votre bien immobilier , vous obtenez la garantie de réaliser une opération simple rapide , et répondant aux attentes que vous nous avez exprimées<br/><br/>
                        IDÔM immobilier vous propose de choisir <font color="82817c">le mandat le mieux adapté à votre projet</font>
                     </p>
                   
                </div>
               
                <div className="col-6 ps-4 pt-3 dv1" style={{borderLeft:"1px 82817c solid"}} >
                    <p>
                        Le mandat home staging<br/><font size="3">
                        qui reste l'option la plus sûre pour une vente efficace de votre bien Sa mise en valeur permettra , à coup sur , une vente rapide à un prix avantageux</font><br/> <br/><font color="82817c">Le mandat classique</font><br/><font size="3" color="82817c">si celui - ci s'avère suffisant dans l'hypothèse où le facteur temps n'est pas une priorité pour vous , et que votre prix de vente se situe dans les prix raisonnables du marché</font>
                     </p>
                   
                     
                </div>
            </div>
        <div className="nav2">
            <ul id="ul-nb2">
                <Link to="/vendeur" ><li  className="act">Le Home stanging</li></Link>
                <Link to="/vendeur/hh"><li>Le mandat Classique</li></Link>
               
            </ul>
        </div>

        <div className="row">
            <div className="col-8">
                <div className="row mt-4 ms-0 h2" style={{width:"95%"}}>
                    <h2>Le Mandat Home stanging ?</h2>
                </div><br/>
                <div className="row  ms-4 " style={{width:"85%"}}>
                    <p ref={componentRef}>
                        
                        Le HOME STAGING est né au USA il y a une dizaine d'année .<br/> Ce Concept fait sa première apparition en France en 2007 .<br/> L'objectif est de vous aider à vendre plus rapidement votre bien immobilierau meilleur prix par sa mise en valeur . <br/><br/><br/>Le HOME STAGING repose sur trois principes fondamentaux très simples :<br/> <b>1 ° / Désencombrer : </b>De nombreux choses qui trouvaient leur juste place selon votre gout , peuvent devenir des obstacles aux regards extérieurs .<br/> <b>2 ° / Dépersonnaliser</b> vendre une maison et y vivre sont deux choses différentes . <br/><b>3 ° / Réorganiser :</b> Création d'ambiance par une configuration de l'espace , remise en état des aspects moins attrayants de votre bien immobilier .<br/><br/> Dans 90 % des cas , les achats immobiliers se font sur un coup de coeur . La décision d'achat d'un acquéreur intervient dans la première minute de la visite . <br/><br/>Le HOME STAGING est souvent le facteur déclenchant . Aussi , mettez toutes les chances de votre côté en présentant votre bien immobilier sous son meilleur jour grâce a notre équipe de home staging .<br/> <br/> Concrètement , nous vous proposons un état des lieux , qui permettra aussi de vérifier l'installation électrique , l'agencement de votre intérieur . Nous travaillerons sur la luminosité des pièces , remplacerons les peintures criardes par des couleurs neutres afin que l'acquereur puisse se projeter dans son futur logement 
                    </p>
                </div>
                <div className="row mt-4 ms-0" style={{width:"85%"}}>
                    <hr/>
                </div>
                <div className="row mt-4 ms-4 ">
                    <div className="col-6">
                            <p>
                                <b>Parlons un peu chiffres .</b><br/> D'après une étude menée par la FNAIM , sur 10.000 agences sondées , on constate que d'une part le délais de vente moyen des appartements qui n'ont pas bénéfi cié du service home staging est de 4 à 6 mois . D'autre part , le taux de négociation varie entre 5 % et 12 % .<br/><br/> Les appartements ou maisons bénéficiant du service home staging voient le delais de vente diminué et passé en moyenne entre 1 à 2 mois , quant au taux de négocia tion il varie entre 0 % et 5 % . Nous mettons à votre disposition un réel service dans le but de vendre au mieux votre bien immobilier .
                            </p>
                    </div>
                    <div className="col-6">
                        <img src="../images/home_stanging_graphique.jpg" width="50%"/>
                    </div>
                </div>
                <div className="row mt-4 ms-4" style={{width:"95%"}}>
                    <ul id="ul-nb11">
                        <Link to="/contact" ><li>Envoyer</li></Link>
                        <Link to="" onClick={handlePrint}><li>Imprimer</li></Link>
                        <Link to="" onClick={()=>{document.body.scrollTop = 0;document.documentElement.scrollTop = 0;}}><li>Haut de page</li></Link>
                   
                    </ul>
                 </div>
            </div>
            
            <div className="col-4">
                <div className="row  p-0 m-0 "  >
                    <img src="../images/home_stanging_photo_1.jpg " height="250px" width="99%" id="image" />
                </div>
                <div className="row p-0 m-0 mt-3"  >
                    <img src="../images/home_stanging_photo_2.jpg " height="250px" width="99%" />
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
        </div>
    </> );
}

export default Vendeur;