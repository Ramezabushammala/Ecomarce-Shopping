import React,{useState,useEffect} from 'react'

import { Card, CardBody, Image, Divider } from '@chakra-ui/react'

import { useDispatch } from 'react-redux'
import { useGetProductByIdQuery } from '../products/productApi'
import {updateItemQuantity,deletItem} from './cartSlice'

import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'

const CartItem = ({id,quantity}) => {
    const {data,isLoading,error,isError}=useGetProductByIdQuery(id)

    const [itemQuantity,setItemQuantity]=useState(quantity)
    
    
    console.log('item id: ',id)

    const dispatch=useDispatch()

    const deleteHandler=(itemId)=>{
      dispatch(deletItem(itemId))
      
    }
    useEffect(()=>{
        
        dispatch(updateItemQuantity({id,quantity:itemQuantity}))
        

    },[itemQuantity,dispatch,id])


    if(isLoading){
        return <p className='p-5 text-center'>Loading..</p>
        }else if(isError){
        return <p className='text-center p-5'>{error.data.message}</p>
        }
        
    const {ids,entities}=data
    const product=entities[ids[0]]
    const {title,price,images}=product  
    const totalPrice=price*quantity
    
    return (
    <div>
        <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  justifyContent={'space-between'}
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={images[0]}
    alt={title}
  />

  
    <CardBody>
      <h1 className='font-semibold text-lg'>{title}</h1>

      <div className='mt-3 flex items-center justify-between flex-wrap gap-2'>
        <h2 className="font-semibold text-gray-500">{`Price: $${price}`}</h2>
        <h3 className=" font-bold text-gray-600">{`Sub Total: $${totalPrice}`}</h3>
      </div>

      <Divider my={'20px'}/>
            <div className="mt-3 flex items-center justify-between flex-wrap gap-5">

                <div className=" flex items-center gap-3 text-xl">
                    <h3 className='text-gray-500'>Qty:</h3>
                    <div className='flex gap-4 items-center'>
                        <button 
                        className='border border-gray-300 rounded-md p-1'
                        onClick={()=>setItemQuantity(prev=>prev-1)}><AiOutlineMinus/></button>
                        <p>{itemQuantity}</p>
                        <button 
                        className='border border-gray-300 rounded-md p-1'
                        onClick={()=>setItemQuantity(prev=>prev+1)}><AiOutlinePlus/></button>
                    </div>
                </div>

                <button 
                onClick={()=>deleteHandler(id)}
                className='cursor-pointer bg-red-500 text-sm text-white font-semibold p-1 rounded-md'>Remove</button>
            </div>

    </CardBody>

        </Card>

        
    </div>
  )
}

export default React.memo(CartItem)