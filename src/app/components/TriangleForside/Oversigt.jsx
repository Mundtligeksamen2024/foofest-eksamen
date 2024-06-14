import Link from 'next/link'
import React from 'react'

export default function Oversigt() {
  return (
    <>
    <section className='grid gap-5 p-20 md:flex md:justify-center md:gap-10'>
        <div className='border-2 border-Hotpink p-10 drop-shadow-lg'><Link href="/booking" className='text-White text-xl hover:text-Hotpink'>Tickets</Link></div>
 
        <div className='border-2 border-Hotpink p-10 drop-shadow-lg'><Link href="/lineup" className='text-White text-xl hover:text-Hotpink'>Artister</Link></div>
 
        <div className='border-2 border-Hotpink p-10 drop-shadow-lg'><Link href="/schedule" className='text-White text-xl hover:text-Hotpink'>Schedule</Link></div>
    </section>
    </>
  )
};

