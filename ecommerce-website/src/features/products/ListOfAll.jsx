import React from 'react'
import { useSelector } from 'react-redux'
import ProductSkeleton from '../../components/Skeleton/ProductSkeleton'
import { selectAllProducts, useGetAllProductsQuery } from './productApi'
import ProductCard from './ProductCard'


const ListOfAll = () => {
    const {isLoading,isSuccess,isError,error} = useGetAllProductsQuery()
    const products=useSelector(selectAllProducts)
    
    let content=''
        if(isLoading){
        content=<ProductSkeleton/>
        }else if(isError){
        
        content=<p className='text-center p-5'>{error?.data?.message||'error'}</p>
        }else if(isSuccess&&products?.length===0){
        content=<p className='text-center p-5'>No Products To Show.</p>
        }else{
        content=<div className='flex flex-wrap justify-evenly gap-8 pb-[50px] pt-[20px]'>{products?.map?.(p=><ProductCard key={p.id} {...p}/>)}</div>
        
        }
    return (
        <div className='containerr my-[50px]'>
            <h1 className='font-bold text-[26px] text-first tracking-[1px] uppercase py-[30px] '>OUR PRODUCTS</h1>
            {content}
        </div>
  )
}

export default ListOfAll