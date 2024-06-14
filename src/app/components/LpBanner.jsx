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
    <div className="bg-[url('/forside.jpeg')] bg-cover bg-center ">
      <div className="h-screen flex justify-center items-center">
        <div className="text-center xl:text-center -mt-24 md:mt-0">
        
          <h1 className={`text-White text-7xl md:text-9xl ${BowlbyOne.className}`}>FOO FESTIVAL</h1>
          <div className="flex justify-center gap-5 text-White text-2xl md:text-xl">
            <p className='text-5xl font-bold'>Copenhagens biggest techno festival in 2024</p>
          </div>

          <Link href="#artistPoster">
            <p className="text-White text-center text-xl border-2 border-White p-3 w-40 m-auto mt-24 cursor-pointer animate-bounce rounded-full md:text-3xl md:w-72">Scroll Down</p>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default LpBanner
