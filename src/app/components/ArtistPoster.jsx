"use client"
import React from 'react'
import { useState, useEffect } from "react";
import Link from "next/link";
import { Bowlby_One } from "next/font/google";
 
const BowlbyOne = Bowlby_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

function ArtistPoster() {
    const [names, setNames] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      fetch("https://yielding-cooperative-tarsal.glitch.me/bands")
        .then((res) => res.json())
        .then((data) => {
          setNames(data);
          setIsLoading(false);
        });
    }, []);

    return (
      <div className='p-4'>
          <div className='max-w-6xl mx-auto mt-12 mb-24 border-l-Hotpink border-r-Hotpink border-r-2 border-l-2 p-6 md:p-12 rounded-xl'>
              <Link href={`/lineup/`}>
                  <h1 className={`text-White text-center text-4xl md:text-5xl mb-12 ${BowlbyOne.className}`}>LINE UP</h1>
              </Link>

              <ul className={`flex flex-wrap gap-3 md:gap-5 items-baseline justify-center uppercase`}>
                  {names.slice(0, 30).map((band, index) => (
                      <li
                          key={band.slug}
                          className={
                              index < 4
                                  ? "text-2xl md:text-4xl cursor-pointer text-White hover:text-Hotpink hover:scale-105 transition duration-300 ease-in-out font-bold"
                                  : index < 16
                                      ? "text-lg md:text-2xl cursor-pointer text-White hover:text-Hotpink hover:scale-105 transition duration-300 ease-in-out font-bold"
                                      : "text-sm md:text-md cursor-pointer text-White hover:text-Hotpink hover:scale-105 transition duration-300 ease-in-out font-bold"
                          }
                      >
                          <Link href={`/lineup/${band.slug}`}>
                              {band.name}
                          </Link>
                      </li>
                  ))}
              </ul>
          </div>
      </div>
  );
}

export default ArtistPoster
