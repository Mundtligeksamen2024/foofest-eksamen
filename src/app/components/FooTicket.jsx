"use client"

import Link from 'next/link';
import React from 'react'


export default function FooTicket() {

  return (
    <>
    <Link href="/booking/ticketoverview">
    <div className='grid gap-4 border-solid border-Hotpink border-2 p-10 w-full md:w-80 bg-Black hover:bg-BlackBlack'>
      <h2 className='text-3xl text-start font-normal'><span className=''>FOO</span> TICKET</h2>

      <div className='text-start'>
        <ul className='list-disc list-inside'>
          <li>Festival area access</li>
          <li>Basic camping facilities</li>
          <li>Access to all stages</li>
        </ul>
      </div>

      {/* Children */}
      <h3 className='text-xl text-start'>From 799 DKK <br /><span className='text-sm'>Pr Ticket</span></h3>
    </div>
    </Link>
    </>
  );
}

