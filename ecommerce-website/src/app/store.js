import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'

import {apiSlice} from '../features/api/apiSlice' 
import productReducer from '../features/products/productSlice'
import cartReducer from '../features/cart/cartSlice'


export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]:apiSlice.reducer,
    'product':productReducer,
    'cart':cartReducer,
    
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})