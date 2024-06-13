import React, { useState, useEffect } from 'react';

const VipTicketCal = ({ ticketPrice, ticketAmount }) => {
  const [totalCost, setTotalCost] = useState(ticketAmount * ticketPrice);

  useEffect(() => {
    setTotalCost(ticketAmount * ticketPrice);
  }, [ticketAmount, ticketPrice]);


  return (
    <>
    <div className='flex gap-2 text-xl'>
      <h2>{ticketAmount}</h2>
      <h2><span className='text-Hotpink font-bold'>VIP</span> TICKET <br />{totalCost} DKK </h2>
    </div>
    </>
  );
};

export default VipTicketCal; 


