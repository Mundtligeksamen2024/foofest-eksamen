"use client"
import { useSearchParams } from 'next/navigation';


export default function TentTicket(props) {
  //Info fra ticketsoverview
  const searchParams = useSearchParams()

  //Tickets
  const footicket = searchParams.get('ticketcount1')
  const vipticket = searchParams.get('ticketcount2')

  //CampingArea
  const area = searchParams.get('area')

  //Tents
  const twoTentTicket = searchParams.get('twoTentTicket')
  const threeTentTicket = searchParams.get('threeTentTicket')

  //Tent
  const totalTentCount = twoTentTicket * 299 + threeTentTicket * 399;

  //Lægger antal af tickets til hinanden her
  const ticketCount = +vipticket + +footicket;

  //Lægger antal af Tents til hinanden her
  const tentCount = +twoTentTicket + +threeTentTicket;


  const fooTicketsPrice = footicket * 799;
  const vipTicketsPrice = vipticket * 1299;

  const twoTentsPrice = twoTentTicket * 299;
  const threeTentsPrice = threeTentTicket * 399;

  const TicketsPrice = footicket * 799 + vipticket * 1299;
  const TentsPrice = twoTentTicket * 299 + threeTentTicket * 399;
  
//Booking fee på 99 kr
  const bookingFee = totalTentCount > 0 ? 99 : 0;

  const tentAndTicketsPrice = TicketsPrice + TentsPrice;
  const totalPrice = bookingFee + tentAndTicketsPrice;




  return (
    <>
    <form action="">
    <div className='grid gap-4 p-8 text-White w-72 xl:w-96'>
    <h2 className='text-White text-4xl font-bold'>ITEMS</h2>
    
    <div className='flex gap-2 text-xl'>
      <h2>{footicket}X</h2>
      <h2><span className='text-Hotpink font-bold'>FOO</span> TICKETS <br /> {fooTicketsPrice} DKK</h2>
    </div>

    <div className='flex gap-2 text-xl'>
      <h2>{vipticket}X</h2>
      <h2><span className='text-Hotpink font-bold'>VIP</span> TICKETS <br /> {vipTicketsPrice} DKK</h2>
    </div>

    <div className='flex gap-2 text-xl'>
      <h2>{twoTentTicket}X </h2>
      <h2><span className='text-Hotpink font-bold'>2</span> PERSONS TENT <br /> {twoTentsPrice} DKK</h2>
    </div>

    <div className='flex gap-2 text-xl'>
      <h2>{threeTentTicket}X</h2>
      <h2><span className='text-Hotpink font-bold'>3</span> PERSONS TENT <br /> {threeTentsPrice} DKK</h2>
    </div>  

    <h2 className='-mb-4 text-xl'>AREA</h2>
    <p className='text-Hotpink text-xl'>{area}</p>

    <hr className='text-Hotpink'/>

    <h2 className='text-xl -mb-4'>{tentCount} TENTS {TentsPrice} DKK </h2>
    <h2 className='text-xl -mb-4'>{ticketCount} TICKETS {tentAndTicketsPrice} DKK</h2> 
    <p className='text-xs'>BOOKING FEE 99 DKK</p>

    <p className='text-xl'><span className='text-Hotpink font-bold'>TOTAL</span> {totalPrice} DKK </p>  
    
    </div>
    </form>
    </>
  );
}


