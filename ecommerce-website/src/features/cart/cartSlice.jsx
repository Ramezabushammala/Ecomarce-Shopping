import { createSlice, createSelector } from "@reduxjs/toolkit";



const initialState={
    
    items:localStorage.getItem('products')?JSON.parse(localStorage.getItem('products')):[],
    // totalPriceWithId:[]
}

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem(state,action){
            
            state.items=[action.payload,...state.items]
            updateLocalStorage(state.items)
        },
        deletItem(state,action){
            state.items=state.items.filter(p=>p.id!==action.payload)
            updateLocalStorage(state.items)
        },
        updateItemQuantity(state,action){
            const {id,quantity} = action.payload
            state.items=state.items.map(p=>p.id!==id?p:{...p,quantity})
            updateLocalStorage(state.items)
        },

        clearTheState:(state)=>{
            state.items=[]
            updateLocalStorage([])
            state.totalPriceWithId=[]
        }   
    }
})


const updateLocalStorage=(data)=>{
    localStorage.setItem("products", JSON.stringify(data));
}



export const {addItem,deletItem,updateItemQuantity,clearTheState}=cartSlice.actions

export const selectItems=state=>state.cart.items

export const selectItemById=createSelector(
    [selectItems,(state,id)=>id],
    (items,id)=>items?.find(item=>item.id===id)
)


export const selectTotalPrice=createSelector(
    selectItems,
    items=>{
        let sum=0
        items.forEach(item=>{
            sum+=item.price*item.quantity
        })
        return sum
    }
)
export const selectItemsLength=createSelector(
    selectItems,
    items=>items.length
)

export default cartSlice.reducer