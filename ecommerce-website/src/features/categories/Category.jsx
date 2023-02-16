import React from 'react'
import { useNavigate } from 'react-router-dom'
function Category({id,name,image}) {
  
  const navigate=useNavigate()
  const clickHandler=()=>{
    navigate(`category/${id}`)
  }
  return (
    <div className=' max-w-[300px]  place-self-center'>
        
            <div 
            className="image cursor-pointer w-full h-[300px] md:h-[250px] rounded-md overflow-hidden items-center "
            onClick={clickHandler}
            >            
                <img src={image} alt="category" className='w-full h-full'/>
            </div>
            <h4 
            className='text-center font-bold mt-3 cursor-pointer'
            onClick={clickHandler}
            >{name}</h4>
        
    </div>
  )
}

export default React.memo(Category)