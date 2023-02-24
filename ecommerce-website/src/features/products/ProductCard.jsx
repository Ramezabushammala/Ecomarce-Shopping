
import React from 'react'
import { useNavigate } from 'react-router-dom'

function ProductCard({id,title,images,category,description}) {
  
  const navigate=useNavigate()
  
  const clickHandler=()=>{
    navigate(`/product/${id}`)
  }
   

  return (
    <>
      
      <div 
      className="card w-96 bg-base-100 shadow-xl cursor-pointer max-w-[300px] max-h-[350px] hover:shadow-xl hover:shadow-gray-400 duration-200"
      onClick={clickHandler}
      >
        <figure><img src={images[0]} alt={title}/></figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
          </h2>
          <p>{`${description.substring(0,30)}...`}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline bg-second text-white p-3 font-sem">{category.name}</div>
          </div>
        </div>
  </div>
      </>
  )
}

export default React.memo(ProductCard)