// guest information / form 
"use client"
import { Bowlby_One } from "next/font/google";
import GuestForm from "@/app/components/GuestForm";
import InformationBasket from "@/app/components/Tickets/InformationBasket";
import { useEffect, useState } from "react";
import { Link } from "react";

const BowlbyOne = Bowlby_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function Formpage() {
  const [seconds, setSeconds] = useState(300); // 5 minutes
  const [isTimeUp, setIsTimeUp] = useState(false);

  useEffect(() => {
    if (seconds > 0) {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else {
      setIsTimeUp(true);
    }
  }, [seconds]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };


  return (
    <main>
      <div className="text-White p-4 sm:p-6 md:p-12 lg:px-16 m-4 sm:m-4 md:m-12 lg:mx-44 border-2 xl:mt-22 xl:mb-22 border-Hotpink">
      <div className="xl:text-2xl text-center p-3 xl:-mt-12 xl:mb-5 border-2 border-Black border-b-Hotpink">
      {isTimeUp ? (
        <p className="text-White">Times up!</p>
      ) : (
        <p className="text-White">Time remaining: {formatTime(seconds)}</p>
      )}
      </div>

        <h1 className={`text-White text-3xl md:text-4xl mb-4 sm:mb-6 md:mb-8  ${BowlbyOne.className}`}>
          INFORMATION
        </h1>

        {/* ordre er skjult på desktop men vist på mobil */}
        <details className="md:hidden">
              <summary className="mb-5">
                <span>Oversigt over ordre</span>
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

          {/* Ordre bliver skjult på mobil men vist på de andre */}
          <div className="hidden md:hidden-none w-full md:flex">
            <div className="w-full max-w-md mb-6">
              <InformationBasket />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}