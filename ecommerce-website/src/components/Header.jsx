import {NavLink} from 'react-router-dom'
import Search from './Search'

import { selectItemsLength } from '../features/cart/cartSlice'

// icons
import {BsFillCartFill} from 'react-icons/bs'
import { useSelector } from 'react-redux'

function Header() {
  const length=useSelector(selectItemsLength)
  return (
    <header className='bg-white  py-3 containerr '>
        <div className="containerr custom-flex">
        <NavLink to='/'>
            <div className="logo text-first font-bold text-2xl lg:text-3xl">Shopping<span className='text-second'>Hub.</span></div>
        </NavLink>
        <div className='hidden md:block'>
          <Search/>
        </div>
        <NavLink to='cart'>
            <div className="cart relative flex items-center gap-1 text-lg  text-[#63766b]"><span><BsFillCartFill/></span> Cart
              <div className="absolute -top-2 -right-5 text-xs bg-second w-[20px]  h-[20px] rounded-full text-center font-semibold flex justify-center items-center">{length}</div>
            </div>
        </NavLink>
        </div>
    </header>
  )
}

export default Header