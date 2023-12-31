
import { useState } from 'react'

import { useNavigate } from 'react-router-dom'
function Search() {
  const navigate=useNavigate()
  const [search,setSearch]=useState('')

  const submitHandler=(e)=>{
    e.preventDefault()
    // setSearch('')
    navigate(`/product/search?searchValue=${search}`)
  }
  

  return (
    <div className=''>
        <form 
        onSubmit={e=>submitHandler(e)}
        action='/'  className='w-[280px] md:w-[300px] lg:w-[350px]'>   
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only  ">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true"  className="w-5 h-5 text-gray-500 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input 
                value={search}
                onChange={e=>setSearch(e.target.value)}
                type="search" id="default-search"  className="outline-0 block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  " placeholder="Search..." required/>
                <button type="submit"  className="text-white absolute right-2.5 bottom-2.5 bg-second focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">Search</button>
            </div>
        </form>
    </div>
  )
}

export default Search