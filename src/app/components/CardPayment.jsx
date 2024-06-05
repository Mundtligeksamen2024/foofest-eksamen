"use client"
import "react-credit-cards-2/dist/es/styles-compiled.css";
import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import { Bowlby_One } from "next/font/google";
import Link from "next/link";
 
const BowlbyOne = Bowlby_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});


const CardPayment = () => {
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    
    setState((prev) => ({ ...prev, [name]: value }));
  }

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  }
  return (
    <div className='p-6 m-12 rounded-3xl border-2 border-Hotpink xl:mt-28 max-w-5xl mx-auto'>
      <h1 className={`text-2xl text-center text-White md:text-4xl mt-2 mb-8 ${BowlbyOne.className}`}>PAYMENT DETAILS</h1>
      <div className='md:grid grid-cols-2 justify-center items-center'>
        <section>
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />
      </section>
      <section>
      <form className='flex flex-col m-6'>
        <input className='m-4 p-2 rounded-md bg-White hover:bg-White active:bg-White focus:outline-none focus:ring focus:ring-Hotpink'
          type="numeric"
          name="number"
          placeholder="Card Number"
          pattern="\d{4}\s\d{4}\s\d{4}\s\d{4}"
          maxLength="16"
          required
          value={state.number}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input className='m-4 p-2 rounded-md  bg-White hover:bg-White active:bg-White focus:outline-none focus:ring focus:ring-Hotpink'
          type="text"
          name="name"
          placeholder="Full Name"
          required
          value={state.name}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <div className='grid grid-cols-2'>
          <input className='m-4 p-2 rounded-md  bg-White hover:bg-White active:bg-White focus:outline-none focus:ring focus:ring-Hotpink'
          type="numeric"
          name="expiry"
          placeholder="Expiration date"
          pattern="\d\d/\d\d"
          maxLength="4"
          required
          value={state.expiry}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input className='m-4 p-2 rounded-md  bg-White hover:bg-White active:bg-White focus:outline-none focus:ring focus:ring-Hotpink'
          type="numeric"
          name="cvc"
          placeholder="CVC"
          pattern="\d{3}"
          maxLength="3"
        required
          value={state.cvc}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        </div>
        
        <Link className="text-center text-White p-2 m-4 font-bold rounded-full bg-Hotpink hover:bg-Lightpink text-white w-60" href={`/booking/orderConfirmation`}>
        COMPLETE PURCHASE</Link>
       
      </form>
      </section>
    </div>
    </div>
  );
}

export default CardPayment;
