"use client";

// import components
import { Bowlby_One } from "next/font/google";
import React from 'react';
import FooTicket from '../components/FooTicket';
import VipTicket from '../components/VipTicket';
import BookingBanner from '../components/BookingBanner';
import BuyTicket from "../components/BuyTicket";

// set up font
const BowlbyOne = Bowlby_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

// main ticket component 
export default function TicketsPage() {
  return (
    <>
    {/* Booking banner */}
    <img className='m-auto w-full bg-center' src="/booking-hero.jpg" alt="banner" />
    <div className="flex justify-center">
      <div className="md:relative md:-mt-18 lg:relative lg:-mt-28 xl:relative xl:-mt-96">

        {/* Page title */}
        <h1 className={` text-White text-5xl md:text-8xl lg:text-8xl -mt-5 text-center mb-8 md:-mt-96 lg:-mt-96 ${BowlbyOne.className}`}>
          TICKETS
        </h1>

        {/* Ticket options */}
        <div className='flex flex-col items-center gap-10 p-10 text-White md:flex-row md:justify-center md:gap-20 md:p-15'>
          <FooTicket />
          <VipTicket />
        </div>

        {/* Buy ticket button */}
        <div className="flex mb-14">
        <BuyTicket />
        </div>
        </div>
      </div>
    </>
  );
}
