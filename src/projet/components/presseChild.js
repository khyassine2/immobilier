import { useParams } from "react-router";
import {  useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { fetchImo } from "../imobS";

function ChildPresse() {
    const {code}=useParams()
    const bd=useSelector(st=>st.presses.presse)
    const pages=bd.length
    const [cpt,setCpt] = useState(true)
    const [id,setId] = useState(code)
    const [cpt1,setCpt1] = useState(false)
    const [ct,setct]=useState(1)

  
    const handlclickS = ()=>{
        
        if (id>=pages-1 ) {
            setCpt1(true)
        }
        setId(Number(id)+1) 
        setCpt(false)

   }
   const handlclickP = ()=>{
    

    if (id<=2 ) {
        setCpt(true)
    }
    setId(Number(id)-1) 
    setCpt1(false)
   }
    return ( 
        <>
        <div className="img">
         <img src="http://localhost:3000/images/dar.PNG" />
        </div>
        <center className="h2ch">
                <h2 align="center">Titre de l'article</h2>
            </center>

            <div className="row  ms-0 my-5 ">
                    { bd.filter(e=>e.id==id).map(j=>
                        {return(<>
                        <div className="col-3  p-0 m-0 ">
                            <img src={j.img} height="400px" width="80%" />
                        </div>
                        <div className="col-9 ">
                            <h5>{j.titre}</h5>
                            <input type="checkbox" id="check" />
                                {j.description}
                            <p className="content">{j.autre} </p>
                            <label for="check" id='ggg'> Lire la suite</label><br/><br/>
                            article paru {j.titre} <a href="">www.teparisien.fr</a>
                        </div>
                        </>
                    )}
                    
                    )
                       
                    }

                
            </div>
            <div className="row my-4 ms-0">
                <div className="col-2   p-0 m-0">
                    <button onClick={()=>handlclickP()} disabled={cpt}>Precedent</button>
                </div>
                <div className="col-10 ">
                    <button style={{marginLeft:"92%"}} onClick={()=>handlclickS()} disabled={cpt1}>Suivant</button>
                </div>
            </div>
        </>
     );
}

export default ChildPresse;