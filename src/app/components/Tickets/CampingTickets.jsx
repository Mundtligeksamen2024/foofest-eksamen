import ChooseTicket from '../ChooseTicket';  
import TentTicketCalculator from '../TentTicket/TentTicketCalulator';


export default function Ticket(props) {

  const ticketCount = props.ticketCount2 + props.ticketCount1;
  const TotalTicketCount = props.ticketCount1 * 799 + props.ticketCount2 * 1299;
  const bookingFee = TotalTicketCount > 0 ? 99 : 0;
  const totalPrice = TotalTicketCount + bookingFee;



  return (
    <div className='grid gap-4 border-solid border-Hotpink border-2 rounded-3xl p-8 text-White w-64'>
    <h2 className='text-White text-2xl font-bold'>ITEMS</h2>
    
    <h2>{ticketCount} FOO TICKETS {totalPrice}</h2>
    
    <TentTicketCalculator 
    tentAmount1={props.tentCount1} 
    handleTentChange={props.handleTentChange1} 
    handleRemoveTent={props.handleRemoveTent1} 
    tentPrice1={799}/>  

    <TentTicketCalculator 
    tentAmount2={props.tentCount2} 
    handleTentChange={props.handleTentChange2} 
    handleRemoveTent={props.handleRemoveTent2} 
    tentPrice2={1299}/>

    

    <h2>Camping Area</h2>
    <p>{}</p>

    <h2>{ticketCount} TICKETS {TotalTicketCount}</h2>
    <p>BOOKING FEE {bookingFee} DKK</p>

    <p className='text-xl'><span className='text-Hotpink'>TOTAL</span> {totalPrice} DKK </p>
  
    <ChooseTicket />
    </div>
  );
}


