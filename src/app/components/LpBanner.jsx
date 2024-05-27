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
    <div className="bg-[url('/LPBANNERIMAGE.webp')] bg-cover bg-center p-12 h-screen">
      <div className="h-screen flex justify-center items-center">
        <div className="text-center">
        
          <h1 className={` text-White text-7xl md:text-8xl ${BowlbyOne.className}`}>FOO FESTIVAL</h1>
          <p className={` text-White text-2xl md:text-4xl ${BowlbyOne.className}`}>July 3rd - 10th 2024</p>

          <Link href="#artistPoster">
            <img src="/buttonpil.png" alt="Billede af en knap" className="h-16 w-16 mx-auto mt-24 cursor-pointer animate-bounce"/>

          </Link>

        </div>
      </div>
    </div>
  )
}

export default LpBanner
