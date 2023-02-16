import { createEntityAdapter, createSelector } from '@reduxjs/toolkit'
import { apiSlice } from '../api/apiSlice'

const productAdapter = createEntityAdapter()

const initialState = productAdapter.getInitialState()

export const extendedProductApi=apiSlice.injectEndpoints({
    endpoints:builder=>({
        getAllProducts: builder.query({
            query:()=>'/products',
            transformResponse: result =>{
                return productAdapter.setAll(initialState,result.slice(0,20))
            }
        }),
        getCategoryProducts: builder.query({
            query:(id)=>`/categories/${id}/products`,
            transformResponse: result =>{
                return result.slice(0,20)
            }
        }),
    })
})

export const selectProductResult=extendedProductApi.endpoints.getAllProducts.select()

// in order to access the normalized data and generate selectors using them
const selectProductData=createSelector(
    selectProductResult,
    productResult=>productResult.data
)


export const {useGetAllProductsQuery,useGetCategoryProductsQuery}=extendedProductApi

//the selectors only for getAllProducts 
export const{selectAll:selectAllProducts,selectById:selectProductById}=productAdapter.getSelectors(state=>selectProductData(state) ?? initialState)