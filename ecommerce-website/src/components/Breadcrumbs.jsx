import { Link, useLocation } from "react-router-dom"
import {
    Breadcrumb,
    BreadcrumbItem,
  } from '@chakra-ui/react'

import {AiFillHome} from 'react-icons/ai'
import {GoChevronRight} from 'react-icons/go'

const Breadcrumbs = () => {
    const location=useLocation()

    if(location.pathname==='/')return ''

    let currentPath=''
    const crumbs=location.pathname.split('/').filter(c=>c!=='').map(c=>{
        currentPath+='/'+c
        return(
            <BreadcrumbItem key={c}>
                <Link to={currentPath}><p className="font-semibold">{c.toUpperCase()}</p></Link>
            </BreadcrumbItem>
            
        )
    })
    
  return (
    <div className="containerr py-3 text-first">
        <Breadcrumb spacing='8px' separator={<GoChevronRight/>}>

            <BreadcrumbItem>
                <Link to='/'>{<AiFillHome/>}</Link>
            </BreadcrumbItem> 
            {crumbs}

        </Breadcrumb>
    </div>
  )
}

export default Breadcrumbs