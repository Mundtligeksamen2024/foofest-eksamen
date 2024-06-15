import TwoTentParent from '@/app/ParentComponent/TwoTentParent';
import ThreeTentParent from '@/app/ParentComponent/ThreeTentParent';
import { useSearchParams } from 'next/navigation';


export default function TentTicket(props) {
  //Info fra ticketsoverview
  const searchParams = useSearchParams()
  const footicket = searchParams.get('ticketcount1')
  const vipticket = searchParams.get('ticketcount2')

  //Tent
  const tentTicketCount = props.threeTentTicket + props.tentTicket;
  const totalTentCount = props.tentTicket * 299 + props.threeTentTicket * 399;

  //Ticket den forrige side
  const ticketCount = +vipticket + +footicket;
  const TotalTicketCount = footicket * 799 + vipticket * 1299;
  const bookingFee = totalTentCount > 0 ? 99 : 0;
  const totalPrice = TotalTicketCount;

  const totalTentPrice = totalTentCount + totalPrice + bookingFee; 



  return (
    <>
    <div className='m-auto w-11/12'>
    <div className='grid gap-4 mt-20 border-solid border-Hotpink border-2 p-8 text-White lg:w-72 xl:w-96'>
    <h2 className='text-White text-4xl font-bold mb-5'>ITEMS</h2>

    <h2 className='-mb-4 text-xl'>CAMPING AREA</h2>
    <p className='text-Hotpink'>{props.campingArea}</p>

    <hr className='text-Hotpink border-t-2'/>

    <h2 className='text-xl -mb-5'>{tentTicketCount}X TENTS {totalTentCount} DKK</h2>
    <h2 className='text-xl -mb-5'>{ticketCount}X TICKETS <span>{totalPrice} DKK</span></h2>
    <p className='text-xs'>BOOKING FEE 99 DKK</p>

    <p className='text-xl'><span className='text-Hotpink font-bold'>TOTAL</span> {totalTentPrice} DKK </p>
    
    </div>
    </div>
    </>
  );
}


