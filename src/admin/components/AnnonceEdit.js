import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { insertImo, putImob } from '../../projet/imobS';
import  './style2.css'
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import {storage} from './fireclod';
import { useLocation, useNavigate, useParams } from 'react-router';


function AnnoncesEdit() {
    const bd=useSelector(st=>st.imobs.imob)
    const {id}=useParams()
    
  
    /********************************** */

    
    /******************* state reserverse pour les images******************************/
    const [im1,seti1]=useState(true)
    const [im2,seti2]=useState(true)
    const [im3,seti3]=useState(true)
    const [im4,seti4]=useState(true)
    const [im5,seti5]=useState(true)

    /****************connection avec slice d'immobiler*********************************/

    const [cpt,setc]=useState(bd.length)
    const dispatch=useDispatch();

    


/*********** create table of images for sending*********************** */
      const obj = bd.find(t=>t.id==id)
      const [imgTb,setImg]=useState(obj.tabImg)
    console.log(imgTb)
  
  /********************************** */

 const supImg=(n)=>{
      const tb =[...imgTb];
      tb.splice(imgTb.indexOf(n),1,"")
      setImg(tb)
 }

/*************** fonctions pour importer les images qui doit ajouter **********************************/

    const Fet=(e,i)=>{
        let file =e
        const tb =[...imgTb];

        if (!file) return;
        const sotrageRef = ref(storage, `files/${file.name}`);
        console.log(sotrageRef)
    
        const uploadTask = uploadBytesResumable(sotrageRef, file);
    
        uploadTask.on(
            
          "state_changed",
          (snapshot) => {
            const prog = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
          },
          (error) => console.log(error),
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                i===0?tb.splice(i,1,downloadURL):
                (i===1?tb.splice(i,1,downloadURL):
                (i===2?tb.splice(i,1,downloadURL):
                (i===3?tb.splice(i,1,downloadURL)&& seti4(true):
                (i=4?tb.splice(i,1,downloadURL):""))))
                setImg(tb)
            });
          }
        );
        
    }
  
    /*************** fonction modifier un immobilier **********************************/
    const navigate = useNavigate();

    const send=(e,id,index)=>{
        e.preventDefault();
        let {titre,description,Prix,Type,Nombre,Surface,Charges,Taxe,TaxeF,Etage,Chambre,Salle,Toilette,Exposition,Parking,Ascenseur,Immeuble,Balcon,Terrasse,Date
        }=document.forms[0]
        let obj={elem: {
            id: id,
            titre: titre.value,
            description:description.value ,
            img:imgTb[0],
            tabImg: imgTb,
            comment: "bien",
            detail: "une maison tres jolie et bon emplacement",
            Prix:Prix.value ,
            Type:Type.value ,
            Nombre_de_pieces:Nombre.value ,
            Surface: Surface.value,
            Charges: Charges.value,
            Taxe_dhabitation:Taxe.value,
            Taxe:TaxeF.value ,
            Etage:Etage.value ,
            Chambre:Chambre.value ,
            Salle:Salle.value ,
            Toilette:Toilette.value,
            Exposition: Exposition.value,
            Parking: Parking.value,
            Ascenseur:Ascenseur.value,
            Immeuble:Immeuble.value,
            Balcon:Balcon.value ,
            Terrasse: Terrasse.value,
            Date: Date.value
          },index:index}
        dispatch(putImob(obj));
        navigate("/admin/annonces")

    }

  
    return ( 
        <div>
            <form>
            
            {
                bd.filter((item)=>item.id==id).map((p,index)=>{

                        return(
                            <>
                    <div className="row ms-4 mt-5 nav2">
                        <ul id="ul-nb2">
                            <li>Modification</li>            
                        </ul>
                    </div> 
                    <div className="row">
                        <div className="row my-3">
                            <h6>  ➤ Titre</h6>
                        </div>
                        <div className="row ms-4" style={{width:"20%"}}>
                            <div className="col-7">
                                <input type="text"  className="inpt" name="titre" defaultValue={p.titre}  />
                            </div>
                            <div className="col">
                                <button disabled={false} style={{width:"90%",marginLeft:"100%"}}>Modifier</button>
                            </div>
                        </div>
                    </div>
                    <div className="row my-4">
                        <div className="col-6">
                            <div className="row my-3">
                                <h6>  ➤ Photos</h6>
                            </div>
                            <div className='row'>
                                <div className="col-12">
                                    <div className="row ms-4 mb-4" style={{width:"90%"}}>
                                        <div className='col-3'> image 1:</div>
                                        <div className='col'>
                                            { imgTb[0]!=""?<><span>{imgTb[0]}</span>&nbsp;<button onClick={()=>{supImg(imgTb[0])}}>Supprimer</button></>:
                                            <input type="file" name="img1"  onChange={(e)=>Fet(e.target.files[0],0)}/>
                                            }    
                                        </div>
                                    </div>
                                    <div className="row ms-4 mb-4" style={{width:"90%"}}>
                                        <div className='col-3'> image 2:</div>
                                        <div className='col'>
                                        { imgTb[1]!="" ?<><span>{imgTb[1]}</span>&nbsp;<button onClick={()=>{supImg(imgTb[1])}}>Supprimer</button></>:
                                             <input type="file" name="img2"  onChange={(e)=>Fet(e.target.files[0],1)}/> }  
                                        </div>
                                    </div>
                                    <div className="row ms-4 mb-4" style={{width:"90%"}}>
                                        <div className='col-3'> image 3:</div>
                                        <div className='col'>
                                        { imgTb[2]!=""?
                                            <><span>{imgTb[2]}</span>&nbsp;<button onClick={()=>{supImg(imgTb[2])}}>Supprimer</button></>:
                                            <input type="file" name="img3"  onChange={(e)=>Fet(e.target.files[0],2)}/> }  

                                        </div>
                                    </div>
                                    <div className="row ms-4 mb-4" style={{width:"90%"}}>
                                        <div className='col-3'> image 4:</div>
                                        <div className='col'>
                                        {imgTb[3]!=""?
                                            <><span>{imgTb[3]}</span>&nbsp;<button onClick={()=>{supImg(imgTb[3])}}>Supprimer</button></>:
                                            <input type="file" name="img4"  onChange={(e)=>Fet(e.target.files[0],3)}/> } 
                                            
                                        </div>
                                    </div>
                                    <div className="row ms-4 mb-4" style={{width:"90%"}}>
                                        <div className='col-3'> image 5:</div>
                                        <div className='col'>
                                        {imgTb[4]!=""?
                                            <><span>{imgTb[4]}</span>&nbsp;<button onClick={()=>{supImg(imgTb[4])}}>Supprimer</button></>:
                                            <input type="file" name="img5"  onChange={(e)=>Fet(e.target.files[0],4)}/> } 

                                            
                                        </div>
                                    </div>
                                </div>

                            
                            </div>
                        </div>

                            <div className="col"></div>
                        <div className="col-5" >
                                <div className="row my-3">
                                    <h6>  ➤ Description</h6>
                                </div>
                                <div className="row" >
                                    <textarea cols="30" rows="10"  name="description" defaultValue={p.description} className="inpt"></textarea>
                                </div>
                        </div> 
                    </div>

                    <div className="row my-3">
                       
                            {
                                
                                imgTb.map((u,i)=>
                                    <div className="col-1" key={i}><img src={u}   width="50px" height="47.5px" alt='' /></div>
                                
                                )
                            }
                    </div>

                    <div className="row my-3">
                            <h6>  ➤ Récapitulatif</h6>
                    </div>
                    <div className="row m-0 mb-3">
                            <div className="col me-3" style={{background:"#f5f5f5"}}>
                                <div className="row m-4">
                                        <b> Prix:&nbsp;&nbsp;<input type="text" defaultValue={p.Prix}   name="Prix" style={{border:"inset"}}/> </b>  <br/><br/>
                                        <b>Type:&nbsp;&nbsp;<input type="text" defaultValue={p.Type}   name="Type" style={{border:"inset"}}/></b>   <br/><br/>
                                        <b>Nombre de pieces:&nbsp;&nbsp;<input type="text" defaultValue={p.Nombre_de_pieces}  name="Nombre" style={{border:"inset"}}/></b> <br/><br/>
                                        <b>Surface: &nbsp;&nbsp;<input type="text" defaultValue={p.Surface}  name="Surface" style={{border:"inset"}}/> </b><br/><br/>
                                        <b>Charges: &nbsp;&nbsp;<input type="text" defaultValue={p.Charges}  name="Charges" style={{border:"inset"}}/></b>   <br/><br/>
                                        <b>Taxe d"habitation:&nbsp;&nbsp;<input type="text" defaultValue={p.Taxe_dhabitation}  name="Taxe" style={{border:"inset"}}/></b>
                                </div>
                            </div>
                            <div className="col me-3" style={{background:"#f5f5f5"}}>
                                <div className="row m-4">
                                        <b> Taxe fonciere:&nbsp;&nbsp;<input type="text" defaultValue={p.Taxe}   name="TaxeF" style={{border:"inset"}}/></b>    <br/><br/>
                                        <b>Etage:&nbsp;&nbsp;<input type="text" defaultValue={p.Etage}  name="Etage" style={{border:"inset"}}/></b>     <br/><br/>
                                        <b>Chambre:&nbsp;&nbsp;<input type="text" defaultValue={p.Chambre}  name="Chambre" style={{border:"inset"}}/></b>  <br/><br/>
                                        <b>Salle de bain:&nbsp;&nbsp;<input type="text" defaultValue={p.Salle}  name="Salle" style={{border:"inset"}}/></b>    <br/><br/>
                                        <b>Toilette:&nbsp;&nbsp;<input type="text" defaultValue={p.Toilette}  name="Toilette" style={{border:"inset"}}/></b>    <br/><br/>
                                        <b>Exposition:&nbsp;&nbsp;<input type="text" defaultValue={p.Exposition}  name="Exposition" style={{border:"inset"}}/></b>
                                </div>
                            </div>
                            <div className="col " style={{background:"#f5f5f5"}}>
                                <div className="row m-4">
                                        <b> Parking:&nbsp;&nbsp;<input type="text" defaultValue={p.Parking}  name="Parking" style={{border:"inset"}}/></b>    <br/><br/>
                                        <b>Ascenseur:&nbsp;&nbsp;<input type="text" defaultValue={p.Ascenseur}  name="Ascenseur" style={{border:"inset"}}/></b>     <br/><br/>
                                        <b>Immeuble / étages:&nbsp;&nbsp;<input type="text"  name="Immeuble" style={{border:"inset"}}/></b>  <br/><br/>
                                        <b>Balcon:&nbsp;&nbsp;<input type="text" defaultValue={p.Immeuble}  name="Balcon" style={{border:"inset"}}/></b>    <br/><br/>
                                        <b>Terrasse:&nbsp;&nbsp;<input type="text" defaultValue={p.Terrasse}  name="Terrasse" style={{border:"inset"}}/></b>    <br/><br/>
                                        <b>Date de création:&nbsp;&nbsp;<input type="text" defaultValue={p.Date}  name="Date" style={{border:"inset"}}/></b>
                                </div>
                                
                            </div>
                    </div>
                        <button onClick={(e)=>send(e,p.id,index)} style={{marginLeft:"95%"}}>Valider</button>
                                
                            
                            </>
                        )}

                )
            }
             </form>
        </div>
     );
}

export default AnnoncesEdit;