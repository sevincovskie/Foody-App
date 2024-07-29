import React from 'react'
import Link from 'next/link'

import { useRouter } from 'next/router';


function ClientNavbar() {
    const { push, pathname } = useRouter()
  return (
    
         <ul className=" gap-2 md:justify-around text-lg w-full md:w-1/2 text-client-main-gray1 font-medium hidden md:flex">
        
          <Link href="/">
            <li style={{ color: pathname === '/' ? '#D63626' : '#828282' }}>Home</li>
          </Link>
          <Link href="/restaurants">
            <li style={{ color: pathname === '/restaurants' ? '#D63626' : '#828282' }}>Restaurants</li>
          </Link>
          <Link href="/aboutUs">
            <li style={{ color: pathname === '/aboutUs' ? '#D63626' : '#828282' }}>About us</li>
          </Link>
          <Link href="/howItWorks">
            <li style={{ color: pathname === '/howItWorks' ? '#D63626' : '#828282' }}>How it works</li>
          </Link>
          <Link href="/faqs">
            <li style={{ color: pathname === '/faqs' ? '#D63626' : '#828282' }}>FAQs</li>
          </Link>
        
        
      </ul>
      
    
  )
}

export default ClientNavbar



