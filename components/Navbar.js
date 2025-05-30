import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='bg-[#4c044b] text-white h-20 flex items-center justify-around gap-7 px-3'>
        <div className="logo font-bold text-2xl">
            <Link href='/'>Linkly</Link>
        </div>
        <ul className='flex items-center gap-7 justify-center '>
            <Link href='/'><li>Home</li></Link>
            <Link href='/about'><li>About</li></Link>
            <Link href='/shorten'><li>Shorten</li></Link>
            <Link href='/contact'><li>Contact us</li></Link>
            <div className='flex gap-3'>
              <Link href='/shorten'><button className='bg-[#2a172c] rounded-xl font-bold p-3 shadow-xl py-1'>Try Now</button></Link>
              <Link href='/github'><button className='bg-[#2a172c] rounded-xl font-bold p-3 shadow-xl py-1'>Github</button></Link>
            </div>
        </ul>
    </nav>
  )
}

export default Navbar
