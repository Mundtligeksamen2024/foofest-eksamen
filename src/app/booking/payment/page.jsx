"use client"
//credit card information page
// import { Breadcrumb } from 'antd';
import CardPayment from '@/app/components/CardPayment'
import { useState } from 'react'
import CountdownTimer from "@/app/components/Countdown/timer";

const items = [
  { label: 'Home', path: '/' },
  { label: 'Tickets', path: '/booking/tickets' },
  { label: 'Camping Area', path: '/booking/campingArea' },
  { label: 'Guest Information', path: '/booking/guestInformation' },
  { label: 'Payment', path: '/booking/payment' },
  { label: 'Order Confirmation', path: '/booking/orderConfirmation' }
];

const [isTimeUp, setIsTimeUp] = useState(false);

const handleTimeout = () => {
  setIsTimeUp(true);
};


export default function Page() {
  return (
    <div>
      {/* <div>
        <Breadcrumb items={items} />
      </div> */}
      <div className="text-White xl:text-2xl text-center p-3 xl:mt-10 xl:mb-5">
          <CountdownTimer initialSeconds={180} onTimeout={handleTimeout} />
      </div>
      <CardPayment/>
    </div>
  )
}


