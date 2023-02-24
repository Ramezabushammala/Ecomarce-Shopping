import { createEntityAdapter, createSelector } from '@reduxjs/toolkit'
import { apiSlice } from '../api/apiSlice'

const productAdapter = createEntityAdapter({
    selectId:product=>product.id
})


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
            //the path will change when using your api
            query:(id)=>`/categories/${id}/products`,
            transformResponse: result =>{
                
                return productAdapter.setAll(initialState,result.slice(0,20))
                
            }
        }),
        // searchForProduct: builder.query({
        //     query:(searchValue)=>`/products?q=${searchValue}`,
        //     transformResponse: result =>{
        //         return result.slice(0,20)
        //     }
        // }),
        
        //will change
        searchForProduct: builder.query({
            query:(searchValue)=>'/products',
            transformResponse: (result,meta,arg) =>{
                    const searchValue=arg
                    const data=search(result,searchValue)
                    return productAdapter.setAll(initialState,data)
                
            }
        }),
        getProductById: builder.query({
            query:(productId)=>`/products/${productId}`,
            transformResponse: (product) =>{
                return productAdapter.setOne(initialState,product)
        }
        }),
    })
})


// search method
const search=(data,value)=>{
    const v=value.toString().toLowerCase()
    return data?.filter(item=>{
        if(item.title.toLowerCase().includes(v)||item.description.toLowerCase().includes(v)||item.category.name.toLowerCase().includes(v)){
            return true
        }
        return false
    }) || []
}


export const selectProductResult=extendedProductApi.endpoints.getAllProducts.select()

// export const selectCategoryProductsResult=extendedProductApi.endpoints.getCategoryProducts.select()


// in order to access the normalized data and generate selectors using them
const selectProductData=createSelector(
    selectProductResult,
    productResult=>productResult.data
)

// const selectCategoryProductsData=createSelector(
//     selectCategoryProductsResult,
//     categoryProductsResult=>categoryProductsResult.data
// )





//the selectors only for getAllProducts 
export const{selectAll:selectAllProducts,selectById:selectProductById}=productAdapter.getSelectors(state=>selectProductData(state) ?? initialState)

// the selectors only for getCategoryProducts 
// export const{selectAll:selectAllCategoryProducts,selectById:selectCategoryProductById}=productAdapter.getSelectors(state=>selectCategoryProductsData(state) ?? initialState)



export const {useGetAllProductsQuery,useGetCategoryProductsQuery,useSearchForProductQuery,useGetProductByIdQuery}=extendedProductApi