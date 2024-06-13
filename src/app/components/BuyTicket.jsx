import React from 'react'
import Link from 'next/link';

export default function BuyTicket() {
  return (
    <Link className=' text-White bg-Hotpink font-bold py-2 px-6 text-sm md:text-xl text-center mt-5 w-fit m-auto hover:bg-Lightpink' href="/booking/ticketoverview">
      BUY TICKET
    </Link>
  );
}

