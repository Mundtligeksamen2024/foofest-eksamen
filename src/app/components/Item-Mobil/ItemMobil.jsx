import SecondParentComponent from '../../ParentComponent/SecondParentComponent';
import ParentComponent from '../../ParentComponent/ParentComponent';


export default function ItemMobil(props) {
  const ticketCount = props.ticketcount2 + props.ticketcount1;
  const TotalTicketCount = props.ticketcount1 * 799 + props.ticketcount2 * 1299;
  const totalPrice = TotalTicketCount;

  return (
    <div className='grid gap-4 p-8 text-White'>
    <h2 className='text-xl'>{ticketCount} TICKETS  {TotalTicketCount} DKK</h2>
    <h2 className='text-xl'><span className='text-Hotpink font-bold'>TOTAL </span>  {totalPrice} DKK </h2>
    </div>
  );
}


