import React from 'react'
import { Bowlby_One } from 'next/font/google';

const BowlbyOne = Bowlby_One({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

function RotateBanner() {
    return (
        <div className="bg-Hotpink text-lg sm:text-6xl relative flex overflow-x-hidden font-medium mt-12">
            <div className={`py-3 sm:py-4 animate-marquee whitespace-nowrap text-White ${BowlbyOne.className}`}>
                <span className="mx-10">FOO FESTIVAL</span>
                <span className="mx-10">JULY 3RD - 10TH 2024</span>
                <span className="mx-10">TECHNO</span>
                <span className="mx-10">FOO FESTIVAL</span>
                <span className="mx-10">JULY 3RD - 10TH 2024</span>
                <span className="mx-10">TECHNO</span>
                <span className="mx-10">FOO FESTIVAL</span>
                <span className="mx-10 ">JULY 3RD - 10TH 2024</span>
                <span className="mx-10">TECHNO</span>
                <span className="mx-10">FOO FESTIVAL</span>
                <span className="mx-10">JULY 3RD - 10TH 2024</span>
                <span className="mx-10">TECHNO</span>
            </div>
        </div>
    )
}

export default RotateBanner
