import { useSelector } from 'react-redux'
import ProductSkeleton from '../../components/Skeleton/ProductSkeleton.jsx'
import { selectCategoryById } from '../categories/categoryApi.js'
import {useGetCategoryProductsQuery} from './productApi.js'
import ProductList from './ProductList.jsx'

const ListByCategory = ({categoryId}) => {
    
    const category=useSelector(state=>selectCategoryById(state,categoryId))
    const categoryName=category?.name||'loading..'
    const {data:products,isLoading,isSuccess,isError,error} = useGetCategoryProductsQuery(categoryId)
    
    let content=''
        if(isLoading){
        content=<ProductSkeleton/>
        }else if(isError){
        content=<p className='text-center p-5'>{error?.data?.message||'error'}</p>
        }else if(isSuccess&&products?.length===0){
        content=<p className='text-center p-5'>No Products To Show.</p>
        }else{
        content=<ProductList products={products}/>
        
        }
    return (
        <div className='containerr my-[50px]'>
            <h1 className='font-bold text-[26px] text-first tracking-[1px] uppercase py-[30px] '>{categoryName}</h1>
            {content}
        </div>
  )
}

export default ListByCategory