import { createSlice } from "@reduxjs/toolkit"


const initialState={
    search:''
}


export const productSlice=createSlice({
    name:'product',
    initialState,
    reducers:{
        setSearchValue:(state,action)=>{state.search=action.payload}
    }
})


export const selectSearchValue=state=>state.product.search


export const {setSearchValue} = productSlice.actions

export default productSlice.reducer