// tickets page (forsiden til billetter)
import { Bowlby_One } from "next/font/google";
import React from 'react'
import FooTicket from '../components/FooTicket';
import VipTicket from '../components/VipTicket';
import BookingBanner from '../components/BookingBanner';


const BowlbyOne = Bowlby_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata = {
  title: "Foo Fest | Buy Tickets",
  Description: "Discover FOO Festival 2024: Your ultimate destination for electrifying music and unforgettable experiences.",
};


export default function page() {
  return (
    <>
    <BookingBanner />
    <div>
      <h1 className={`text-White text-5xl -mt-5 text-center mb-8 md:text-8xl md:-mt-20 md:p-7 ${BowlbyOne.className}`}>TICKETS</h1>
      <div className='flex flex-col items-center gap-10 p-10 text-White md:flex-row md:justify-center md:gap-20 md:p-15'>
        <FooTicket />
        <VipTicket />
      </div>
    </div>
    </>
  );
}


