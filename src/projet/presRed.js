import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initState={
    presse:[
        
    ]   
}
/*------------charger------------------*/
export const fetchPre=createAsyncThunk('presses/fetchPre',()=>{
    return axios.get("http://localhost:8001/pp").then((res)=>res.data)
})
/*------------delete------------------*/
export const deletePre=createAsyncThunk('presses/deletePre',
    async (id)=>{
        await fetch("http://localhost:8001/pp/"+id,{
            method:'DELETE',
            headers:{
            'Content-Type': 'application/json'
        },
    });
    return id;

})
/*------------ajouter------------------*/
export const insertPres=createAsyncThunk('presses/insertImo',async(obj)=>{
    const res=await fetch("http://localhost:8001/pp",{
        method:'POST',
       body:JSON.stringify(obj),
       headers:{
        'Content-Type': 'application/json'
    },
    });
    const daa=await res.json();
    return daa;

})
/*------------put------------------*/
export const putPres=createAsyncThunk('presses/putPres',async(obj)=>{
    const res=await fetch("http://localhost:8001/pp/"+obj.elem.id,{
        method:'PUT',
       body:JSON.stringify(obj.elem),
       headers:{
        'Content-Type': 'application/json'
    },
    });
    const daa=await res.json();
    return daa;


})

/*------------------------------*/
const imobS=createSlice(
    {  
        name:'presses',
        initialState : initState,
        reducers:{
            
        },
       
        extraReducers:{
            [fetchPre.fulfilled]:(state,action)=>{
                    state.presse=action.payload;
            },
            [deletePre.fulfilled]:(state,action)=>{
                state.presse=state.presse.filter((i)=>i.id!==action.payload);
        },
            [insertPres.fulfilled]:(state,action)=>{
                state.presse.push(action.payload);
            },
            [putPres.fulfilled]:(state,action)=>{

                state.presse.splice(action.payload.index,1,action.payload.elem)

            }
        }
    }
)
export default imobS.reducer;





