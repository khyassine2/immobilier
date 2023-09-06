import { useParams } from "react-router";
import {  useSelector } from "react-redux";
import { useState } from "react";
function AcheteurDetails() {
    const [idImg,setIdImg] = useState(null)
    const {code}=useParams()
    const bd=useSelector(st=>st.imobs.imob)
    const changeImg = (d,f)=>{
        const zz = document.getElementsByClassName("rr")
        setIdImg(f);
        for (let i = 0; i < zz.length; i++) {
            zz[i].className="rr"
            if(zz[i]!=d.target){
                zz[i].style.border=""
            }
            if (zz[i]==d.target) {
                zz[i].style.border="4px solid green";
                zz[i].style.padding="0px";
                zz[i].style.width="75%";
                zz[i].style.marginLeft="13px";
            }
        }
    }
    return (

            
            <>
            { bd.filter(e=>e.id==code).map((j,i)=>
                        {return(<>                        

                        
            <div className="nav2">
                <ul id="ul-nb2">
                    <li>{j.titre}</li>            
                </ul>
            </div>

        <div className="row m-0">
            <div className="col-6 ">
                <div className="row my-3">
                    <h6>  ➤ Photos</h6>
                </div>
                

              
                <div className="row my-4">
                    <div className="col-9">
                        {idImg==null?
                        <img src={j.img} width="100%" height="450px" />:<img src={idImg} width="100%" height="450px" />
                        }
                    </div>
                    <div className="col-3">
                        {
                            j.tabImg.map((y)=> 
                                <div className="row w-75 mb-1">
                                    <img className="rr" src={y} onClick={(e)=>{changeImg(e,y)}}/>
                                </div> 
                            )
                        }
                    </div>
                </div>
            </div>
            
            <div className="col-6">
                <div className="row my-4">
                    <h6>  ➤ Description</h6>
                </div>
                <div className="row">
                    <p style={{textAlign:"justify"}}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <font size="3">{j.description}<br/> <br/>

                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {j.description}</font>
                    </p>
                    <p>
                        Commentaire: {j.comment}
                    </p>
                    <p>
                        Detail: {j.detail}
                    </p>
                </div>
            </div>
            <div className="row my-4">
                    <h6>  ➤ Récapitulatif</h6>
            </div>

            <div className="row m-0 mb-3">
                    <div className="col me-3" style={{background:"#f5f5f5"}}>
                        <div className="row m-4">
                                <b> Prix:{j.Prix} </b>  <br/><br/>
                                <b>Type:{j.Type}</b>   <br/><br/>
                                <b>Nombre de pieces:{j.Nombre_de_pieces}</b> <br/><br/>
                                <b>Surface:  {j.Surface} </b><br/><br/>
                                <b>Charges: {j.Charges}</b>   <br/><br/>
                                <b>Taxe d"habitation:{j.Taxe_dhabitation}</b>
                        </div>
                    </div>
                    <div className="col me-3" style={{background:"#f5f5f5"}}>
                        <div className="row m-4">
                                <b> Taxe fonciere:{j.Taxe}</b>    <br/><br/>
                                <b>Etage:{j.Etage}</b>     <br/><br/>
                                <b>Chambre:{j.Chambre}</b>  <br/><br/>
                                <b>Salle de bain:{j.Salle}</b>    <br/><br/>
                                <b>Toilette:{j.Toilette}</b>    <br/><br/>
                                <b>Exposition:{j.Exposition}</b>
                        </div>
                    </div>
                    <div className="col " style={{background:"#f5f5f5"}}>
                        <div className="row m-4">
                                <b> Parking:{j.Parking}</b>    <br/><br/>
                                <b>Ascenseur:{j.Ascenseur}</b>     <br/><br/>
                                <b>Immeuble / étages:{j.Immeuble}</b>  <br/><br/>
                                <b>Balcon:{j.Balcon}</b>    <br/><br/>
                                <b>Terrasse:{j.Terrasse}</b>    <br/><br/>
                                <b>Date de création:{j.Date}</b>
                        </div>
                        
                    </div>
            </div>
        </div>
                        
   </>)})}
          
            
    </> );


     
}

export default AcheteurDetails;