import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
const initState={
    imob:[
        
        ],
    bienSearch:{surfaceMax:null,surfaceMin:null,prixMin:null,prixMax:null,nb_piece:null,type:null},isLoad:false

    }
/*------------charger------------------*/
export const fetchImo=createAsyncThunk('imobs/fetchImo',async()=>{
    return fetch("http://localhost:8000/imm").then((res)=>res.json())
})

/*------------delete------------------*/
export const deleteImo=createAsyncThunk('imobs/deleteImo',async(id)=>{
    await fetch("http://localhost:8000/imm/"+id,{
        method:'DELETE',
        headers:{
            'Content-Type': 'application/json'
        },
    });
    return id;

})
/*------------ajouter------------------*/
export const insertImo=createAsyncThunk('imobs/insertImo',async(obj)=>{
        
        await fetch("http://localhost:8000/imm",{ 
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },body:JSON.stringify(obj)

    }).then(res=>{return res.json()})
    ;

})
/*------------put------------------*/
export const putImob=createAsyncThunk('imobs/putImob',async(obj)=>{
    const res=await fetch("http://localhost:8000/imm/"+obj.elem.id,{
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
        name:'imobs',
        initialState : initState,
        reducers:{
            searchBien : (state,{payload})=>{
                state.bienSearch = {surfaceMax:payload.surfaceMax
                    ,surfaceMin:payload.surfaceMin,prixMin:payload.prixMin,prixMax:payload.prixMax
                    ,nb_piece:payload.nb_piece,type:payload.type}
        }
        },
        extraReducers:{
            [fetchImo.fulfilled]:(state,action)=>{
                    state.imob=action.payload;
            },
            [deleteImo.fulfilled]:(state,action)=>{
                state.imob=state.imob.filter((i)=>i.id!==action.payload);
            },
           
            [insertImo.fulfilled]:(state,action)=>{
                state.imob.push(action.payload);
            },
            [putImob.fulfilled]:(state,action)=>{

                state.imob.splice(action.payload.index,1,action.payload.elem)

            }
        }
    }
    
)
export default imobS.reducer;
export const {searchBien} = imobS.actions;







