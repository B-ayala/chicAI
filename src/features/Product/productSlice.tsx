import { createSlice } from "@reduxjs/toolkit";
import { featuredProducts } from "../../pages/Products/mockData";


const datos = featuredProducts

type sliceType = {
    value:object[]
}

const initialState:sliceType = {
    value:[datos] //duda con este tipado 
}

const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        getProducts:(state,{payload})=>{
            
            
            state.value["0"] = payload
            
        }

    }



})

export const {getProducts} = productSlice.actions
export default productSlice.reducer