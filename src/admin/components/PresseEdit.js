import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  './style2.css'
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import {storage} from './fireclod';
import {  useNavigate, useParams } from 'react-router';
import { putPres } from '../../projet/presRed';


function PresseEdit() {
    const bd=useSelector(st=>st.presses.presse)
    const {code}=useParams()
    
  
    /********************************** */

    
    /******************* state reserverse pour les images******************************/
    const obj = bd.find(t=>t.id==code)
    const [im1,seti1]=useState(obj.img)
    console.log(im1)

    /****************connection avec slice presse*********************************/

    const dispatch=useDispatch();

    /*************** fonction modifier presse **********************************/
    const navigate = useNavigate();

    const send=(e,id,index)=>{
        e.preventDefault();

        let {titre,description,autre}=document.forms[0]
        let obj={ elem:{
            id: id,
            titre: titre.value,
            description:description.value ,
            img:im1,
            autre: autre.value
          } ,index:index}
        dispatch(putPres(obj));
        navigate("/admin/presse")

    }
/*************** fonctions pour importer les images qui doit ajouter **********************************/

    const Fet=(e)=>{
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
                seti1(downloadURL)
            });
          }
        );
        
    }

    
    /********************************** */

  


  
    return ( 
        <div>
            <form >
            
            {
                bd.filter((item)=>item.id==code).map((p,index)=>{

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
                                            { im1 ?
                                            <><span>{p.img}</span>&nbsp;<button onClick={()=>seti1(null)}>Supprimer</button></>:
                                            <input type="file" name="img1" onChange={(e)=>Fet(e.target.files[0])}/>
                                            }
                                        </div>

                                    </div>

                                    <div className="row my-3">
                                        <div className="col-1"><img src={im1} alt='' width="70px" /></div>
                                    </div>

                                    <div className="row ms-4 mb-4" style={{width:"90%"}}>
                                        <div className='col-6'> <h6>  ➤ Autre description</h6></div>
                                        <div className="row" >
                                        <textarea cols="30" rows="10"  name="autre"  className="inpt">{p.autre}</textarea>
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

                  

                        <button onClick={(e)=>send(e,p.id,index)} style={{marginLeft:"95%"}}>Valider</button>
                                
                            
                            </>
                        )}

                )
            }
            </form>
             
        </div>
     );
}

export default PresseEdit;