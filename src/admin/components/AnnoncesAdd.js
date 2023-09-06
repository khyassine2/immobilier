import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImo, insertImo } from '../../projet/imobS';
import  './style2.css'
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import {storage} from './fireclod';


function AnnoncesAdd() {

    /******************* state reserverse pour les images******************************/
    const [im1,seti1]=useState()
    const [im2,seti2]=useState()
    const [im3,seti3]=useState()
    const [im4,seti4]=useState()
    const [im5,seti5]=useState()

    /****************connection avec slice d'immobiler*********************************/

    const bd=useSelector(st=>st.imobs.imob)
    const [cpt,setc]=useState(bd.length)
    const [chbtn,setch]=useState(true)

    const dispatch=useDispatch();

    /*************** fonction d'ajout un immobilier **********************************/
    const send=(e)=>{
        e.preventDefault();
        let {titre,description,Prix,Type,Nombre,Surface,Charges,Taxe,TaxeF,Etage,Chambre,Salle,Toilette,Exposition,Parking,Ascenseur,Immeuble,Balcon,Terrasse,Date
        }=document.forms[0]
        let obj= {
            id: cpt,
            titre: titre.value,
            description:description.value ,
            img:im1,
            tabImg: [im1,im2,im3,im4,im5],
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
          } 
        dispatch(insertImo(obj));
        setc(cpt+1);
    }
/*************** fonctions pour importer les images qui doit ajouter **********************************/

    const Fet=(e,i)=>{
        let file =e
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
                i===1?seti1(downloadURL):(i===2?seti2(downloadURL):(i===3?seti3(downloadURL):(i===4?seti4(downloadURL):(i=5?seti5(downloadURL):""))))
            });
          }
        );
        
    }

    const chs=(e)=>{
        e.preventDefault();
        if(window.confirm("are you sure all informations are true ?")){
            send(e);setch(false)
        }
    }


  
    return ( 
        <div>
            
            <form >
             <div className="row ms-4 mt-5 nav2">
                <ul id="ul-nb2">
                    <li>Création</li>            
                </ul>
            </div> 
            <div className="row">
                 <div className="row my-3">
                    <h6>  ➤ Titre</h6>
                </div>
                <div className="row ms-4" style={{width:"20%"}}>
                    <input type="text" name="titre" className="inpt" />
                </div>
            </div>
            <div className="row my-4">
                <div className="col-5">
                    <div className="row my-3">
                        <h6>  ➤ Photos</h6>
                    </div>
                    <div className='row'>
                        <div className="col-12">
                            <div className="row ms-4 mb-4" style={{width:"90%"}}>
                                <div className='col-3'> image 1:</div>
                                <div className='col'><input type="file" name="img1" onChange={(e)=>Fet(e.target.files[0],1)}/></div>
                            </div>
                            <div className="row ms-4 mb-4" style={{width:"90%"}}>
                                <div className='col-3'> image 2:</div>
                                <div className='col'><input type="file" name="img2" onChange={(e)=>Fet(e.target.files[0],2)}/></div>
                            </div>
                            <div className="row ms-4 mb-4" style={{width:"90%"}}>
                                <div className='col-3'> image 3:</div>
                                <div className='col'><input type="file" name="img3" onChange={(e)=>Fet(e.target.files[0],3)}/></div>
                            </div>
                            <div className="row ms-4 mb-4" style={{width:"90%"}}>
                                <div className='col-3'> image 4:</div>
                                <div className='col'><input type="file" name="img4" onChange={(e)=>Fet(e.target.files[0],4)}/></div>
                            </div>
                            <div className="row ms-4 mb-4" style={{width:"90%"}}>
                                <div className='col-3'> image 5:</div>
                                <div className='col'><input type="file" name="img5" onChange={(e)=>Fet(e.target.files[0],5)}/></div>
                            </div>
                        </div>

                    
                    </div>
                </div>

                <div className='col'></div>

                <div className="col-6" >
                        <div className="row my-3">
                             <h6>  ➤ Description</h6>
                        </div>
                        <div className="row" >
                            <textarea cols="30" rows="10"  name="description"  className="inpt"></textarea>

                        </div>
                </div> 
            </div>

            <div className="row my-3">
                    <h6>  ➤ Récapitulatif</h6>
            </div>
            {/* Prix,Type,Nombre,Surface,Charges,Taxe,TaxeF,Etage,Chambre,Salle,Toilette,Exposition,Parking,Ascenseur,Immeuble,Balcon,Terrasse,Date */}
            <div className="row m-0 mb-3">
                    <div className="col me-3" style={{background:"#f5f5f5"}}>
                        <div className="row m-4">
                                <b> Prix:&nbsp;&nbsp;<input type="text"  name="Prix" style={{border:"inset"}}/> </b>  <br/><br/>
                                <b>Type:&nbsp;&nbsp;<input type="text"  name="Type" style={{border:"inset"}}/></b>   <br/><br/>
                                <b>Nombre de pieces:&nbsp;&nbsp;<input type="text"  name="Nombre" style={{border:"inset"}}/></b> <br/><br/>
                                <b>Surface: &nbsp;&nbsp;<input type="text"  name="Surface" style={{border:"inset"}}/> </b><br/><br/>
                                <b>Charges: &nbsp;&nbsp;<input type="text"  name="Charges" style={{border:"inset"}}/></b>   <br/><br/>
                                <b>Taxe d"habitation:&nbsp;&nbsp;<input type="text"  name="Taxe" style={{border:"inset"}}/></b>
                        </div>
                    </div>
                    <div className="col me-3" style={{background:"#f5f5f5"}}>
                        <div className="row m-4">
                                <b> Taxe fonciere:&nbsp;&nbsp;<input type="text"  name="TaxeF" style={{border:"inset"}}/></b>    <br/><br/>
                                <b>Etage:&nbsp;&nbsp;<input type="text"  name="Etage" style={{border:"inset"}}/></b>     <br/><br/>
                                <b>Chambre:&nbsp;&nbsp;<input type="text"  name="Chambre" style={{border:"inset"}}/></b>  <br/><br/>
                                <b>Salle de bain:&nbsp;&nbsp;<input type="text"  name="Salle" style={{border:"inset"}}/></b>    <br/><br/>
                                <b>Toilette:&nbsp;&nbsp;<input type="text"  name="Toilette" style={{border:"inset"}}/></b>    <br/><br/>
                                <b>Exposition:&nbsp;&nbsp;<input type="text"  name="Exposition" style={{border:"inset"}}/></b>
                        </div>
                    </div>
                    <div className="col " style={{background:"#f5f5f5"}}>
                        <div className="row m-4">
                                <b> Parking:&nbsp;&nbsp;<input type="text"  name="Parking" style={{border:"inset"}}/></b>    <br/><br/>
                                <b>Ascenseur:&nbsp;&nbsp;<input type="text"  name="Ascenseur" style={{border:"inset"}}/></b>     <br/><br/>
                                <b>Immeuble / étages:&nbsp;&nbsp;<input type="text"  name="Immeuble" style={{border:"inset"}}/></b>  <br/><br/>
                                <b>Balcon:&nbsp;&nbsp;<input type="text"  name="Balcon" style={{border:"inset"}}/></b>    <br/><br/>
                                <b>Terrasse:&nbsp;&nbsp;<input type="text"  name="Terrasse" style={{border:"inset"}}/></b>    <br/><br/>
                                <b>Date de création:&nbsp;&nbsp;<input type="text"  name="Date" style={{border:"inset"}}/></b>
                        </div>
                        
                    </div>
            </div>
                {chbtn ?
                    <button onClick={(e)=>chs(e)} style={{marginLeft:"95%"}}>Valider</button>:
                    <button onClick={send} style={{marginLeft:"95%"}}>Envoyer</button>

                }
            </form>    
        </div>
     );
}

export default AnnoncesAdd;