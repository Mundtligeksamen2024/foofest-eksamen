import SecondParentComponent from '../../ParentComponent/SecondParentComponent';
import ParentComponent from '../../ParentComponent/ParentComponent';


export default function Ticket(props) {

  const ticketCount = props.ticketcount2 + props.ticketcount1;
  const TotalTicketCount = props.ticketcount1 * 799 + props.ticketcount2 * 1299;
  const totalPrice = TotalTicketCount;


  return (
    <div className='grid gap-4 border-solid border-Hotpink border-2 p-7 text-White w-72'>
    <h2 className='text-White md:text-2xl lg:text-4xl font-bold'>ITEMS</h2> 
    
    <ParentComponent 
     ticketCount={props.ticketcount1} 
     handleTicketChange={props.handleTicketChange} 
     handleRemoveTicket={props.handleRemoveTicket} 
     ticketPrice={799}/>

    <SecondParentComponent  
    ticketCount={props.ticketcount2} 
    handleTicketChange={props.handleTicketChange2} 
    handleRemoveTicket={props.handleRemoveTicket2}  
    ticketPrice={1299}/>

    <hr className='text-Hotpink border-t-2'/>

    <h2 className='text-xl'>{ticketCount} TICKETS  {TotalTicketCount} DKK</h2>
    <h2 className='text-xl'><span className='text-Hotpink font-bold'>TOTAL </span>  {totalPrice} DKK </h2>
    </div>
  );
}


