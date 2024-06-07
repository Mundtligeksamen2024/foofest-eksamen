import React from 'react'
import { Breadcrumb } from 'antd';


export default function Sti() {
    const separatorStyle = {
        color: 'white',
      };
  return (
    <>
     <Breadcrumb 
     separator={<span style={separatorStyle}>/</span>}
      items={[
      {
        title: <a style={{color: 'white', font: 'icon'}} href='/booking/ticketoverview'>Tickets</a>,
      },
      {
        title: <a style={{color: 'white', font: 'icon'}} href='/booking/campingArea'>Camping Area & Tents</a>,
      },
      {
        title: <a style={{color: 'white', font: 'icon'}} href='/booking/guestInformation'>Information</a>,
      },
      {
        title: <a style={{color: 'white', font: 'icon'}} href='/booking/payment'>Cart information</a>,
      },
      {
        title: <a style={{color: 'white', font: 'icon'}} href='/booking/orderConfirmationt'>Order comfirmation</a>,
      },
    ]}
    />
    </>
  )
};

