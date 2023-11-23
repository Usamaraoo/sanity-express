import Link from 'next/link'
import React from 'react'

export const NavBar = () => {
  return (
    <nav className='container py-6 flex justify-between items-center'>
        <Link href={'/'} className='logo '>Blogera</Link>
        <div>
          <Link href={'/'}><p className='navLink'>Home</p></Link>
        </div>
    </nav>
  )
}
