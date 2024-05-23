"use client"
import { useState } from 'react'

import Ticket from "@/app/components/Tickets/Ticket";
import RemoveButton from '@/app/components/RemoveButton';
import AddButton from '@/app/components/AddButton';


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
  



  return (
    <>
    <form action='/booking/campingArea'>
    <div className="border-solid bg-Darkblue border-Hotpink border-2 rounded-3xl p-8 w-7/12 m-auto mt-10">
      <h1 className="text-White md:text-6xl">CHOOSE YOUR TICKET:</h1>
        <div className="flex justify-start p-8 gap-20">
    
          <div>
            <div className='flex gap-24'>
              <div className='text-White'>
                <h2 className="text-xl text-White">FOO TICKET</h2>
                <p>799 DKK</p>
              </div>
              <div className='flex flex-row gap-3 h-6 items-center mt-4'>
                <RemoveButton onRemoveButtonClick={handleRemoveTicket} /> 
                <input name="ticketcount1" className='border-solid border-2 border-Lightpink rounded-full w-32 bg-White p-2' value={ticketcount1} />
                <AddButton onButtonClick={() => handleTicketChange(ticketcount1 + 1)} />
              </div>
            </div>

            <br />
            <div className='flex gap-28'>
              <div>
                <h2 className='text-White text-xl'><span className='font-bold text-Lightpink'>VIP</span> TICKET</h2>
                <p className='text-White text-base'>1299 DKK</p>
              </div>

              <div className='flex flex-row gap-3 h-6 items-center mt-4'>
                <RemoveButton onRemoveButtonClick={handleRemoveTicket2} /> 
                <input 
                name="ticketcount2" 
                className='border-solid border-2 border-Lightpink rounded-full w-32 bg-White p-2' 
                value={ticketcount2} />
                <AddButton onButtonClick={() => handleTicketChange2(ticketcount2 + 1)} />
              </div>
            </div>
          </div>
    
      
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
        </div>
    </div>
    </form>
    </>
  );
}







