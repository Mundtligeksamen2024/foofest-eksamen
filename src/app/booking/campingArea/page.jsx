"use client"
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation';
import CampingTickets from "@/app/components/Tickets/CampingTickets";
import RemoveTentButton from '@/app/components/tentbuttons/RemoveTent';
import AddTentButton from '@/app/components/tentbuttons/AddTent';


export default function Home() {
  const searchParams = useSearchParams()
  const regular = searchParams.get('ticketcount1')
  const vip = searchParams.get('ticketcount2')

  // + laver det om til et tal fremfor en string
  // const [tentCount, setTentCount] = useState();
  // const [VipTentCount, setTentCount] = useState();
  const [ticketCount1, setTicketCount1] = useState(+regular);
  const [ticketCount2, setTicketCount2] = useState(+vip);


  // const [campingArea, setCampingArea] = useState('');
  // const [availableSpots, setAvailableSpots] = useState(null);

  // const handleCampingArea = (area) => {
  //   setCampingArea(prevArea => prevArea === area ? '' : area);
  // };

  const handleTicketChange = (count) => {
    setTicketCount1(count); 
  };
  
  const handleRemoveTicket = () => {
    if (ticketCount1 > 0) {
      setTicketCount1(prevCount => prevCount - 1);
    }
  };

  const handleTicketChange2 = (count) => {
    setTicketCount2(count);
  };
  
  const handleRemoveTicket2 = () => {
    if (ticketCount2 > 0) {
      setTicketCount2(prevCount => prevCount - 1);
    }
  };

  useEffect(() => {
    const available = fetch('https://yielding-cooperative-tarsal.glitch.me/available-spots')
      .then((res) => res.json());
  }, []);


  

  // const totalprice = regular + vip;



  return (
    <>
    <form action="">
    <div className="border-solid bg-Darkblue border-Hotpink border-2 rounded-3xl p-8 w-7/12 m-auto mt-10">
      <h1 className="text-White md:text-6xl">CHOOSE YOUR CAMPING AREA:</h1>
        <div className="flex justify-start p-8 gap-20">
          

          <div> 
            <div className='grid grid-cols-2 text-White'>
            <label className='hover:text-Hotpink'><input type="checkbox" /> Svartheim</label>
            <label className='hover:text-Hotpink'><input type="checkbox" /> Nilfheim</label>
            <label className='hover:text-Hotpink'><input type="checkbox" /> Helheim</label>
            <label className='hover:text-Hotpink'><input type="checkbox" /> Muspelheim</label>
            <label className='hover:text-Hotpink'><input type="checkbox" /> Alfheim</label>
            </div>
            <br />  

            <div className='flex gap-24'>
              <div className='text-White'>
                <h2 className="text-xl text-White"><span className='font-bold text-Lightpink'>2</span> PERSON TENT</h2>
                <p>799 DKK</p>
              </div>
              <div className='flex flex-row gap-3 h-6 items-center mt-4'>
                <RemoveTentButton onRemoveButtonClick={handleRemoveTicket} /> 
                <input 
                name="ticketcount1" 
                className='border-solid border-2 border-Lightpink rounded-full w-32 bg-White p-2' 
                value={ticketCount1} />
                <AddTentButton onButtonClick={() => handleTicketChange(ticketCount1 + 1)} />
              </div>
            </div>

            <br />
            <div className='flex gap-28'>
              <div>
                <h2 className='text-White text-xl'><span className='font-bold text-Lightpink'>3</span>PERSON TENT</h2>
                <p className='text-White text-base'>1299 DKK</p>
              </div>

              <div className='flex flex-row gap-3 h-6 items-center mt-4'>
                <RemoveTentButton onRemoveButtonClick={handleRemoveTicket2} /> 
                <input 
                name="ticketcount2" 
                className='border-solid border-2 border-Lightpink rounded-full w-32 bg-White p-2' 
                value={ticketCount2} />
                <AddTentButton onButtonClick={() => handleTicketChange2(ticketCount2 + 1)} />
              </div>
            </div>
            <br />
          </div>
    
      
          <div>
            <CampingTickets 
            ticketCount1={ticketCount1} 
            handleTicketChange={handleTicketChange} 
            handleRemoveTicket={handleRemoveTicket} 
            ticketPrice={799}
             ticketCount2={ticketCount2} 
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