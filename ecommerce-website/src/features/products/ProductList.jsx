
import ProductCard from './ProductCard'

function ProductList({products}) {
  const { ids, entities }=products
  const list=ids?.map?.(id=><ProductCard key={id} {...entities[id]}/>)||'No Products To Show'
  
  return (
    <div className='flex flex-wrap justify-evenly gap-8 pb-[50px] pt-[20px]'>{list}</div>
  )
}

export default ProductList