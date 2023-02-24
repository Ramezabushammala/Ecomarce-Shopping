import { Divider } from '@chakra-ui/react'

const OrderSummary = ({totalPrice,totalItems}) => {
  return (
    <div className='p-5 border-gray-300 bg-[#f8f8fa] sm:w-[80%] lg:mx-auto'>
        <h1 className='text-xl font-semibold'>Order Summary</h1>
        <Divider my={'20px'}/>
        
        <div className='flex flex-col gap-3 pb-[50px]'>

            <div className="flex items-center justify-between">
                <p>{`Selected ${totalItems} items(s) Price`}</p>
                <p className='font-bold text-gray-500'>${totalPrice}</p>
            </div>
            <div className="flex items-center justify-between">
                <p>{`Discount`}</p>
                <p className='font-bold text-gray-500'>-${'0.00'}</p>
            </div>
            <div className="flex items-center justify-between">
                <p>{`Delivery Cost`}</p>
                <p className='font-bold text-gray-500'>+${'10.00'}</p>
            </div>
        </div>
        <Divider my={'20px'}/>
        <div className="flex items-center justify-between">
                <p className='text-xl font-semibold'>Grand Total:</p>
                <p className='font-bold text-gray-500'>${totalPrice+10}</p>
        </div>
        <button className='mt-5 p-2 bg-second text-white w-full rounded-md'>Proceed to Checkout</button>
    </div>
  )
}

export default OrderSummary