import axios from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  './style2.css'
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import {storage} from './fireclod';
import { insertPres } from '../../projet/presRed';
import { useNavigate } from 'react-router';


function PresseAdd() {

    /******************* state reserverse pour les images******************************/
    const [im1,setim]=useState()
   

    /****************connection avec slice d'immobiler*********************************/

    const bd=useSelector(st=>st.imobs.imob)
    const [cpt,setc]=useState(bd.length)
    const [chbtn,setch]=useState(true)

    const dispatch=useDispatch();

    /*************** fonction d'ajout un immobilier **********************************/

    const send=(e)=>{
        e.preventDefault();
        let {titre,description,autre}=document.forms[0]
        let obj= {
            id: cpt,
            titre: titre.value,
            description:description.value ,
            img:im1,
            autre: autre.value
          } 
        dispatch(insertPres(obj));setc(cpt+1)
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
               setim(downloadURL)
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
            <form onSubmit={(e)=>send(e)}>
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
                                <div className='col'><input type="file" name="img1" onChange={(e)=>Fet(e.target.files[0])}/></div>
                            </div>
                            <div className="row ms-4 mb-4" style={{width:"90%"}}>
                                <div className='col-6'> <h6>  ➤ Autre description</h6></div>
                                <div className="row" >
                                    <textarea cols="30" rows="10"  name="autre"  className="inpt"></textarea>
                                </div>
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
                {chbtn ?
                    <button onClick={(e)=>chs(e)} style={{marginLeft:"95%"}}>Valider</button>:
                    <button onClick={send} style={{marginLeft:"95%"}}>Envoyer</button>

                }            
            </form>    
        </div>
     );
}

export default PresseAdd;