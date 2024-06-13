"use client"
import VipTicketCal from '../components/Calculator/VipTicketCal';


const ParentComponent = ({ticketCount, ticketPrice}) => {

  return (
    <>
    <div className='text-White flex gap-8'>
      <div>
        <VipTicketCal ticketPrice={ticketPrice} ticketAmount={ticketCount} />
      </div>
    </div>
  </>
  );
};

export default ParentComponent;
