import { Link,NavLink } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
function ChildAcheteur() {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current
      });
    return ( <>
        <div className="img">
            <img src="http://localhost:3000/images/dar.PNG" />
        </div>
        <div className="nav2">
            <ul id="ul-nb2">
                <NavLink to="/acheteur"><li>Annonces immobilieres</li></NavLink>
                <NavLink to=""><li className="act">Chasseur immobilier</li></NavLink>
               
            </ul>
        </div>
        <div className="row">
            <div className="col-5">
                <div className="row mt-4 ms-0 h2" style={{width:"95%"}}>
                    <h2>Chasseur de biens immobiliers</h2>
                </div><br/>
                <div className="row  ms-4 " style={{width:"85%"}}>
                    <p ref={componentRef}>
                        <font size="2"> Notre service « chasseur immobilier » est entièrement dédié aux acheteurs d'un bien immobilier quel que soit le budget . Sur la base d'un mandat de recherche , nous prenons en charge votre projet d'acquisition de votre futur appartement ou de votre future maison . Nous vous aidons à clarifier et définir vos souhaits , et nous vous accompa gnons , étape par étape , jusqu'à sa réalisation .
                        <br/><br/>Notre équipe vous permettra de: <br/><br/>
                        <b><font size="4">Faire l'économie de votre temps :</font></b> notre service « chasseur immobilier » accélère et facilite la réalisation de votre opération immobilière en vous évitant de nombreux déplacements inutiles et des visites stériles <br/><br/>
                        <b><font size="4">Trouvez la bonne affaire: </font></b> 
                        <font size="2">notre connaissance du marché immobilier et la qualité de notre réseau de parte naires vous donnent l'avantage d'avoir accès rapidement aux meilleures opportunités qui , comme vous le savez , sont les plus convoitées .</font>
                         </font>
                    </p>
                </div>
                <div className="row mt-4 ms-0" style={{width:"85%"}}>
                    <hr/>
                </div>
                <div className="row mt-4 ms-4 ">
                    <div className="col">
                            <p>
                                <b> En clair : pour vous , tous les bénéfices sans les inconvénients </b> <br/><br/>
                                <font size="2">Pour en savoir plus sur ce service et connaitre nos tarifs consultez notre rubrique méthodologie et tarif .</font>
                            </p>
                    </div>
                   
                </div>
                <div className="row mt-4 ms-5" style={{width:"95%"}}>
                    <ul id="ul-nb11">
                        <Link to="/contact"><li>Envoyer</li></Link>
                        <Link to="" onClick={handlePrint}><li>Imprimer</li></Link>
                        <Link to="" onClick={()=>{document.body.scrollTop = 0;document.documentElement.scrollTop = 0;}}><li>Haut de page</li></Link>
                   
                    </ul>
                 </div>
            </div>
            <div className="col-7 p-5" style={{background:"#f5f5f5"}}>
                <p>
                    <b><font size="4">Methododlogie et tarifs </font></b><br/><br/>  
                    <font size="2">notre connaissance du marché immobilier et la qualité de notre réseau de parte naires vous donnent l'avantage d'avoir accès          rapidement aux meilleures opportunités qui , comme vous le savez , sont les plus convoitées .</font>
                    Le travail de notre service « chasseur immobilier » s'articule autour de huit prestations conduites par un interlocuteur unique qui vous est entièrement dédié <br/><br/>

                    <b><font size="4">1-Elaboration du cahier des charges </font> </b>
                    <font size="2"> A l'aide d'un questionnaire détaillé votre chasseur immobilier définit avec vous les critères objectifs ( superficie , nombre de pièces , situation géographique , exposition , budget . ) et mbjectifs ( votre façon de vivre , vos sensibilités ... ) de votre projet . Il nous parait indispensable que cette tâche se réalise à votre domicile afin de mieux cemer vos souhaits , vos attentes dans le cadre de votre recherche d'un bien immobilier </font><br/><br/>

                    <b><font size="4"> 3- Prospection :  </font> </b>
                    <font size="2">En respectant le contenu du cahier des charges , votre chasseur immobilier prospecte l'ensemble des offres du marché immobilier , exploite les informations de son réseau , et visite une sélection d'offres</font>  <br/><br/>

                    <b><font size="4"> 4- Compte rendu  </font> </b>
                    <font size="2"> Après chaque visite , votre interlocuteur vous rend compte de ravancée de ces recherches et vous remet un rapport de visite</font><br/><br/>

                    <b><font size="4">5 - Visites :  </font> </b>
                    <font size="2"> Votre chasseur immobilier organise avec vous des visites groupées de biens préalablement sélectionnés   </font><br/><br/>

                    <b><font size="4"> 6- Promesse de vente :   </font> </b>
                    <font size="2"> Vous avez eu un coup de coeur pour l'un des biens visités , nous sommes à vos côtés dans la négociation du prix et in rédaction d'une offre d'achat chiffrée 7- Recherche de financement le cas échéa nt , vous pouvez vous appuyer sur notre réseau de courtiers pour obtenir un financement au meilleur taux . </font><br/><br/>

                    <b><font size="4">7- Recherche de financement :  </font> </b>
                    <font size="2">  le cas échéant , vous pouvez vous appuyer sur notre réseau de courtiers pour obtenir un financement au meilleur taux  </font><br/><br/>

                    <b><font size="4">8- Signature :  </font> </b>
                    <font size="2">  la signature de la promesse de vente ( ou compromis ) , votre chasseur immobilier assure le suivi du dossier chez le notaire et vous accompagne jusqu'à la signature de l'acte authentique .  </font><br/><br/>
                </p>
            </div>
        </div>
        </> );
}

export default ChildAcheteur;