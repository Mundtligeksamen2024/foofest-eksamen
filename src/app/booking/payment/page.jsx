"use client"

import { useState } from 'react'
// import { Breadcrumb } from 'antd';
import CardPayment from '@/app/components/CardPayment'
import CountdownTimer from "@/app/components/Countdown/timer";

const items = [
  { label: 'Home', path: '/' },
  { label: 'Tickets', path: '/booking/tickets' },
  { label: 'Camping Area', path: '/booking/campingArea' },
  { label: 'Guest Information', path: '/booking/guestInformation' },
  { label: 'Payment', path: '/booking/payment' },
  { label: 'Order Confirmation', path: '/booking/orderConfirmation' }
];

export default function Page() {
  const [isTimeUp, setIsTimeUp] = useState(false);

const handleTimeout = () => {
  setIsTimeUp(true);
};

  return (
    <div>
      {/* <div>
        <Breadcrumb items={items} />
      </div> */}
      <div className="text-White xl:text-2xl text-center p-3 xl:mt-10 xl:mb-5 border-2 border-Hotpink lg:w-3/6 lg:m-auto">
          <CountdownTimer initialSeconds={180} onTimeout={handleTimeout} />
      </div>
      <CardPayment/>
    </div>
  )
}


