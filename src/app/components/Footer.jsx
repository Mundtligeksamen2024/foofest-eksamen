import React from 'react';
import { Bowlby_One } from "next/font/google";
import Link from 'next/link';

const BowlbyOne = Bowlby_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function Footer() {
  return (
    <section className='p-5 md:p-10 bg-Black'>
      <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8  text-center md:text-left'>
        
        <div className='order-2 md:order-1'>
          <h2 className='text-Hotpink font-bold text-xl xl:text-1xl mb-2'>SUPPORT</h2>
          <Link className='text-md md:text-base text-White hover:text-Hotpink' href="/about">About Foo Festival</Link> <br />
          <Link className='text-md md:text-base text-White hover:text-Hotpink' href="/privacy-policy">Privacy policy</Link> <br />
          <Link className='text-md md:text-base text-White hover:text-Hotpink' href="/termsofuse">Terms of use</Link>
          {/* <p className='text-md md:text-base text-White hover:text-Hotpink'>FAQ</p> */}
        </div>

        <div className='order-1 md:order-2 md:flex md:flex-col md:items-center'>
          <h2 className={`text-White font-bold text-xl xl:text-1xl ${BowlbyOne.className}`}><span className='text-Hotpink'>© </span>FOO FESTIVAL</h2>
          <p className='text-base text-White'>KEA - MMD 3. SEM</p>
        </div>

        <div className='order-3 md:order-3 md:ml-0 lg:ml-32'>
          <h2 className='text-Hotpink font-bold text-xl xl:text-1xl mb-2'>INFORMATION</h2>
          <p className='text-md md:text-base text-White'>info@foofestival.com</p>
          <p className='text-md md:text-base text-White'>+45 12 34 54 32</p>
          <p className='text-md md:text-base text-White'>Festvej 1, 8000 Aarhus</p>
        </div>

      </div>
    </section>
  );
}
