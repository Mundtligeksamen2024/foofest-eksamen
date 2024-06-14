import Link from 'next/link'
import React from 'react'

export default function Oversigt() {
  return (
    <>
    <section className='grid gap-5 p-20 md:flex md:justify-center md:gap-20 bg-Black md:p-20 mb-20'>
        <div className='border-2 border-Hotpink p-10 drop-shadow-lg rotate-45'>
          <Link href="/booking">
            <p className='text-White text-xl hover:text-Hotpink -rotate-45 pl-1 pr-1 pt-5 pb-4'>
              Tickets</p></Link></div>
 
        <div className='border-2 border-Hotpink p-10 drop-shadow-lg rotate-45'>
          <Link href="/lineup" >
            <p className='text-White text-xl hover:text-Hotpink -rotate-45 pl-1 pr-1 pt-6 pb-5'>
              Artister</p></Link></div>
 
        <div className='border-2 border-Hotpink p-10 drop-shadow-lg rotate-45'>
          <Link href="/schedule" >
            <p className='text-White text-xl hover:text-Hotpink -rotate-45 pl-1 pr-1 pt-7 pb-7'>
              Schedule</p></Link></div>
    </section>
    </>
  )
};

