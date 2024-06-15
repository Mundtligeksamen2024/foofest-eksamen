// guest information / form 
"use client"
import { Bowlby_One } from "next/font/google";
import { Breadcrumb } from "antd";
import { useState } from "react";
import GuestForm from "@/app/components/GuestForm";
import InformationBasket from "@/app/components/Tickets/InformationBasket";
import CountdownTimer from "@/app/components/Countdown/timer";



const BowlbyOne = Bowlby_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const items = [
  { label: 'Home', path: '/' },
  { label: 'Tickets', path: '/booking/tickets' },
  { label: 'Camping Area', path: '/booking/campingArea' },
  { label: 'Guest Information', path: '/booking/guestInformation' }
];

export default function Formpage() {
  const [isTimeUp, setIsTimeUp] = useState(false);

  const handleTimeout = () => {
    setIsTimeUp(true);
  };

  return (
    <main className="md:flex md:justify-center">
      <div>
        <Breadcrumb items={items} />
      </div>
      <div className="text-White p-4 sm:p-6 md:p-8 m-4 sm:m-4 border-2 xl:mt-22 xl:mb-20 border-Hotpink">
      <div className="xl:text-2xl text-center p-3 xl:-mt-12 xl:mb-5 border-black border-b-hotpink md:hidden">
          <CountdownTimer initialSeconds={180} onTimeout={handleTimeout} />
      </div>

        <h1 className={`text-White text-3xl md:text-4xl mb-4 sm:mb-6 md:mb-8  ${BowlbyOne.className}`}>
          INFORMATION
        </h1>

        {/* ordre er skjult på desktop men vist på mobil */}
        <details className="md:hidden border-2 border-Hotpink p-3 w-80 mb-5">
              <summary className="mb-5">
                <span className="text-2xl">Oversigt over ordre</span>
              </summary>
          <div className="w-full md:flex">
            <div className="w-full max-w-md mb-6">
              <InformationBasket/>
            </div>
          </div>
          </details>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
          <div className="w-full">
            <div className="w-full mb-6 md:mb-4 lg:mb-2">
              <GuestForm />
            </div>
          </div>
        </div>
      </div>

      {/* Ordre bliver skjult på mobil men vist på de andre */}
      <div className="grid gap-5 mt-4">
      <div className="text-White border-2 p-3 border-Hotpink xl:text-2xl hidden md:block">
          <CountdownTimer initialSeconds={180} onTimeout={handleTimeout} />
      </div>
      <div className="hidden md:hidden-none md:flex border-2 border-Hotpink md:mb-20">
            <div className="">
              <InformationBasket />
            </div>
      </div>
      </div>
    </main>
  );
}