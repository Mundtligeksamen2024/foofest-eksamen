"use client"
import TicketCal from '../components/Calculator/TicketCal';


const ParentComponent = ({ticketCount, ticketPrice}) => {
 
  return (
    <>
    <div className='text-White flex gap-8'>
      <div>
        <TicketCal ticketPrice={ticketPrice} ticketAmount={ticketCount} /> 
      </div>
    </div>
  </>
  );
};

export default ParentComponent;  
