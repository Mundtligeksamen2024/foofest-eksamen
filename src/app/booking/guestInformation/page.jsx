// guest information / form 
"use client"
import { Bowlby_One } from "next/font/google";
import GuestForm from "@/app/components/GuestForm";
import InformationBasket from "@/app/components/Tickets/InformationBasket";

const BowlbyOne = Bowlby_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function Formpage() {
  return (
    <main>
      <div className="text-White p-4 sm:p-6 md:p-12 lg:px-16 m-4 sm:m-4 md:m-12 lg:mx-44 border-2 xl:mt-24 xl:mb-28 border-Hotpink">
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