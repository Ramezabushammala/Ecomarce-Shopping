import React,{useState} from 'react'
import { Link, useParams } from 'react-router-dom'

import { useDispatch,useSelector } from 'react-redux'
import { useGetProductByIdQuery } from './productApi'
import { addItem } from '../cart/cartSlice'

import { selectItemById } from '../cart/cartSlice'

import { useNavigate } from 'react-router-dom'

import { Divider } from '@chakra-ui/react'

import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'

const ProductPage = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const {productId}=useParams()
    
    const [quantity,setQuantity]=useState(1)


    const {data,isLoading,error,isError}=useGetProductByIdQuery(+productId)
    const isAlreadyExistInCart=useSelector(state=>selectItemById(state,+productId))?true: false



        if(isLoading){
        return <p className='p-5 text-center'>Loading..</p>
        }else if(isError){
        return <p className='text-center p-5'>{error.data.message}</p>
        }
        const {ids,entities}=data
        const product=entities[ids[0]]

        const clickHandler=()=>{
            dispatch(addItem({id:product?.id,quantity,price:product?.price}))
            navigate('/cart')
        }

        

    return (
        <div className="p-5 pb-10 grid grid-cols-1 items-center md:grid-cols-2 gap-x-8 gap-y-8 containerr">
            <div className="img ">
                <img 
                className='object-cover w-full'
                src={product.images[0]} alt={product.title} />
            </div>

            <div className='flex flex-col gap-5'>
                <h1 className="text-xl text-first font-semibold">{product.title}</h1>
                <p className='text-gray-500 '>{product.description}</p>
                <h2 className='text-gray-800 font-bold'>{`price: $${product.price}`}</h2>
                <Divider />
                <div className="mt-3 flex items-center gap-3 text-xl">
                    <h3 className='text-gray-500'>Qty:</h3>
                    <div className='flex gap-4 items-center'>
                        <button 
                        className='border border-gray-300 rounded-md p-1'
                        onClick={()=>setQuantity(prev=>prev-1)}><AiOutlineMinus/></button>
                        <p>{quantity}</p>
                        <button 
                        className='border border-gray-300 rounded-md p-1'
                        onClick={()=>setQuantity(prev=>prev+1)}><AiOutlinePlus/></button>
                    </div>
                </div>
                    <button
                    disabled={isAlreadyExistInCart} 
                    onClick={clickHandler}
                    className={`${isAlreadyExistInCart?'bg-gray-500':'bg-second'} p-2 text-white rounded-md mt-3`}>Add To Card</button>
                    {isAlreadyExistInCart&&<p className='text-red-400'>The Product Is Already In <Link className='text-blue-500 underline' to='/cart'>The Cart</Link>.</p>}
            </div>
        </div>
  )
}

export default ProductPage