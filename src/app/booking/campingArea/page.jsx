"use client"
import { useState } from 'react'
import { Bowlby_One } from "next/font/google";
import { useSearchParams } from 'next/navigation';

import CampingTickets from "@/app/components/Tickets/CampingTickets";
import RemoveTent from '@/app/components/Buttons/RemoveTent';
import AddTent from '@/app/components/Buttons/AddTent';
import ChooseTicket from '@/app/components/ChooseTicket';


const BowlbyOne = Bowlby_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});


export default function Home() {
   const searchParams = useSearchParams()
   const regular = searchParams.get('ticketcount1')
   const vip = searchParams.get('ticketcount2')

  // + laver det om til et tal fremfor en string
  const [twoTentTicket, setTwoTentTicket] = useState(0);
  const [threeTentTicket, setThreeTentTicket] = useState(0);
  const [campingArea, setCampingArea] = useState('');


  const handleAddTent = (count) => {
    setTwoTentTicket(count);  
  };
  
  const handleRemoveTent = () => {
    if (twoTentTicket > 0) {
      setTwoTentTicket(prevCount => prevCount - 1);
    }
  };

  const handleAddVipTent = (count) => {
    setThreeTentTicket(count);
  };
  
  const handleRemoveVipTent = () => {
    if (threeTentTicket > 0) {
      setThreeTentTicket(prevCount => prevCount - 1);
    }
  };

  const handleCampingArea = (e) => {
    if(e.target.checked){
      setCampingArea(e.target.value)
    } else setCampingArea('')
    
  }



  return (
    <>
    <form action="/booking/guestInformation">
      <input type="hidden" name="ticketcount1" value={regular}/>
      <input type="hidden" name="ticketcount2" value={vip}/>

    <div className="w-11/12 p-3 border-solid border-Hotpink border-2 xl:px-20 xl:py-8 lg:w-9/12 m-auto mt-28 xl:mb-28">
      <h1 className={`text-White text-2xl mb-10 md:mb-0 lg:text-4xl ${BowlbyOne.className}`}>CAMPING AREA</h1>
        <div className="grid gap-10 xl:flex xl:justify-between xl:py-8">

          <div className=''> 
            <h2 className='text-White sm:text-base xl:text-2xl font-bold mb-5'>CHOOSE YOUR CAMPING AREA</h2>
            <div className='grid xl:grid-cols-2 text-White'>
            <label className='hover:text-Hotpink text-xl mt-2'><input className='w-5 h-5' defaultValue="Svartheim" onChange={handleCampingArea} type="radio" name='area' /> Svartheim</label>
            <label className='hover:text-Hotpink text-xl mt-2'><input className='w-5 h-5' defaultValue="Nilfheim" onChange={handleCampingArea} type="radio" name='area' /> Nilfheim</label>
            <label className='hover:text-Hotpink text-xl mt-2'><input className='w-5 h-5' defaultValue="Helheim" onChange={handleCampingArea} type="radio" name='area' /> Helheim</label>
            <label className='hover:text-Hotpink text-xl mt-2'><input className='w-5 h-5' defaultValue="Muspelheim" onChange={handleCampingArea} type="radio" name='area' /> Muspelheim</label>
            <label className='hover:text-Hotpink text-xl mt-2'><input className='w-5 h-5' defaultValue="Alfheim" onChange={handleCampingArea} type="radio" name='area' /> Alfheim</label>
            </div>
            <br />  

            <h2 className='text-White text-2xl mb-5 mt-10 font-bold'>TENTS</h2>

            <div className='grid 2xl:flex 2xl:gap-24'>
              <div className='text-White'>
                <h2 className="text-xl text-White"><span className='font-bold text-Hotpink'>2</span> PERSON TENT</h2>
                <p>299 DKK</p>
              </div>

              <div className='flex flex-row gap-3 h-6 items-center mt-4 mb-5 2xl:ml-4'>
                <RemoveTent onRemoveTentClick={handleRemoveTent} /> 
                <input 
                name="twoTentTicket" 
                value={twoTentTicket}
                className='border-solid border-2 border-Lightpink rounded-full w-32 bg-White p-2' />
                <AddTent onAddTentClick={() => handleAddTent(twoTentTicket + 1)} />
              </div>
            </div>

            <br />
            <div className='grid 2xl:flex 2xl:gap-28'>
              <div>
                <h2 className='text-White text-xl'><span className='font-bold text-Hotpink'> 3 </span>PERSON TENT</h2>
                <p className='text-White text-base'>399 DKK</p>
              </div>

              <div className='flex flex-row gap-3 h-6 items-center mt-4'>
                <RemoveTent onRemoveTentClick={handleRemoveVipTent} /> 
                <input 
                name="threeTentTicket" 
                value={threeTentTicket}
                className='border-solid border-2 border-Lightpink rounded-full w-32 bg-White p-2' 
                 />
                <AddTent onAddTentClick={() => handleAddVipTent(threeTentTicket + 1)} />
              </div>
            </div>
            <br />
          </div>

          <div className='grid gap-5'>
          <div className='m-auto xl:mr-44'> 
            <CampingTickets 
            tentTicket={twoTentTicket} 
            handleAddTent={handleAddTent} 
            handleRemoveTent={handleRemoveTent} 
            tentPrice={299}
            threeTentTicket={threeTentTicket} 
             handleAddVipTent={handleAddVipTent} 
             handleRemoveVipTent={handleRemoveVipTent} 
             threeTentPrice={399} 
             campingArea={campingArea}
             />  
          </div>
          <div className='m-auto xl:ml-32'>
            <ChooseTicket />
          </div>
          </div>
        </div>
    </div>
    </form>
    </>
  );
}