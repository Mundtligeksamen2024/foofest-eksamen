"use client"
import React from 'react'
import Artistcard from "@/app/components/Artistcard";
import LineupBanner from '../components/LineupBanner';
import { Bowlby_One } from 'next/font/google';

const BowlbyOne = Bowlby_One({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});



function page() {
  return (
    <div>
      <img className='m-auto w-full bg-center' src="/lineup2.jpg" alt="banner" />
      <div className='flex text-3xl -mt-10 mb-0 justify-center md:text-4xl md:-mt-72 lg:-mt-72 lg:text-8xl'>
        <h1 className={`text-White md:relative lg:relative xl:relative md:-mt-18 lg:-mt-28 xl:-mt-96 ${BowlbyOne.className}`}>
          LINE UP</h1></div>
      <Artistcard />
    </div>
  )
}

export default page

