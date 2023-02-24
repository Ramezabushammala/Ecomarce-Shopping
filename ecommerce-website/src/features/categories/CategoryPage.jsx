import { useParams } from 'react-router-dom'
import { useGetCategoryProductsQuery } from '../products/productApi'
import {selectCategoryById} from './categoryApi'

import ProductList from '../products/ProductList'
import { useSelector } from 'react-redux'
import ProductSkeleton from '../../components/Skeleton/ProductSkeleton'

function CategoryPage() {
    const {id}=useParams()
    const {data:categoryProducts,isSuccess,isLoading,isError,error}=useGetCategoryProductsQuery(id)
    const category=useSelector(state=>selectCategoryById(state,+id))
    const name=category?.name || 'Loading..'
    

    let content=''
    if(isLoading){
      content=<ProductSkeleton/>
    }else if(isError){
      content=<p className='text-center p-5'>{error.data.message}</p>
    }else if(isSuccess&&categoryProducts?.ids?.length===0){
      content=<p className='text-center p-5'>No Products To Show.</p>
    }else{
      content=<ProductList products={categoryProducts}/>
      
    }

    return (
    <div className='containerr pb-[40px]'>
        <h3 className='font-bold text-[26px] text-first tracking-[1px] uppercase my-[30px]'>{name}</h3>
        {content}
    </div>
  )
}

export default CategoryPage