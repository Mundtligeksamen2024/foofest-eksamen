import React from 'react'
import Link from "next/link";
import { Bowlby_One } from "next/font/google";

const BowlbyOne = Bowlby_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});


function LpBanner() {
  return (
    <div className="bg-[url('/techno.jpg')] bg-cover bg-center p-12 brightness-75">
      <div className="h-screen flex justify-center items-center">
        <div className="text-center -mt-24 md:mt-0">
        
          <h1 className={` text-White text-7xl md:text-8xl ${BowlbyOne.className}`}>FOO FESTIVAL</h1>
          <div className="flex justify-center gap-5 text-White text-2xl md:text-xl">
            <p>July 3rd</p>
            <p className='text-Lightpink'>|</p>
            <p>10th</p>
            <p className='text-Lightpink'>|</p>
            <p>2024</p>
          </div>

          <Link href="#artistPoster">
            <img src="/buttonpil.png" alt="Billede af en knap" className="h-16 w-16 mx-auto mt-24 cursor-pointer animate-bounce"/>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default LpBanner
