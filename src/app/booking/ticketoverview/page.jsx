"use client"

import { useState } from 'react'
import { Bowlby_One } from "next/font/google";
import { useRouter } from 'next/navigation';
// import { Breadcrumb } from 'antd';

import Ticket from "@/app/components/Tickets/Ticket";
import RemoveTicket from '@/app/components/RemoveTicket';
import AddButton from '@/app/components/AddButton';
import ChooseTicket from '@/app/components/ChooseTicket';
import ItemMobil from '@/app/components/Item-Mobil/ItemMobil';


// // breadcrunb path
// const items = [
//   { label: 'Home', path: '/' },
//   { label: 'Tickets', path: '/booking/ticketoverview' }
// ];


// font setup
const BowlbyOne = Bowlby_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});


export default function Home() {
  const [ticketcount1, setTicketcount1] = useState(0);
  const [ticketcount2, setTicketcount2] = useState(0);

  const handleTicketChange = (count) => {
    setTicketcount1(count);
  };
  
  const handleRemoveTicket = () => {
    if (ticketcount1 > 0) {
      setTicketcount1(prevCount => prevCount - 1);
    }
  };

  const handleTicketChange2 = (count) => {
    setTicketcount2(count);
  };
  
  const handleRemoveTicket2 = () => {
    if (ticketcount2 > 0) {
      setTicketcount2(prevCount => prevCount - 1);
    }
  };

  const router = useRouter();
  
  return (
    <>
    {/* <div >
      <Breadcrumb items={items} className='' />
    </div> */}
    <form action='/booking/campingArea'>
    <section className='grid gap-5 md:flex md:justify-center md:w-4/6 md:m-auto md:mt-10 lg:mt-10 lg:m-auto lg:w-4/6'>

    {/* Vis kun på mobil */}
        <div className='mt-10 md:hidden gap-5 border-Hotpink border-2 w-11/12 m-auto'>
          <div >
            <ItemMobil 
            ticketcount1={ticketcount1} 
            handleTicketChange={handleTicketChange} 
            handleRemoveTicket={handleRemoveTicket} 
            ticketPrice={799}
             ticketcount2={ticketcount2} 
             handleTicketChange2={handleTicketChange2} 
             handleRemoveTicket2={handleRemoveTicket2} 
             ticketPrice2={1299} />
          </div>
    </div>

    <div className="w-11/12 p-8 m-auto border-solid border-Hotpink border-2 sm:mb-10">
      <h1 className={` ${BowlbyOne.className} text-White text-2xl lg:text-4xl mb-5`}>TICKETS</h1>
        <div className="grid gap-28">
    
          <div>
            <h2 className='mt-8 mb-5 sm:text-base xl:text-2xl md:mt-0 text-White'>CHOOSE YOUR TICKETS</h2>
            <div className='grid mb-5 2xl:flex 2xl:gap-24'> 
              <div className='text-White'>
                <h2 className="text-xl text-White"><span className='text-Hotpink font-bold'>FOO</span> TICKET</h2>
                <p>799 DKK</p>
              </div>
              <div className='flex flex-row gap-3 h-6 items-center mt-4'>
                <RemoveTicket onRemoveButtonClick={handleRemoveTicket} /> 
                <input 
                name="ticketcount1"
                className='border-solid border-2 border-Lightpink rounded-full w-32 bg-White p-2' 
                value={ticketcount1} />
                <AddButton onButtonClick={() => handleTicketChange(ticketcount1 + 1)} />
              </div>
            </div>

            <br />
            <div className='grid 2xl:flex 2xl:gap-28'>
              <div>
                <h2 className='text-White text-xl'><span className='font-bold text-Hotpink'>VIP</span> TICKET</h2>
                <p className='text-White text-base'>1299 DKK</p>
              </div>

              <div className='flex flex-row gap-3 h-6 items-center mt-4'>
                <RemoveTicket onRemoveButtonClick={handleRemoveTicket2} /> 
                <input 
                name="ticketcount2" 
                className='border-solid border-2 border-Lightpink rounded-full w-32 bg-White p-2' 
                value={ticketcount2} />
                <AddButton onButtonClick={() => handleTicketChange2(ticketcount2 + 1)} />
              </div>
            </div>
          </div>
        </div>
    </div>
    
    {/* Vis kun på desktop */}
    <div className='hidden md:block'>
          <div>
            <Ticket 
            ticketcount1={ticketcount1} 
            handleTicketChange={handleTicketChange} 
            handleRemoveTicket={handleRemoveTicket} 
            ticketPrice={799}
             ticketcount2={ticketcount2} 
             handleTicketChange2={handleTicketChange2} 
             handleRemoveTicket2={handleRemoveTicket2} 
             ticketPrice2={1299} />
          </div>
          <div className='m-auto'>
            <ChooseTicket />
          </div>
    </div>
    </section>
    </form>
    </>
  );
}







