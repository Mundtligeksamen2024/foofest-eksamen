"use client"

import React from 'react'
import BuyTicket from './BuyTicket'

export default function FooTicket() {

  return (
    <div className='grid gap-4 border-solid border-Hotpink border-2 p-10 w-72'>
      <h2 className='text-3xl text-start font-normal'><span className=''>FOO</span> TICKET</h2>

      <div className='text-start'>
        <ul className='list-disc list-inside'>
          <li>Festival area access</li>
          <li>Basic camping facilities</li>
          <li>Access to all stages</li>
        </ul>
      </div>

      {/* Children */}
      <h3 className='text-xl text-start'>From 799 DKK</h3>
      <BuyTicket />
    </div>
  );
}

