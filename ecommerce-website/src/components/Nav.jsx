import React from 'react'
import { Icon, useDisclosure } from '@chakra-ui/react'
import {GiHamburgerMenu} from 'react-icons/gi'

import { useSelector } from 'react-redux'

import {selectAllCategories, useGetCategoriesQuery} from '../features/categories/categoryApi'

import { NavLink } from 'react-router-dom'

import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'

  import Search from './Search'
function Nav() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {isError,isLoading,isSuccess,error}=useGetCategoriesQuery()
    const categories=useSelector(selectAllCategories)
    let categoryList=[]
    if(isSuccess){
      categoryList=categories.map(category=><NavLink to={`category/${category.id}`} className='' key={category.id}>{category.name}</NavLink>)
    }
  
    return (
    <nav className='flex justify-end items-center bg-first py-4 pr-5 '>
        <div className="hidden md:flex gap-7 justify-end items-center text-white text-sm font-semibold">
        {isLoading&&<p className='p-2'>'Loading..'</p>}
        {!isLoading&&isError?<p className='p-2'>{error?.data?.message}</p>:''}
        {!isLoading&&isSuccess?categoryList:''}
        
        </div>
        {/* drawer */}
        <div className="md:hidden">
        <p className='text-second font-bold text-lg '>
        <Icon as={GiHamburgerMenu} onClick={onOpen} />
        </p>
        <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Search</DrawerHeader>

          <DrawerBody>
            <Search/>
            <div className='flex flex-col gap-4 mt-5 text-gray-500 font-semibold'>
            {categoryList}
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
        </div>
    </nav>
  )
}

export default Nav