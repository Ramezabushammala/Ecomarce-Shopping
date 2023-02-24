import { Divider } from '@chakra-ui/react'
import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import OrderSummary from '../../components/OrderSummary'
import CartItem from './CartItem'
import { selectItems , selectTotalPrice,clearTheState} from './cartSlice'

const CartPage = () => {
    const dispatch=useDispatch()
    const items=useSelector(selectItems)
    
    const totalPrice=useSelector(selectTotalPrice)
    
    const clearHandler=()=>{
        dispatch(clearTheState())
    }


    if(items.length===0)return <p className='p-5 text-center'>Cart Is Empty.</p>
    
    const list=items.map(item=><CartItem key={item.id} {...item}/>)
 

    return (
     <div className="containerr py-[50px] grid grid-cols-1 lg:grid-cols-2  gap-x-5 gap-y-10 items-start">
         <div className="">
            <div className='flex flex-col gap-5 grow'>{list}</div>
            <Divider my={'10px'}/>
            <button
            onClick={clearHandler}
            className='px-5 py-1 bg-red-500 rounded-md text-white'>Clear</button>
         </div>

        <OrderSummary 
        totalPrice={totalPrice}
        totalItems={items.length}
        />
         
     </div>   
  )
}

export default CartPage