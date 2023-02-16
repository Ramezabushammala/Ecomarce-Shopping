import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useGetCategoryProductsQuery,selectAllProducts } from '../products/productApi'

function CategoryPage() {
    const {id}=useParams()
    const {data:categoryProducts,isSuccess,isLoading,isError,error}=useGetCategoryProductsQuery(id)
    return (
    <div>{`Category Id: ${id}`}</div>
  )
}

export default CategoryPage