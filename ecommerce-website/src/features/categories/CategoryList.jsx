import {selectAllCategories, useGetCategoriesQuery} from './categoryApi'

import Category from './Category'
import { useSelector } from 'react-redux'

function CategoryList() {
    
    const {isError,isLoading,isSuccess,error}=useGetCategoriesQuery()
    const categories=useSelector(selectAllCategories)
    let content=''

    if(isLoading){
        content=<p className='mt-[100px] text-center'>"Loading.."</p>
    }else if(isError){
        content=<p className='mt-[100px] text-center'>{error?.data?.message}</p>
    }else if(isSuccess&&categories.length>0){
        // content=<div className='flex flex-wrap gap-x-6 gap-y-8 justify-center  items-center'>{
        content=<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-8'>{
            categories.map(c=><Category
                key={c.id}
                {...c}
                />)
            }</div>
    }else{
        content=<p className='mt-[100px] text-center'>No Data To Show."</p>
        
    }
    
    return (
    <div className='top-p containerr pb-[50px]'>
        <h3 className='font-bold text-[26px] text-first tracking-[1px] uppercase mb-[30px]'>CATEGORY</h3>
        {content}
    </div>
  )
}

export default CategoryList