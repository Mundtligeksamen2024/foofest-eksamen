import React from 'react'
import FooTicket from '../FooTicket'
import VipTicket from '../VipTicket'
import { Bowlby_One } from "next/font/google";
import BuyTicket from '../BuyTicket';

const BowlbyOne = Bowlby_One({
    subsets: ["latin"],
    weight: "400",
    display: "swap",
  });

function TicketForside() {
  return (
    <>
      <div className="text-center mb-20 bg-BlackBlack p-10">
        <h2 className={`text-White text-4xl md:text-5xl md:mb-8 ${BowlbyOne.className}`}>TICKETS</h2>
        <div className='flex flex-col items-center gap-10 p-5 text-White md:flex-row md:justify-center md:gap-20 md:p-15 md:mb-5'>
          <FooTicket />
          <VipTicket />
        </div>
        <BuyTicket />
      </div>
    </>
  )
}

export default TicketForside