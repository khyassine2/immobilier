import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import AppAdmin from "./admin/AppAdmin";
import App from "./projet/App";
import { fetchImo } from "./projet/imobS";
import { fetchPre } from "./projet/presRed";

function App3() {
    const location = useLocation()
    const dispatch=useDispatch()
    
  
    useEffect(()=>{
        dispatch(fetchPre());
        dispatch(fetchImo())

    },[])
   
    return (
    
    <>
            {
                location.pathname.search("/admin/\.")!=-1?<AppAdmin/>:<App/>
            }
    </>


    )  ;
}

export default App3;