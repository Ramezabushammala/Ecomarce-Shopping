

//needs to edit
import {useSearchForProductQuery} from './productApi'
import { useSearchParams } from 'react-router-dom'
import ProductSkeleton from '../../components/Skeleton/ProductSkeleton'

import ProductList from './ProductList'

const SearchProduct = () => {
  

  const [searchParams]=useSearchParams()
  const searchValue=searchParams?.get('searchValue')|| ''
    
    const {data:products,isError,error,isSuccess,isLoading}=useSearchForProductQuery(searchValue)
    
    if(!searchValue){
      return(
        <div className="flex justify-center items-center p-3">
          <p className="text-2xl font-semibold">Search For Something.</p>
        </div>
    )
    
  }

    let content=''
    if(isLoading){
      content=<ProductSkeleton/>
    }else if(isError){
      content=<p className='text-center p-5'>{error.data.message}</p>
    }else if(isSuccess&&products?.length===0){
      content=<p className='text-center p-5'>No Products To Show.</p>
    }else{
      content=<ProductList products={products}/>
      
    }

  return (
    <div className='containerr'>{content}</div>
  )
}

export default SearchProduct