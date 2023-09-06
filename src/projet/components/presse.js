import { Link } from "react-router-dom";
import {  useEffect, useMemo, useState } from "react";
import {  useSelector } from "react-redux";
import {useDispatch} from "react-redux"

function Presse() {

    const bd=useSelector(st=>st.presses.presse)
    const [cpt,setCpt] = useState(true)
    const [cpt1,setCpt1] = useState(false)
    const [ct,setct]=useState(1)


    /********************************** */
    const [selectedIndex,setselectedIndex]=useState(0)
    const pages=Math.ceil(bd.length/3)
    const seletedData =useMemo(()=>
        bd.slice(selectedIndex*3,(selectedIndex*3)+3)
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

    /********************************** */
    return ( 
    <>
    <div className="img">
         <img src="http://localhost:3000/images/dar.PNG" />
    </div>
     <div className="row w-50 mt-4 ms-0 h2">
                <h2>une selection d'articles de press</h2>
            </div>

            <div className="row  ms-0 my-2 ">
                <div className="col-md-12 col m-0">
                    
                    {seletedData.map((e,i)=>
                      <div className="row my-4" key={i}>
                            <div className="col-2  p-0 m-0"  >
                                <img src={e.img} height="150px" width="90%" />
                            </div>
                            <div className="col-10 ">
                                <h5>{e.titre}</h5>
                                    {e.description}
                                 <Link to={"/presse/"+e.id}> Lire la suite</Link>
                            </div>
                    
                        </div>
                    )
                  
                    }
                    
                    <div className="row my-4">
                        <div className="col-2   p-0 m-0">
                            <button onClick={()=>handlclickP()} disabled={cpt}>Precedent</button>
                        </div>
                        <div className="col-10 ">
                            <button style={{marginLeft:"90%"}} onClick={()=>handlclickS()} disabled={cpt1}>Suivant</button>
                        </div>
                    </div>
                </div>

                
            </div>  
    </> 
    );
}

export default Presse;



{/* <div className="row my-4">
                        <div className="col-2  p-0 m-0">
                                <img src="images/press_2.jpg" height="150px" width="90%" />
                        </div>
                        <div className="col-10 ">
                            <h5>Paru vendu 16/01/2010</h5>
                            Chapeau redditis aegre ab his impetratum est summa tribuno rum plebis contentione , ut in senatu recitarentur ut vero ex litteris ad senatum referretur . Caesaris consulibus redditis aegre ab his impetratum est summa tribunorum ebis.ferretur . Caesaris consulibus redditis aegre ab his M <NavLink to="/presse/1"> Lire la suite</NavLink>
                        </div>
                    </div>
                    <div className="row my-4">
                        <div className="col-2   p-0 m-0">
                            <img src="images/press_3.jpg" height="150px" width="90%" />
                        </div>
                        <div className="col-10 ">
                            <h5>Le parisien 18/04/2010</h5>
                            Chapeau redditis aegre ab his impetratum est summa tribuno rum plebis contentione , ut in senatu recitarentur ut vero ex litteris ad senatum referretur . Caesaris consulibus redditis aegre ab his impetratum est summa tribunorum ebis.ferretur . Caesaris consulibus redditis aegre ab his M <NavLink to="/presse/1"> Lire la suite</NavLink>
                        </div>
                    </div> */}