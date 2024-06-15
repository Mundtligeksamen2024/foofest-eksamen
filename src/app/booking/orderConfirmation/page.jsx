"use client"

import { Bowlby_One } from "next/font/google";
import { Breadcrumb } from "antd";


import Link from "next/link"

const BowlbyOne = Bowlby_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const items = [
  { label: 'Home', path: '/' },
  { label: 'Tickets', path: '/booking/tickets' },
  { label: 'Camping Area', path: '/booking/campingArea' },
  { label: 'Guest Information', path: '/booking/guestInformation' },
  { label: 'Order Confirmation', path: '/booking/orderConfirmation' }
];


export default function Page() {

  return (
    <>
  <div>
    <Breadcrumb items={items} />
  </div>
    <section className="p-10 pt-28 xl:p-20 mb-16">
    <div className="text-White p-6 m-0 md:p-20 md:m-28 border-2 border-Hotpink">
      <h1 className={`font-bold text-center mb-3 text-sm md:text-4xl ${BowlbyOne.className}`}>THANK <span className='text-Hotpink'>YOU</span> FOR YOUR ORDER</h1>
      <h2 className="text-md text-center md:text-xl mb-2 md:mb-7">We have sent an order confirmation along with your tickets to your email!</h2>
      <div className='flex items-center justify-center'>
      <Link className="font-bold text-sm md:text-lg text-center text-White px-4 py-2 md:px-10 md:py-4 mt-8 rounded-full
       bg-Hotpink hover:bg-Lightpink max-w-auto" href={`/`}>
        REDIRECT TO FRONT PAGE</Link>
      </div>
    </div>
    </section>
    </>
  )
}

