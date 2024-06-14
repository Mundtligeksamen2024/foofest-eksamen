import Link from 'next/link'
import React from 'react'

export default function Oversigt() {
  return (
    <>
    <section className='grid gap-5 p-20 md:flex md:justify-center md:gap-28 bg-Black md:p-20 mb-20'>
        <div className=' p-5 md:p-10 drop-shadow-lg rotate-45'>
          <Link href="/booking">
            <p className='text-White text-xl md:text-3xl hover:text-Hotpink -rotate-45 '>
              Tickets</p></Link></div>
 
        <div className=' p-5 md:p-10 drop-shadow-lg rotate-45'>
          <Link href="/lineup" >
            <p className='text-White text-xl md:text-3xl hover:text-Hotpink -rotate-45 '>
              Artister</p></Link></div>
 
        <div className=' p-5 md:p-10 drop-shadow-lg rotate-45'>
          <Link href="/schedule" >
            <p className='text-White text-xl md:text-3xl hover:text-Hotpink -rotate-45 '>
              Schedule</p></Link></div>
    </section>
    </>
  )
};

