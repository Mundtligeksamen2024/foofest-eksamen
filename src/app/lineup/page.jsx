// line up

//import {useState, useEffect } from "react";


//async function getArtist(){
// const res = await fetch ("https://yielding-cooperative-tarsal.glitch.me/bands");
/*   const artists = await res.json();
  defineArtist(artists);
}
getArtists(); */

import { Bowlby_One } from "next/font/google";
import BandCard from "../components/BandCard";
 
const BowlbyOne = Bowlby_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default async function Page() {
  const response = await fetch(
    `https://yielding-cooperative-tarsal.glitch.me/bands`
  );
  const data = await response.json();
  console.log(data)

  return <section>
    <h1 className={`text-White text-6xl text-center mb-5 p-16 ${BowlbyOne.className}`}>LINE UP</h1>
    <BandCard />
  </section>

}
